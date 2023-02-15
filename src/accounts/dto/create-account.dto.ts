import { ApiProperty } from '@nestjs/swagger'
export class CreateAccountDto {
    @ApiProperty({ example: '管理员' })
    name: string

    @ApiProperty({ example: '123456' })
    password: string

    @ApiProperty()
    createTime?: Date

    @ApiProperty()
    status?: boolean
}
