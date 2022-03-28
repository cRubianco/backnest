import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('users')
export class UserEntity extends BaseEntity {

  @Column({ length: 30 })
  @ApiProperty()
  readonly name: string;

  @Column({ length: 50 })
  @ApiProperty()
  readonly mail: string;
  
  @Column({ length: 20 })
  @ApiProperty()
  readonly password: string;
  
  // constructor(o: Object) {
  //   super();
  //   Object.assign(this, o);
  // }

}