import { IUserDTO } from "../../domain/dtos/user-dto";
import { IUserRepository } from "../../domain/repositories/user-repository";
import { Orm } from "../data/orm";

export class UserRepositoryImpl implements IUserRepository {
  constructor(
    private readonly db: Orm
  ) {}

  getAll = (): IUserDTO[] =>{
    return this.db.getAll()
  }
}