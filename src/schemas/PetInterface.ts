import {Document} from 'mongoose'

export default interface PetInterface extends Document{
    name: String,
    ownerUsername: String,
    age: Number,
    type: String,
    breed: String,
    sex: String 
}