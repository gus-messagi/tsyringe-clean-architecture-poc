import { IUserDTO } from "../dtos/user-dto";
import { IUserRepository } from "../repositories/user-repository";
import { IUserService } from "../services/user-service";

export class UserServiceImpl implements IUserService {
  constructor(
    private readonly repository: IUserRepository
  ) {}

  getAll = (): IUserDTO[] => {
    return this.repository.getAll()
  };
}