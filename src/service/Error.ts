export type MyError = {
    message: string;
    resolution?: string | undefined;
};

export const enum ErrorMessages {
    PetNotFound = "Pet was not found."
};

export const isError = (toBeDetermined: any | MyError): toBeDetermined is MyError => {
    return !!(toBeDetermined as MyError)?.message;
};