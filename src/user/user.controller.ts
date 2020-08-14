import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async find(@Param('id', new ParseIntPipe()) id: number): Promise<UserModel> {
    return await this.userService.user({id});
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return await this.userService.users({});
  }

  @Post()
  async createUser(@Body() userData: {name?: string; email: string}): Promise<UserModel> {
    return await this.userService.createUser(userData);
  }
}