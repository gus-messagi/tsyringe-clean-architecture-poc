import { Router } from "express"
import { UserController } from "../../presentation/controllers/user-controller"
import { container } from "tsyringe"

const router = Router()
const controller = container.resolve<UserController>("UserController")

router.get('/', controller.getAll)

export { router }