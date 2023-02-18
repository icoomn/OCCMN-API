import { Module } from '@nestjs/common'
import { AccountsModule } from './accounts/accounts.module'
import { CategoriesModule } from './categories/categories.module'
import { ArticlesModule } from './articles/articles.module'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot(),
        PrismaModule,
        AuthModule,
        AccountsModule,
        CategoriesModule,
        ArticlesModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }