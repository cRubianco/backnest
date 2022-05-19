import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BaseEntity } from '../../model/entity/base.entity';
import { IBaseService } from './iBase.service';

export class BaseController<T extends BaseEntity> {

  constructor(private readonly iBaseService: IBaseService<T>){}

  @Get()
  @ApiResponse({status: 200, description: 'Ok'})
  async findAll(): Promise<T[]> {
    return this.iBaseService.getAll();
  }
  
  @Get(':id')
  @ApiResponse({status: 200, description: 'Entity retrieved successfully'})
  @ApiResponse({status: 404, description: 'Entity does not exist'})
  async findById(@Param('id') id: number): Promise<T> {
    return this.iBaseService.getById(id);
  }

  @Post()
  @ApiResponse({status: 201, description: 'The record has been created.'})
  @ApiResponse({status: 403, description: 'Forbiden.'})
  @ApiResponse({status: 400, description: 'Bad request.'})
  async create(@Body() entity: T): Promise<number> {
    return this.iBaseService.create(entity);
  }


  @Put(':id')
  @ApiResponse({ status: 400, description: 'Bad Request.'})
	@ApiResponse({ status: 200, description: 'Entity updated successfully.'})
	async update(@Param('id') id: number, @Body() entity: T): Promise<T> {
    const generic = await this.iBaseService.getById(id);
    console.log("Hola Generic",generic);
    console.log("Hola entity",entity);
    
    if(generic === null || undefined) {
      console.log('Generic false -> ', generic);
      return null;
    } else {
      console.log('Generic true -> ', generic);
      return this.iBaseService.update(entity);
    }
	}

  @Delete('id')
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	async delete(@Param('id') id: number) {
	  this.iBaseService.delete(id);
	}

}