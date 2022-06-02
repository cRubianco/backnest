import { BaseDTO } from "./baseDTO";

export class PersonDTO extends BaseDTO {
  
  readonly name: string;
  readonly surname: string;
  readonly documentNumber: string;
  readonly documentType: string;
  readonly cuil: string;
  readonly birthday: Date;
  readonly gender: string;
  readonly nationality: string;
  readonly maritalStatus: string;
  
}