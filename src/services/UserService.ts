import { api } from '../http/AxiosConnect';

export const getHome = async () => {
    const response = await api.get('/');
    return response.data;
}

export const loginUser = async (username: string, password: string) => {
    
    const response = await api.post('/auth/login',
        { name : username, password }
    );
    
    return response.data.jwt;
}