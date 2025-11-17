import { api } from "../http/AxiosConnect";


export const getSuppliers = async (params? : string) => {
    const response = await api.get("/suppliers", { params: { fields: params } });
    return response.data;
}