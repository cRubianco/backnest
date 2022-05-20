import { PersonEntity } from "src/model/entity/person.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PersonEntity)
export class PersonRepository extends Repository<PersonEntity> {

}