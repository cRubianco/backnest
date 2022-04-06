import { BaseDTO } from "./baseDTO";

export class UserDTO extends BaseDTO {

  readonly name: string;
  readonly mail: string;
  readonly password: string;
  
}