import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/entity/user.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';

@Injectable()
export class UsersService extends BaseService<UserEntity> {

  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {
    super(usersRepository);
  }

}
