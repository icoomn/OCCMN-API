import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
    constructor(private readonly prisma: PrismaService) {}

    create(createArticleDto: CreateArticleDto) {
        return this.prisma.article.create({
            data: createArticleDto
        })
    }

    async findAll(query: { keyWord: string, pageIndex: number, pageSize: number }) {
        const list = await this.prisma.article.findMany({
            where: {
                title: { contains: query.keyWord },
            },
            skip: (query.pageIndex - 1) * query.pageSize,
            take: +query.pageSize
        })
        const total = await this.prisma.article.count({
            where: {
                title: { contains: query.keyWord }
            }
        })
        return { list, total }
    }

    findOne(id: string) {
        return this.prisma.article.findUnique({
            where: { id }
        })
    }

    update(id: string, updateArticleDto: UpdateArticleDto) {
        return this.prisma.article.update({
            where: { id },
            data: updateArticleDto
        })
    }

    remove(id: string) {
        return this.prisma.article.delete({
            where: { id }
        })
    }
}
