
import { useSupplier } from "../../hooks/useSupplier"
import type { SupplierType } from "../../types/SupplierType";
import { SupplierCard } from "./SupplierCard";




export const Suppliers = () => {
    const {data, isLoading, isError,error} = useSupplier({"fields": "phone,legal_name,trade_name,id,registration_date,cnpj"});

    const information = data?.data;
    console.log(data);
    if(isError) console.log(error.message)
    return (
        <div>
            <h1 className="font-bold text-4xl">Fornecedores</h1>
            {isLoading && <p>Carregando...</p>}
            <SupplierCard information={information as SupplierType[]}/>
            

            
        </div>
    )
}