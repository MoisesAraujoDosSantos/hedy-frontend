import { api } from "../http/AxiosConnect";


export const getSuppliers = async (params? : string) => {
    const response = await api.get("/suppliers", { params: { fields: params } });
    return response.data;
}

//forma que vai mandar os dados do fornecedor
// Exemplo de dados que podem ser enviados
// {
//   "legal_name": "Teta Logística LTDA",
//   "trade_name": "Teta Logística",
//   "cnpj": "73.424.720/0001-58",
//   "type": "phone",
//   "value": "(61) 99543-2109"
// }
export const createSupplier = async (supplierData : object) => {
    const response = await api.post("/suppliers", supplierData);
    return response.data;
}