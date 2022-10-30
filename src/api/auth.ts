import { httpRequest } from "./http-api";

type auth = {
    login: string,
    password: string,
}

type signup = {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string,
}

type signupResult = {
    id: string | number,
}

type authUser = {
    id: number | string,
    first_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string,
}

class Authorization extends httpRequest {
    public authorization = async (data: auth) =>
        this.Request<auth>({
            method: 'POST',
            url: '/auth/signin',
            data: data,
        });
    public signup = async (data: signup) =>
        this.Request<signup | signupResult>({
            method: 'POST',
            url: '/auth/signup',
            data: data,
        });
    public authUser = async () =>
        this.Request<authUser>({
            method: 'GET',
            url: '/auth/signup',
        });
    public logout = async () =>
        this.Request({
            method: 'POST',
            url: '/auth/logout',
        });
}
export default new Authorization()