export interface IBaseService<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;
  create(entity: T): Promise<number>;
  update(id: number, entity: T): Promise<T>;
  delete(id: number);
}

