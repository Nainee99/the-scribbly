const { PrismaClient } = require("../../src/generated/prisma");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 50; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
    });
    const image = faker.image.avatar();
    const emailVerified = faker.date.past({ years: 1 });

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        image,
        emailVerified,
      },
    });

    // Create account
    await prisma.account.create({
      data: {
        userId: user.id,
        type: "oauth",
        provider: "github",
        providerAccountId: faker.string.uuid(),
        access_token: faker.string.alphanumeric(30),
        refresh_token: faker.string.alphanumeric(30),
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: "bearer",
        scope: "user",
        id_token: faker.string.alphanumeric(40),
        session_state: faker.string.alphanumeric(20),
      },
    });

    // Create session
    await prisma.session.create({
      data: {
        userId: user.id,
        sessionToken: faker.string.uuid(),
        expires: faker.date.future({ years: 1 }),
      },
    });

    // Create verification token
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: faker.string.alphanumeric(40),
        expires: faker.date.future({ years: 1 }),
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeding complete!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
