import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // First, check if the Free plan exists
  const freePlan = await prisma.plan.findFirst({
    where: { name: "Free" },
  });

  if (!freePlan) {
    await prisma.plan.create({
      data: {
        name: "Free",
        priceCents: 0,
        currency: "usd",
        interval: "month",
      },
    });
    console.log("Created Free plan");
  }

  // Check if the Pro plan exists
  const proPlan = await prisma.plan.findFirst({
    where: { name: "Pro" },
  });

  if (!proPlan) {
    await prisma.plan.create({
      data: {
        name: "Pro",
        priceCents: 999,
        currency: "usd",
        interval: "month",
      },
    });
    console.log("Created Pro plan");
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
