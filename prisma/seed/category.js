const { PrismaClient } = require("../../src/generated/prisma");
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
  "Politics",
  "Startups",
  "Parenting",
  "Productivity",
  "Fitness",
  "History",
  "Gaming",
  "Books",
  "AI & Machine Learning",
  "Mental Health",
  "DIY",
  "Environment",
  "Spirituality",
  "Culture",
  "Photography",
  "Design",
  "Programming",
];

async function main() {
  let created = 0;
  let skipped = 0;

  for (const title of newCategories) {
    const slug = faker.helpers.slugify(title.toLowerCase());
    const exists = await prisma.category.findUnique({ where: { slug } });

    if (!exists) {
      await prisma.category.create({
        data: {
          slug,
          title,
          img: `https://picsum.photos/seed/${slug}/600/400`,
        },
      });
      console.log(`✅ Created category: ${title}`);
      created++;
    } else {
      console.log(`⚠️ Category already exists: ${title}`);
      skipped++;
    }
  }

  console.log("\n✅ Seeding complete!");
  console.log(`🆕 Created: ${created} | ⏭ Skipped: ${skipped}`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding categories:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
