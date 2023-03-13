import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
	constructor(private readonly prisma: PrismaService) { }

	create(createRoleDto: CreateRoleDto) {
		return this.prisma.role.create({
			data: {
				name: createRoleDto.name,
				permissions: { connect: createRoleDto.permissionList.map(x => ({ id: x.id })) }
			}
		})
	}

	async findAll() {
		const list = await this.prisma.role.findMany({
			include: {
				permissions: true
			}
		})
		const total = await this.prisma.role.count()
		return { list, total }
	}

	findOne(id: string) {
		return this.prisma.role.findUnique({
			where: { id },
			include: { permissions: true }
		});
	}

	update(id: string, updateRoleDto: UpdateRoleDto) {
		return this.prisma.role.update({
			where: { id },
			data: {
				name: updateRoleDto.name,
				permissions: {
					connect: updateRoleDto.permissionList.map(x => ({ id: x.id }))
				}
			}
		})
	}

	remove(id: string) {
		return this.prisma.role.delete({
			where: { id },
			
		})
	}
}
