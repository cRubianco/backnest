import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('users')
export class UserEntity extends BaseEntity {

  @Column({ length: 30 })
  @ApiProperty()
  readonly name: string;
  
  @Column({ length: 40 })
  @ApiProperty()
  readonly email: string;

  @Column({ length: 20 })
  @ApiProperty()
  readonly password: number;
  
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

}