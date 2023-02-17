import { Module } from '@nestjs/common'
import { AccountsModule } from './accounts/accounts.module'
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AccountsModule, CategoriesModule, ArticlesModule, PrismaModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule { }