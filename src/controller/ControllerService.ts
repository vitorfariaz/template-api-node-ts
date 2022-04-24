import { Response } from 'express';

export const serverError = (err, res: Response): Response => {
    console.error(err);
   
    return res
        .status(500)
        .json({ error: "Internal server error." });
}