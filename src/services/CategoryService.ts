import { api } from "../http/AxiosConnect";


export const getCategories = async (params? : string) => {
    const response = await api.get("/categories", { params: { fields: params } });
    return response.data;
}
export const createCategory = async (categoryData : object) => {
    const response = await api.post("/categories", categoryData);
    return response.data;
}