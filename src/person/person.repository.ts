import { Injectable } from "@nestjs/common";
import { PersonEntity } from "src/model/entity/person.entity";
import { Repository } from "typeorm";

/* @EntityRepository(PersonEntity) */
@Injectable()
export class PersonRepository extends Repository<PersonEntity> {

}