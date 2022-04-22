import { Request, Response } from 'express';
import Pet from '../schemas/Pet';
import PetInterface from '../schemas/PetInterface';
import {isValidId} from '../service/isValidObjectId';

class PetsController {

    public async findAll(req: Request, res: Response): Promise<Response> {

        try {
            console.log('Finding your pets in database...')
            const pets = await Pet.find()
            console.log(`Founded pets: ${pets}`)
            return res.json(pets);

        } catch (err) {

        }
    }

    public async findById(req: Request, res: Response): Promise<Response> {

        try {
            console.log('finding pet by id in database...')
            const { id } = req.params;

            if (isValidId(id)) {
                const pet: PetInterface = await Pet.findById(id);
                if (!pet) {
                    return res.status(404);
                }
                console.log(`founded a pet with id ${id} pet: ${pet}`);
                return res.json(pet);
            } else
                return res.status(404);

        } catch (err) {

            console.error(err)
            return res.status(500).json({ error: "Internal server error." })
        }

    }

    public async create(req: Request, res: Response): Promise<Response> {

        try {

            console.log('Creating a pet in database...')
            const pet = await Pet.create(req.body)
            console.log(`Pet created in database: ${pet}`)

            return res.status(201).json(pet);

        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error." })
        }

    }

    public async update(req: Request, res: Response): Promise<Response> {
        console.log('Creating a pet in database...')

        const pet = await Pet.create(req.body)

        console.log(`Pet created in database: ${pet}`)

        return res.json(pet);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        console.log('Creating a pet in database...')

        const pet = await Pet.create(req.body)

        console.log(`Pet created in database: ${pet}`)

        return res.json(pet);
    }

}

export default new PetsController()