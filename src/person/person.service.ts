import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
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
  
  async findPerson(id: number) {
    const person = await this.personRepository.findOne({where: {id: id}});
    if (!person) {
      throw new Error('Method not implemented.');
    } else {
      return person;
    }
  }

  async createPerson(newPerson: PersonEntity) {
    try {
  		return new Promise<number> ((resolve, reject) => {
  			this.personRepository.save(newPerson)
  			.then(created=> resolve(created.id))
  			.catch(err => reject(err))
  			})
		}
		catch(error) {
			throw new BadGatewayException(error);
		}
  }

  async updatePerson(id: number, personDto: PersonDTO): Promise<PersonEntity>{
    const toUpdated = await this.personRepository.findOneById(id);
    const updated = Object.assign(toUpdated, personDto);
    return this.personRepository.save(updated);
  }

}

