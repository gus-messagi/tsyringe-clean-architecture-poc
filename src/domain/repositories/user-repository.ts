import { IUserDTO } from "../dtos/user-dto";

export interface IUserRepository {
  getAll(): IUserDTO[]
}