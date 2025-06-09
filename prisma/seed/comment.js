const { PrismaClient } = require("../../src/generated/prisma");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

// 100 realistic sample comment phrases
const commentPhrases = [
  "Great read, thank you for sharing!",
  "I learned something new today.",
  "Can you elaborate more on this topic?",
  "I completely agree with your points.",
  "This was really helpful.",
  "Well written and insightful.",
  "Looking forward to more posts like this!",
  "Not sure I agree, but it's interesting.",
  "You made me think differently about this.",
  "This deserves more attention.",
  "Thanks for breaking it down so clearly.",
  "Could you share your sources?",
  "I appreciate your writing style.",
  "Awesome perspective!",
  "Loved this — shared it with friends.",
  "Bookmarking this one.",
  "More of this, please!",
  "Your voice is so refreshing in this space.",
  "I've been struggling with this — thank you!",
  "Such an underrated topic.",
  "I laughed at the third point 😂",
  "Do you have a newsletter?",
  "Wish I read this earlier!",
  "How did you come up with this idea?",
  "The example you gave was perfect.",
  "Totally relatable.",
  "This is gold!",
  "I disagree, but respectfully.",
  "Really makes you think.",
  "Is there a follow-up post?",
  "Love the simplicity of your writing.",
  "Thank you for the inspiration.",
  "Couldn’t have said it better.",
  "Just what I needed today.",
  "This should be required reading.",
  "You nailed it.",
  "Please write more about this.",
  "New fan here 👋",
  "Felt like you were speaking directly to me.",
  "Subtle and powerful.",
  "I’ve read this three times now.",
  "Yes yes yes!",
  "Great way to explain a tough concept.",
  "How can I support your work?",
  "Keep doing what you're doing!",
  "You should speak on this at a conference.",
  "Every sentence hit home.",
  "I had to pause and think.",
  "Beautifully written.",
  "So much truth in this.",
  "Thanks for being honest.",
  "Needed this perspective.",
  "Simple but powerful.",
  "Can’t wait to read more.",
  "Why isn't this viral?",
  "Will share this with my team.",
  "Super insightful post!",
  "You just gained a new follower.",
  "Made my day.",
  "Can I quote you on this?",
  "Hard to disagree with that.",
  "Please write a book!",
  "I’m bookmarking this for later.",
  "You should start a podcast.",
  "I had no idea about this!",
  "What an eye-opener.",
  "Saves me hours of research.",
  "So glad I stumbled upon this.",
  "This post is everything.",
  "I'm using this in my project.",
  "That example sealed the deal.",
  "One of your best posts yet.",
  "Totally underrated insight.",
  "I’d pay to read stuff like this.",
  "Do you have a GitHub repo?",
  "I'm subscribing right now.",
  "This changed my opinion.",
  "I’ll be thinking about this all day.",
  "Love your perspective.",
  "You should tweet this.",
  "Wish more people saw this.",
  "Resonates deeply with me.",
  "This post = 🔥🔥🔥",
  "Brilliant piece of writing.",
  "Please do a video on this.",
  "Thank you for your transparency.",
  "Absolutely genius.",
  "You just solved my problem.",
  "Sending this to my team.",
  "This should be a thread.",
  "Writing like this is rare.",
  "You really care — I can tell.",
  "Made me smile 😊",
  "Couldn’t stop reading.",
  "Whew — powerful stuff.",
  "This deserves more love.",
  "Inspired me to take action.",
  "Sharing this with my mentor.",
  "This hit different.",
  "You're doing important work.",
  "I’m going to apply this today.",
  "Wow — this is great.",
  "I’ll be quoting this for sure.",
  "Adding this to my references.",
  "One word: brilliant.",
];

async function main() {
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();

  if (users.length === 0 || posts.length === 0) {
    throw new Error("Please seed users and posts before seeding comments.");
  }

  for (let i = 0; i < commentPhrases.length; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomPost = posts[Math.floor(Math.random() * posts.length)];

    await prisma.comment.create({
      data: {
        desc: commentPhrases[i],
        userEmail: randomUser.email,
        postSlug: randomPost.slug,
      },
    });

    console.log(
      `🗨️  Comment ${i + 1} created for post "${randomPost.slug}" by "${
        randomUser.email
      }"`
    );
  }

  console.log("\n✅ All comments seeded successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding comments:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
