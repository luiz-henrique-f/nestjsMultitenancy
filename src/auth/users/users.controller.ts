import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserPresenter } from './user.presenter';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createCommonUser(data);
    return new UserPresenter(user);
  }
}
