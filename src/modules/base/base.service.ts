import { Repository } from 'typeorm';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from 'src/model/entity/base.entity';
import { BadGatewayException } from '@nestjs/common';

export class BaseService<T extends BaseEntity> implements IBaseService<T> {
	
  constructor(private readonly genericRepository: Repository<T>) {}
  
  getAll(): Promise<T[]> {
	  try {
  		return <Promise<T[]>>this.genericRepository.find();
  	} catch (error) {
  		throw new BadGatewayException(error);
  	}
  }

  getById(id: number): Promise<T> {
    try {
    } catch (error) {
      throw new BadGatewayException(error);
    }
      return <Promise<T>>this.genericRepository.findOneOrFail(id);  
  }
  
  create(entity: any): Promise<number>{
	  try {
  		return new Promise<number> ((resolve, reject) => {
  			this.genericRepository.save(entity)
  			.then(created=> resolve(created.id))
  			.catch(err => reject(err))
  			})
		}
		catch(error) {
			throw new BadGatewayException(error);
		}
  }

  update(entity: any): Promise<any>{
    try {
      return new Promise<any> ((resolve, reject) => {
        this.genericRepository.findOneOrFail(entity.id)
        .then(responseGet => {
          try {
            if (responseGet == null) reject('Not existing')
            const retrievedEntity: any = responseGet as any
            this.genericRepository.save(retrievedEntity)
            .then(response => resolve(response))
            .catch(err => reject(err))
          }
          catch(e) {
              reject(e)
          }
        })
        .catch(err => reject(err))
        }) 
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  delete(id: number) {
  	try {
    	this.genericRepository.delete(id)
    } catch (error) {
  		throw new BadGatewayException(error);
  	}
  }

}