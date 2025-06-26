import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Starting forceful database schema reset ---');
  console.log('Connecting to the database to drop and recreate the public schema...');

  try {
    // A transaction ensures both operations are treated as a single unit
    await prisma.$transaction([
      prisma.$executeRawUnsafe(`DROP SCHEMA public CASCADE;`),
      prisma.$executeRawUnsafe(`CREATE SCHEMA public;`),
    ]);
    console.log('Public schema has been successfully dropped and recreated.');
  } catch (error) {
    console.error('An error occurred while trying to drop and recreate the schema:', error);
    throw new Error('Could not reset the database schema via raw SQL execution.');
  }

  console.log('--- Forceful reset script completed successfully ---');
}

main()
  .catch(async (e) => {
    console.error('A critical error occurred during the forceful reset process:');
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    // Ensure the prisma client is disconnected
    await prisma.$disconnect();
  });
