import { ApiProperty } from '@nestjs/swagger'
import { Account, Permission } from '@prisma/client'

export class CreateRoleDto {
	@ApiProperty()
	name: string
}
