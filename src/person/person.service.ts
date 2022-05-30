import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonDTO } from 'src/model/dto/personDTO';
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

  // async getById(id: number): Promise<PersonEntity> {
  //   const person = await this.personRepository.findOne(id);
  //   if (!person) {
  //     console.log(`No se encontro el id ${id}`);
      
  //   } else {
  //     return person;
  //   }
  // }

  // async create(@Body personDto: PersonDTO){
  //   return await this.personRepository.save(personDto);
  // }

  async update(entity: any): Promise<PersonEntity> {
    const person = this.getById(entity.id);
    if (!person) {
      console.log(`No existe una persona con el id ${entity.id}`);
      
    } else {
      return await this.personRepository.save(entity);
    }
  }
  
}
