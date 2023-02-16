import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {

    constructor(private readonly prisma: PrismaService) {}

    create(createCategoryDto: CreateCategoryDto) {
        return this.prisma.category.create({
            data: createCategoryDto
        })
    }

    async findAll(query: { keyWord: string, status: string, pageIndex: number, pageSize: number }) {
        const list = await this.prisma.category.findMany({
            where: {
                name: { contains: query.keyWord },
				status: query.status === '' ? undefined : query.status === 'true'
            },
            skip: (query.pageIndex - 1) * query.pageSize,
            take: +query.pageSize
        })
        const total = await this.prisma.category.count({ where: { 
			name: { contains: query.keyWord },
			status: query.status === '' ? undefined : query.status === 'true'
		} })
        return { list, total }
    }

    findOne(id: number) {
        return this.prisma.category.findUnique({
            where: { id }
        })
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return this.prisma.category.update({
            where: { id },
            data: updateCategoryDto
        })
    }

    remove(id: number) {
        return this.prisma.category.delete({
            where: { id }
        })
    }
}
