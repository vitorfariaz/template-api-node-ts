import Pet from '../schemas/Pet';
import PetInterface from '../schemas/PetInterface';
import { ErrorMessages, MyError } from './Error';

export default class PetService {

    public async findAll(): Promise<PetInterface[]> {

        try {
            console.log('Finding your pets in database...')
            return await Pet.find()

        } catch (err) {
            console.error(err)
            throw err;
        }
    }

    public async findById(id: string): Promise<PetInterface> {

        console.log(`finding pet by id ${id} in database...`)
        const pet = await Pet.findById(id);
        if (!pet) {
            throw {message: ErrorMessages.PetNotFound}
        }

        console.log(`founded a pet with id ${id} pet: ${pet}`);
        return pet;
    }

    public async create(pet: PetInterface): Promise<PetInterface> {

        console.log('Creating a pet in database...')
        const createdPet = await Pet.create(pet);
        console.log(`Pet created in database: ${pet}`)

        return createdPet;
    }

    // public async update(req: Request, res: Response): Promise<Response> {

    //     try {
    //         console.log('Updating a pet in database...')

    //         const { name } = req.body;
    //         const { id } = req.params;

    //         let foundedPet: PetInterface = await Pet.findById(id);
    //         foundedPet.name = name;

    //         await foundedPet.updateOne({ name })

    //         console.log(`Pet updated in database: ${foundedPet}`)

    //         return res.status(200).json();
    //     } catch (err) {
    //         console.error(err)
    //         return res.status(500).json({ error: "Internal server error." })
    //     }
    // }

    // public async delete(req: Request, res: Response): Promise<Response> {
    //     console.log('Creating a pet in database...')

    //     const pet = await Pet.create(req.body)

    //     console.log(`Pet created in database: ${pet}`)

    //     return res.json(pet);
    // }

}

