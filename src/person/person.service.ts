import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'src/model/entity/person.entity';
import { BaseService } from 'src/modules/base/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService extends BaseService<PersonEntity> {
  
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>
  ) {
    super(personRepository);
  }
  
  async getAll(): Promise<PersonEntity[]> {
    const listPersons = await this.personRepository.find();
    if (!listPersons) {
      throw new NotFoundException({message: "La lista esta vacia o no existe"});      
    }
    return listPersons;
  }
  
}
