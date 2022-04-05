import { PersonEntity } from "src/model/entity/person.entity";
import { Repository,  } from "typeorm";


export class PersonRepository extends Repository<PersonEntity> {

  async getPersons(): Promise<PersonEntity[]> {
        console.log('repository persons');
    const persons = this.createQueryBuilder('person').getMany();
    return persons;
  }
}