import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csvParser from 'csv-parser';
import e from 'express';

const prisma = new PrismaClient();

export async function importBrands() {
  const brandsSet = new Set(); // Используем Set для хранения уникальных брендов

  fs.createReadStream('products.csv')
    .pipe(csvParser())
    .on('data', (row) => {
      const brandName = row['Доп. поле: Бренд'];
      if (brandName) { // Проверяем, что название бренда не пустое
        brandsSet.add(brandName); // Добавляем бренд в Set (дубликаты автоматически игнорируются)
      }
    })
    .on('end', async () => {
      try {
        // Преобразуем Set обратно в массив объектов для Prisma
        const uniqueBrands = Array.from(brandsSet).map((name) => ({ name }));

        // Вставляем уникальные бренды в базу данных
        await prisma.brand.createMany({
          data: uniqueBrands,
          skipDuplicates: true, // На всякий случай оставляем skipDuplicates
        });

        console.log(uniqueBrands);
        console.log(`✅ Импортировано ${uniqueBrands.length} уникальных брендов!`);
      } catch (error) {
        console.error('❌ Ошибка при импорте:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}