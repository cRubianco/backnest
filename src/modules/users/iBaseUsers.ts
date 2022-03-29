import { UserEntity } from "src/model/entity/user.entity";
import { IBaseService } from "../base/iBase.service";

export interface IBaseUsers extends IBaseService<UserEntity> {

}