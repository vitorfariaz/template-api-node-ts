import {Router} from 'express'
import RegistryController from './controller/RegistryController'
import PetsController from './controller/PetsController'

const routes = Router()
const PETS_PATH = '/pets'
const PETS_ID_PATH = PETS_PATH + '/:id'

routes.get('/registry', RegistryController.findAll)
routes.post('/registry', RegistryController.create)

routes.post(PETS_PATH, PetsController.create)
routes.get(PETS_PATH, PetsController.findAll)
routes.get(PETS_ID_PATH, PetsController.findById)
routes.put(PETS_ID_PATH, PetsController.update)


export default routes