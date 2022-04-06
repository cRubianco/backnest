import { BaseDTO } from "./baseDTO";

export class PersonDTO extends BaseDTO {

  readonly name: string;
  readonly surname: string;
  readonly documentType: string;
  readonly docNumeb: number;
  readonly cuil: number;
  readonly birthday: Date;
  readonly gender: string;
  readonly nationality: string;
  readonly maritalStatus: string;
  
}