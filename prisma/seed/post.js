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
    "The Rise of Remote Work Culture",
    "Top 5 Productivity Apps You Should Try",
    "How to Build a Minimalist Wardrobe",
    "The Psychology of Habit Formation",
    "A Beginner’s Guide to Meditation",
    "Essential Coding Practices for Beginners",
    "What I Learned from a Year of Daily Journaling",
    "Is College Still Worth It in 2025?",
    "How to Save Money Without Sacrificing Fun",
    "The Ethics of Artificial Intelligence",
    "Daily Routines of Highly Successful People",
    "10 Easy Vegan Recipes for Busy Weeknights",
    "Photography Tips for Absolute Beginners",
    "Why You Should Learn to Say No",
    "Eco-Friendly Living: Small Steps, Big Impact",
    "How to Travel on a Budget",
    "The Science Behind Better Sleep",
    "Digital Decluttering: Organize Your Online Life",
    "Best Tools for Freelancers in 2025",
    "Side Hustles You Can Start This Weekend",
    "How to Deal with Burnout and Stress",
    "Introvert’s Guide to Networking",
    "The Rise of Indie Game Developers",
    "Tips for Writing Your First Novel",
    "What Makes a Great Portfolio Website?",
    "Social Media Detox: Why You Need One",
    "The History and Future of Web Design",
    "How to Build a Personal Brand Online",
    "Understanding Crypto in Simple Terms",
    "Smartphone Photography Hacks You’ll Love",
    "Why Walking is the Ultimate Exercise",
    "How to Create a Capsule Wardrobe",
    "Starting a Blog: A Beginner’s Guide",
    "The Art of Deep Work and Focus",
    "How to Read More Books in Less Time",
    "Mental Health and the Modern World",
    "The Power of Gratitude in Everyday Life",
    "Fitness Myths You Need to Stop Believing",
    "Why Emotional Intelligence Beats IQ",
    "Home Office Setup Ideas for Maximum Productivity",
    "The Rise of AI in Creative Industries",
    "How to Build a Morning Routine That Sticks",
    "Travel Hacks for First-Time Backpackers",
    "The Digital Nomad Lifestyle: Pros and Cons",
    "What I Learned from Failing a Startup",
    "How to Stay Creative in a Distracted World",
    "Everything You Need to Know About NFTs",
    "How to Master Public Speaking",
    "Tiny Habits That Lead to Big Changes",
    "Making Peace with Your Inner Critic",
  ];

  // Create one post per user (up to sampleTitles.length)
  for (let i = 0; i < users.length && i < sampleTitles.length; i++) {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const user = users[i];
    const title = sampleTitles[i];
    const slug = faker.helpers.slugify(title.toLowerCase());

    await prisma.post.create({
      data: {
        slug,
        title,
        desc: faker.lorem.paragraphs(10),
        img: `https://picsum.photos/seed/post-${i}/800/600`,
        catSlug: randomCategory.slug,
        userEmail: user.email,
      },
    });

    console.log(`Post "${title}" created for ${user.email}`);
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
