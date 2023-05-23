import { Request, Response } from "express";
import { IUserService } from "../../domain/services/user-service";

export class UserController {
  constructor(
    private service: IUserService
  ) {}
  
  getAll = (req: Request, res: Response) => {
    const response = this.service.getAll()

    return res.send(response)
  }
}