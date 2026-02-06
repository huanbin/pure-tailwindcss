import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
//https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client
import { PrismaClient } from "./generated/prisma/client";

const adapter = new PrismaMariaDb({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

async function getCustomers() {
	return await prisma.customers.findMany({ include: { orders: true } });
}

export { prisma, getCustomers };
