import { ApiProperty } from '@nestjs/swagger'
import { Permission } from '@prisma/client'

export class CreateRoleDto {
	@ApiProperty()
	name: string
	permission: Permission[]
}
