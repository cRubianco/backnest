import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BaseEntity {
  
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
	public createdAt?: Date;

	@UpdateDateColumn({nullable: true})
	public updatedAt?: Date;
}