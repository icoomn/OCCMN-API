import { Injectable } from '@nestjs/common'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class AccountsService {
    constructor(private readonly prisma: PrismaService) { }

    create(createAccountDto: CreateAccountDto) {
        return this.prisma.account.create({
            data: createAccountDto
        })
    }

    async findAll(query: { keyWord: string, status: string, pageIndex: number, pageSize: number }) {
        const list = await this.prisma.account.findMany({
            where: {
				name: { contains: query.keyWord },
				status: query.status === '' ? undefined : query.status === 'true'
			},
            skip: (query.pageIndex - 1) * query.pageSize,
            take: +query.pageSize
        })
        const total = await this.prisma.account.count({
            where: {
				name: { contains: query.keyWord },
				status: query.status === '' ? undefined : query.status === 'true'
			}
        })
        return { list, total }
    }

    findOne(id: string) {
        return this.prisma.account.findUnique({
            where: { id }
        })
    }

    update(id: string, updateAccountDto: UpdateAccountDto) {
        return this.prisma.account.update({
            where: { id },
            data: updateAccountDto
        })
    }

    remove(id: string) {
        return this.prisma.account.delete({
            where: { id }
        })
    }
}
