import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export class httpRequest {

    private static getJWT() {
        return '' /* `Bearer ${sessionStorage.getItem('JWT')}` ?? null; */
    }
    private static clearSession() {
        sessionStorage.removeItem('JWT');
    }
    private static getConfig(config: AxiosRequestConfig): AxiosRequestConfig {
        const authorization = this.getJWT();
        const obj: AxiosRequestConfig = {
            ...config,
            url: `/api${config.url}`,
        };
        if (authorization && config.headers) {
            obj.headers = {
                ...config.headers,
                Authorization: authorization,
            };
        } else if (authorization) {
            obj.headers = {
                Authorization: authorization,
            };
        }
        return obj;
    }
    protected Request<Result>(
        config: AxiosRequestConfig<Result>
    ): Promise<Result> {
        const modifyConfig = httpRequest.getConfig(
            config
        ) as AxiosRequestConfig<Result>;
        return new Promise((resolve, reject) => {
            axios(modifyConfig)
                .then((response) => {
                    const value =
                        !response.data && response.data !== 0 ? true : response.data;
                    resolve(value);
                })
                .catch((error: AxiosError) => {
                    if (error.response?.data) reject(error.response?.data)
                    reject(error);
                });
        });
    }
}
