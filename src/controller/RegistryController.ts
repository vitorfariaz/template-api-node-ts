import { Request, Response } from 'express';
import User from '../schemas/User';
import UserInterface from '../schemas/UserInterface'
import {crypt} from '../service/bcript';


class RegistryController {
    public async findAll(req: Request, res: Response): Promise<Response> {
        console.log('finding all users in database...')

        const users = await User.find()

        console.log(`founded users: ${users}`)

        return res.json(users);
    }

    public async findByUsernameAndPassword(req: Request, res: Response): Promise<Response> {
        console.log('finding all users in database...')

        const users = await User.find()

        console.log(`founded users: ${users}`)

        return res.json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        console.log('Creating an user in database...')

        try {
            let user:UserInterface = req.body;
            const username  = user.username;
            user.password = crypt(user.password)
            
            const existingUser = await User.findOne({ username })

            if (existingUser) {
                return res
                    .status(422)
                    .json({ message: `User ${username} already exists.` })
            }

            const savedUser = await User.create(user)
            console.log(`User created in database: ${savedUser}`)
            return res.status(201).json(savedUser);

        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error." })
        }


    }
}

export default new RegistryController()