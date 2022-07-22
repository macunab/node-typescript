
export interface User {
    email: string,
    password: string,
    name: string
}

export interface JWTParams {
    id:string;
    email: string;
    name: string;
}