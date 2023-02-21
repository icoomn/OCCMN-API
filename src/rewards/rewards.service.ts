import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';

@Injectable()
export class RewardsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createRewardDto: CreateRewardDto) {
		return this.prisma.reward.create({
			data: createRewardDto
		})
	}

	async findAll(query: { pageIndex: number, pageSize: number }) {
		const list = await this.prisma.reward.findMany({
			skip: (query.pageIndex - 1) * query.pageSize,
            take: +query.pageSize
		})
		const total = await this.prisma.reward.count()
		return { list, total }
	}

	findOne(id: string) {
		return this.prisma.reward.findUnique({
			where: { id }
		})
	}

	update(id: string, updateRewardDto: UpdateRewardDto) {
		return this.prisma.reward.update({
			where: { id },
			data: updateRewardDto
		})
	}

	remove(id: string) {
		return this.prisma.reward.delete({
			where: { id }
		})
	}
}
