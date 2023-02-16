import { ApiProperty } from '@nestjs/swagger'

export class CreateArticleDto {
	@ApiProperty()
    title: string

	@ApiProperty()
    coverPicture: string

	@ApiProperty()
    intro: string

	@ApiProperty()
    content: string

	@ApiProperty()
    viewCount?: number

	@ApiProperty()
    status?: boolean

	@ApiProperty()
    createTime?: string

	@ApiProperty()
    updateTime?: string
}