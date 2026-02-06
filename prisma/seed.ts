import { prisma } from "../lib/prisma";
export default async function main() {
    const customer = await prisma.vendor.create({
        data: {
            name: "北京梦旭长航科技有限公司",
            taxCode: "91110108MA01A2B123",
            bankAccount: "110210123456789",
            bankBranch: "中国银行北京分行望京支行",
            contactEmail: "mengxu@163.com",
            phoneNumber: "13800138000",
            address: "北京市朝阳区望京SOHO T3",
            orders: {
                create: [
                    {
                        orderNumber: "TCYH-CGHT-2025-001",
                        totalAmount: 50000,
                        status: "PENDING",
                        material: {
                            create: [
                                {
                                    name: "高性能计算服务器",
                                    type: "联想ThinkSystem SR650",
                                    unit: "台",
                                    quantity: 120,
                                    price: 2000.0,
                                    codeNumber: "7000001",
                                },
                                {
                                    name: "企业级存储设备",
                                    type: "NetApp FAS2750",
                                    unit: "台",
                                    quantity: 100,
                                    price: 1000.0,
                                    codeNumber: "7000002",
                                },
                            ],
                        },
                    },
                    {
                        orderNumber: "TCYH-CGHT-2025-002",
                        totalAmount: 75000,
                        status: "COMPLETED",
                        material: {
                            create: [
                                {
                                    name: "电子元器件1",
                                    type: "类型A",
                                    unit: "个",
                                    quantity: 100,
                                    price: 5.5,
                                    codeNumber: "7001001",
                                },
                                {
                                    name: "电子元器件2",
                                    type: "类型B",
                                    unit: "个",
                                    quantity: 200,
                                    price: 0.86,
                                    codeNumber: "7001002",
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });
    console.log("Created customer:", customer);

    // Fetch all customer with their posts
    const allUVendors = await prisma.vendor.findMany({});
    console.log("All vendors:", JSON.stringify(allUVendors, null, 2));
}

main()
    .catch((e) => {
        console.error("❌ Seed error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
