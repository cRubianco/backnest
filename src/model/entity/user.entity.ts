import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('users')
export class UserEntity extends BaseEntity {

  @Column({ length: 50 })
  @ApiModelPropertyOptional()
  readonly name: string;

  @Column({ length: 50 })
  @ApiModelProperty()
  readonly age: number;
  
  @Column({ length: 50 })
  @ApiModelProperty()
  readonly favouriteColor: string;
  
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

}