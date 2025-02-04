import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csvParser from 'csv-parser';
import e from 'express';

const prisma = new PrismaClient();

export async function importProducts() {
  const products = [];

  fs.createReadStream('products.csv')
    .pipe(csvParser())
    .on('data', (row) => {
      products.push({
        name: row['Наименование'],
        brand: row['Доп. поле: Бренд'],
        price: parseFloat(row['Цена: Розничная цена']),
      });
    })
    .on('end', async () => {
      try {
        await prisma.product.createMany({
          data: products,
          skipDuplicates: true, // Пропускает дубликаты
        });
        console.log(products)
        console.log(`✅ Импортировано ${products.length} товаров!`);
      } catch (error) {
        console.error('❌ Ошибка при импорте:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}
