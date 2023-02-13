export class CreateArticleDto {
    title: string
    coverPicture: string
    intro: string
    content: string
    viewCount?: number
    status?: boolean
    createTime?: string
    updateTime?: string
}
