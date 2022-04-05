import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BaseDTO } from "../dto/baseDTO";

export class PersonDTO extends BaseDTO {

  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsString()
  documentType: string;
  
  @IsNumber()
  documentNumber: number;
  
  @IsString()
  cuil: string;
  
  @IsString()
  birthday: string;
  
  @IsString()
  gender: string;
  
  @IsString()
  nationality: string;
  
  @IsString()
  maritalStatus: string;

}