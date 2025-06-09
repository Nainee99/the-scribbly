const { PrismaClient } = require("../../src/generated/prisma");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.findMany();
  const users = await prisma.user.findMany();

  if (categories.length === 0 || users.length === 0) {
    throw new Error("Please seed categories and users first.");
  }

  const sampleTitles = [
    "The Future of Technology",
    "10 Must-Visit Travel Destinations",
    "Healthy Eating Habits You Should Adopt",
    "Mastering Personal Finance in Your 20s",
    "How to Stay Fit with a Busy Schedule",
    "Exploring the World of AI and Machine Learning",
    "Top Fashion Trends for 2025",
    "The Impact of Social Media on Education",
    "Beginner’s Guide to Investing",
    "Secrets to Work-Life Balance",
  ];

  for (let i = 0; i < 10; i++) {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const title = sampleTitles[i % sampleTitles.length];
    const slug = faker.helpers.slugify(title.toLowerCase());

    await prisma.post.create({
      data: {
        slug,
        title,
        desc: faker.lorem.paragraphs(5),
        img: `https://picsum.photos/seed/post-${i}/800/600`, // reliable random image
        catSlug: randomCategory.slug,
        userEmail: randomUser.email,
      },
    });

    console.log(`Post "${title}" created`);
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
