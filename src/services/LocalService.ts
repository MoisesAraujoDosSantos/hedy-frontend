import { api } from "../http/AxiosConnect";


export const getLocals = async (params? : string) => {
    const response = await api.get("/locations", { params: { fields: params } });
    return response.data;
}
export const createLocal = async (localData : object) => {
    const response = await api.post("/locations", localData);
    return response.data;
}