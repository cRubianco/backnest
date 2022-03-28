import { Controller } from '@nestjs/common';
import { UserEntity } from 'src/model/entity/user.entity';
import { BaseController } from '../base/base.controller';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController extends BaseController<UserEntity> {

  constructor(
    private readonly usersService: UsersService
  ) {
    super(usersService)
  }
}
