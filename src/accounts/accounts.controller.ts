import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ApiTags } from '@nestjs/swagger'

@Controller('accounts')
@ApiTags('账户接口')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Post()
    create(@Body() createAccountDto: CreateAccountDto) {
        return this.accountsService.create(createAccountDto);
    }

    @Get()
    findAll(@Query() query: { keyWord: string, status: string, pageIndex: number, pageSize: number }) {
        return this.accountsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.accountsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
        return this.accountsService.update(id, updateAccountDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.accountsService.remove(id);
    }
}
