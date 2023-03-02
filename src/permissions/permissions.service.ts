import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createPermissionDto: CreatePermissionDto) {
		return this.prisma.permission.create({
			data: createPermissionDto
		})
	}

	async findAll(query: { keyWord: string, pageIndex: number, pageSize: number }) {
		const list = await this.prisma.permission.findMany({
			where: {
                name: { contains: query.keyWord }
            },
            skip: (query.pageIndex - 1) * query.pageSize,
            take: +query.pageSize
		})
		const total = await this.prisma.permission.count({
			where: {
				name: { contains: query.keyWord }
			}
		})
		return { list, total }
	}

	findOne(id: string) {
		return this.prisma.permission.findUnique({
			where: {
				id
			}
		})
	}

	update(id: string, updatePermissionDto: UpdatePermissionDto) {
		return this.prisma.permission.update({
			where: { id },
			data: updatePermissionDto
		})
	}

	remove(id: string) {
		return this.prisma.permission.delete({
			where: { id }
		})
	}
}
