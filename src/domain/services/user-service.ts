import { IUserDTO } from "../dtos/user-dto";

export interface IUserService {
  getAll: () => IUserDTO[]
}