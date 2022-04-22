import {Router} from 'express'
import RegistryController from './controller/RegistryController'
import PetsController from './controller/PetsController'

const routes = Router()

routes.get('/registry', RegistryController.findAll)
routes.post('/registry', RegistryController.create)

routes.post('/pets', PetsController.create)
routes.get('/pets', PetsController.findAll)
routes.get('/pets/:id', PetsController.findById)


export default routes