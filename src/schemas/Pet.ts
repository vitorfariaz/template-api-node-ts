import {Schema, model} from 'mongoose'
import PetInterface from './PetInterface'

const PetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ownerUsername: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    }
},{
    timestamps: true 
})

export default model<PetInterface>('Pet', PetSchema)