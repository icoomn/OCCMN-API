import { ApiProperty } from '@nestjs/swagger'
export class CreateCategoryDto {
    @ApiProperty({ example: '图书类' })
    name: string

    @ApiProperty({ example: 5 })
    sort?: number

	@ApiProperty()
    createTime?: string

	@ApiProperty()
    status?: boolean
}
