import { api } from "../http/AxiosConnect";

type ReaderFn = (params?: string) => Promise<any>;
type CreateFn = (data: object) => Promise<any>;

export interface GeralService {
    reader: ReaderFn;
    create: CreateFn;
}

export const createGeralService = (path: string): GeralService => {
    const reader: ReaderFn = async (params) => {
        const response = await api.get(path, { params: { fields: params } });
        return response.data;
    };

    const create: CreateFn = async (data) => {
        const response = await api.post(path, data);
        return response.data;
    };

    return { reader, create };
};