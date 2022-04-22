import {Schema, model} from 'mongoose'
import UserInterface from './UserInterface'

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName:  {
        type: String,
        required: true
    },
    username:  {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
},{
    timestamps: true 
})

export default model<UserInterface>('User', UserSchema)