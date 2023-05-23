import express from "express"
import { router } from "./http/routes"

const app = express()

app.use('/user', router)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

export { app }