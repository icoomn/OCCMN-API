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

    findAll(name: string, pageIndex: number, pageSize: number) {
        return this.prisma.account.findMany({
            skip: (pageIndex - 1) * pageSize,
            take: pageSize,
            where: {
                name: name
            }
        })
    }

    findOne(id: number) {
        return this.prisma.account.findUnique({
            where: { id }
        })
    }

    update(id: number, updateAccountDto: UpdateAccountDto) {
        return '' // this.prisma.account.update()
    }

    remove(id: number) {
        return this.prisma.account.delete({
            where: { id }
        })
    }
}
