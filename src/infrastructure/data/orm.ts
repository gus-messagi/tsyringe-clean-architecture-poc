import { IUserDTO } from "../../domain/dtos/user-dto";

export class Orm {
  private users: IUserDTO[]
  
  constructor() {
    this.users = [{
      name: 'Gus',
      email: 'gustavo.ramos.messagi@gmail.com'
    }]
  }

  getAll = (): IUserDTO[] => {
    return this.users
  }
}