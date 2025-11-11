import { api } from '../http/AxiosConnect';

export const getHome = async () => {
    const response = await api.get('/');
    return response.data;
}

export const loginUser = async (username: string, password: string) => {
    //quero enviar a requisição de login com body contendo username e password 
    const response = await api.post('/auth/login',
        { name : username, password }
    );
    console.log("loginUser response:", response.data.jwt);
    return response.data.jwt;
}