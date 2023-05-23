import 'reflect-metadata'
import './infrastructure/containers/orm-container'
import './infrastructure/containers/user-container'
import { app } from './infrastructure/server'

app.listen(3333, () => console.log('Server running port 3333'))