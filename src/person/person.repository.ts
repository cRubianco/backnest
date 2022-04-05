import { PersonEntity } from "../model/entity/person.entity";
import { Repository,  } from "typeorm";


export class PersonRepository extends Repository<PersonEntity> {

  async getPersons(): Promise<PersonEntity[]> {
    const persons = this.createQueryBuilder('person').getMany();
    return persons;
  }
}