import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('person')
export class PersonEntity extends BaseEntity {

  @Column({ length: 30 })
  @ApiProperty()
  readonly name: string;

  @Column({ length: 30 })
  @ApiProperty()
  readonly surname: string;
  
  @Column({ length: 20 })
  @ApiProperty()
  readonly documentType: string;
  
  @Column()
  @ApiProperty()
  readonly docNumeb: number;
  
  @Column()
  @ApiProperty()
  readonly cuil: number;
  
  @Column({ type: 'date' })
  @ApiProperty()
  readonly birthday: Date;

  @Column({ name: "gender", type: 'enum', enum: ['F', 'M', ] })
  @ApiProperty()
  readonly gender: string;

  @Column({ length: 20 })
  @ApiProperty()
  readonly nationality: string;

  @Column({ name: "maritalStatus", type: 'enum', enum: ['C', 'D' ,'S', 'V' ] })
  @ApiProperty()
  readonly maritalStatus: string;
  
  // @Column({ length: 20 })
  // @ApiProperty()
  // readonly password: string;
  
  // constructor(o: Object) {
  //   super();
  //   Object.assign(this, o);
  // }

}