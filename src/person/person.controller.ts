import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PersonEntity } from 'src/model/entity/person.entity';
import { BaseController } from 'src/modules/base/base.controller';
import { PersonService } from './person.service';
import { PersonDTO } from '../model/dto/personDTO';

@Controller('persons')
export class PersonController extends BaseController<PersonEntity> {
  
  constructor ( private readonly personService: PersonService ) {
    super(personService)
  }

  @Get(':id')
  findPerson(@Param('id') id: number) {
    return this.personService.findPerson(id);
  }

  @Post()
  createPerson(@Body() person: PersonEntity) {
    return this.personService.createPerson(person);
  }

  @Put(':id')
  updatePerson(@Param('id') id: number, @Body() personDto: PersonDTO) {
    return this.personService.updatePerson(id, personDto); 
  }

}
