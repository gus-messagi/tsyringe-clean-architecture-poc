import 'reflect-metadata'

import { container, instanceCachingFactory } from 'tsyringe'
import { Orm } from '../data/orm'
import { UserRepositoryImpl } from '../repositories/user-repository-impl'
import { UserServiceImpl } from '../../domain/application/user-service-impl'
import { UserController } from '../../presentation/controllers/user-controller'

container.register("UserController", {
  useFactory: instanceCachingFactory<UserController>(c => {
    const orm = c.resolve<Orm>("Orm")
    const repository = new UserRepositoryImpl(orm)
    const service = new UserServiceImpl(repository)
  
    return new UserController(service)
  })
})