import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
	constructor(private readonly prisma: PrismaService) { }

	create(createRoleDto: CreateRoleDto) {
		return this.prisma.role.create({
			data: createRoleDto
		})
	}

	findAll() {
		return this.prisma.role.findMany()
	}

	findOne(id: string) {
		return this.prisma.role.findUnique({
			where: { id }
		});
	}

	update(id: string, updateRoleDto: UpdateRoleDto) {
		return this.prisma.role.update({
			where: { id },
			data: updateRoleDto
		})
	}

	remove(id: string) {
		return this.prisma.role.delete({
			where: { id }
		})
	}
}
