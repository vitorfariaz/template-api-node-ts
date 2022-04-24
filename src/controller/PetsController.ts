import { Request, Response } from 'express';
import Pet from '../schemas/Pet';
import PetService from '../service/PetService';
import PetInterface from '../schemas/PetInterface';
import { isValidId } from '../service/isValidObjectId';
import { ErrorMessages, isError } from '../service/Error';
import { serverError } from './ControllerService';

const petService: PetService = new PetService();

class PetsController {

    public async findAll(req: Request, res: Response): Promise<Response> {

        try {
            const pets = await petService.findAll();

            return res.status(200).json(pets);

        } catch (err) {
            return serverError(err, res);
        }
    }

    public async findById(req: Request, res: Response): Promise<Response> {

        try {
            const { id } = req.params;

            const petOrError = await petService.findById(id);

            if (isError(petOrError)) {
                if (petOrError.message === ErrorMessages.PetNotFound) {
                    return res.status(404).json();
                }
            }

            return res.json(petOrError);

        } catch (err) {
            return serverError(err, res);
        }

    }

    public async create(req: Request, res: Response): Promise<Response> {

        try {
            const pet = await petService.create(req.body)

            return res.status(201).json(pet);

        } catch (err) {
            return serverError(err, res);
        }

    }

    public async update(req: Request, res: Response): Promise<Response> {

        try {
            console.log('Updating a pet in database...')

            const { name } = req.body;
            const { id } = req.params;

            let foundedPet: PetInterface = await Pet.findById(id);
            foundedPet.name = name;

            await foundedPet.updateOne({ name })

            console.log(`Pet updated in database: ${foundedPet}`)

            return res.status(200).json();
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        console.log('Creating a pet in database...')

        const pet = await Pet.create(req.body)

        console.log(`Pet created in database: ${pet}`)

        return res.json(pet);
    }

}

export default new PetsController()