import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { PersonEntity } from 'src/model/entity/person.entity';
import { BaseController } from 'src/modules/base/base.controller';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController extends BaseController<PersonEntity> {
  
  constructor ( private readonly personService: PersonService ) {
    super(personService)
  }

  @Get()
  find(@Res() response, @Param('id') id: number) {
    const personId = this.personService.getById(id);
    if (!personId) {
      return response.status(HttpStatus.NOT_FOUND).send('no existe en la bd');
    } else {
      return response.status(HttpStatus.OK);
    }
  }

}
