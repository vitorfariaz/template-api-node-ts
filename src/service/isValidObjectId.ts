import {isValidObjectId} from 'mongoose';

export const isValidId = (id: string): boolean => {
    return isValidObjectId(id);
}