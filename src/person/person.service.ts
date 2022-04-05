import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'src/model/entity/person.entity';
import { BaseService } from 'src/modules/base/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService extends BaseService<PersonEntity> {
  
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personsRepository: Repository<PersonEntity>
  ) {
        console.log('service persons');
    super(personsRepository);
  }
  
}
