import bcrypt from "bcryptjs";

export const crypt = (word: string): string => {
    return bcrypt.hashSync(word, 8);   
}