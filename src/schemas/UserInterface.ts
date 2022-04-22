import {Document} from 'mongoose'

export default interface UserInterface extends Document{
    email: string,
    fullName: string,
    username: string,
    password: string
}