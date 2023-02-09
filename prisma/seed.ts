import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main () {
    await prisma.account.create({
        data: {
            name: '超级管理员',
            password: '123456'
        }
    })
}

main().catch(e => {
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})