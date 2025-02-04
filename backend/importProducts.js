import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csvParser from 'csv-parser';

const prisma = new PrismaClient();

async function importProducts() {
  const products = [];

  fs.createReadStream('products.csv')
    .pipe(csvParser())
    .on('data', (row) => {
      products.push({
        name: row.name,
        brand: row.brand || null,
        price: parseFloat(row.price),
      });
    })
    .on('end', async () => {
      try {
        await prisma.product.createMany({
          data: products,
          skipDuplicates: true, // Пропускает дубликаты
        });

        console.log(`✅ Импортировано ${products.length} товаров!`);
      } catch (error) {
        console.error('❌ Ошибка при импорте:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}

importProducts();
