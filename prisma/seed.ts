/*const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const randomInfo = [
  {
    id: 1,
    title: 'Task A',
    createdAt: new Date(Date.now()),  // Current time for createdAt
    updatedAt: new Date('2024-09-18T10:00:00'),  // Static value for updatedAt
    description: 'Sample text for test A.',
    completed: true,
  },
  {
    id: 2,
    title: 'Task B',
    createdAt: new Date(Date.now()),  // Current time for createdAt
    updatedAt: new Date('2024-09-18T10:00:00'),  // Static value for updatedAt
    description: 'Sample text for test B.',
    completed: false,
  },
  {
    id: 3,
    title: 'Task C',
    createdAt: new Date(Date.now()),  // Current time for createdAt
    updatedAt: new Date('2024-09-18T10:00:00'),  // Static value for updatedAt
    description: 'Sample text for test C.',
    completed: false,
  },
  {
    id: 4,
    title: 'Task D',
    createdAt: new Date(Date.now()),  // Current time for createdAt
    updatedAt: new Date('2024-09-18T10:00:00'),  // Static value for updatedAt
    description: 'Sample text for test D.',
    completed: true,
  },
  {
    id: 5,
    title: 'Task E',
    createdAt: new Date(Date.now()),  // Current time for createdAt
    updatedAt: new Date('2024-09-18T10:00:00'),  // Static value for updatedAt
    description: 'Sample text for test E.',
    completed: false,
  },
  {
    id: 6,
    title: 'Task F',
    createdAt: new Date(Date.now()),  // Current time for createdAt
    updatedAt: new Date('2024-09-18T10:00:00'),  // Static value for updatedAt
    description: 'Sample text for test F.',
    completed: true,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  
  // Use createMany for bulk inserts
  await prisma.task.createMany({
    data: randomInfo.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,  // Add the static updatedAt value here
    })),
  });

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
*/