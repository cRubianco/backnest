import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('person')
export class PersonEntity extends BaseEntity {

  @Column({ name: "name", length: 30 })
  @ApiProperty()
  readonly name: string;

  @Column({ name: "surname", length: 30 })
  @ApiProperty()
  readonly surname: string;
  
  @Column({ name: "documentTYpe", length: 20 })
  @ApiProperty()
  readonly documentType: string;
  
  @Column({ name: "document", type: "int" })
  @ApiProperty()
  readonly docNumeb: number;
  
  @Column({ name: "cuil" })
  @ApiProperty()
  readonly cuil: string;
  
  @Column({ name: "birthday" })
  @ApiProperty()
  readonly birthday: Date;

  @Column({ name: "gender", type: 'enum', enum: ['F', 'M', ] })
  @ApiProperty()
  readonly gender: string;

  @Column({ name: "nationality", length: 20 })
  @ApiProperty()
  readonly nationality: string;

  @Column({ name: "maritalSatus", type: 'enum', enum: ['C', 'D' ,'S', 'V' ] })
  @ApiProperty()
  readonly maritalStatus: string;
  
  // @Column({ length: 20 })
  // @ApiProperty()
  // readonly password: string;
  
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

}