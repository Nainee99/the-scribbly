const { PrismaClient } = require("../src/generated/prisma");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const newCategories = [
  "Technology",
  "Health",
  "Finance",
  "Education",
  "Entertainment",
  "Sports",
  "Travel",
  "Food",
  "Lifestyle",
  "Science",
  "Art",
  "Business",
  "Music",
];

async function main() {
  for (const [index, title] of newCategories.entries()) {
    const slug = faker.helpers.slugify(title.toLowerCase());
    const existing = await prisma.category.findUnique({ where: { slug } });

    if (!existing) {
      await prisma.category.create({
        data: {
          slug,
          title,
          img: `https://picsum.photos/seed/newcat-${index}/600/400`,
        },
      });
      console.log(`Category ${title} created`);
    } else {
      console.log(`Category ${title} already exists`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
