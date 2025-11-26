
import { useSupplier } from "../../hooks/useSupplier"
import type { SupplierType } from "../../types/SupplierType";
import { SupplierCard } from "./SupplierCard";
import { Header } from "../Header";




export const ListSuppliers = () => {
    const { data, isLoading, isError } = useSupplier({ "fields": "phone,legal_name,trade_name,id,registration_date,cnpj" });
    const information = data?.data;
    return (
        <div>
            <Header addPath="/fornecedores/adicionar-novo"
             title="Fornecedores" isLoading={isLoading} 
             information={information as SupplierType[]} />
            {isLoading && <p>Carregando...</p>}
        
            <SupplierCard information={information as SupplierType[]} />
            {isError && <p>Erro ao carregar os dados.</p>}


        </div>
    )
}