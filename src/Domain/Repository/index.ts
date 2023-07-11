import { loginRequest, todoResponse } from "../Model";


export type loginResponse = {
    status: String,
    sessionToken: String,
    errorMessage: String
};



export interface Repository {
    loginUser(obj: loginRequest): Promise<loginResponse>,
    getTodos(): Promise<todoResponse[]>,
    getTodo(): Promise<todoResponse>
}