import { ApiProperty } from '@nestjs/swagger'
export class CreatePermissionDto {
	name: string
	type: number
    path?: string
    parentId: string
}
