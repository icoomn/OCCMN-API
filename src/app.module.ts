import { Module } from '@nestjs/common'
import { AccountsModule } from './accounts/accounts.module'
import { CategoriesModule } from './categories/categories.module'
import { ArticlesModule } from './articles/articles.module'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RewardsModule } from './rewards/rewards.module';
import { CommentsModule } from './comments/comments.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        PrismaModule,
        AuthModule,
        AccountsModule,
        CategoriesModule,
        ArticlesModule,
        RolesModule,
        PermissionsModule,
        RewardsModule,
        CommentsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }