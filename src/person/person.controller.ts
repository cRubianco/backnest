import { Controller } from '@nestjs/common';
import { PersonEntity } from 'src/model/entity/person.entity';
import { BaseController } from 'src/modules/base/base.controller';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController extends BaseController<PersonEntity> {
  
  constructor ( private readonly personService: PersonService ) {
    super(personService)
  }

}
