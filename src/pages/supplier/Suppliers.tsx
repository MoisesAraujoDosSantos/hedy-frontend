
import { useSupplier } from "../../hooks/useSupplier"
import type { SupplierType } from "../../types/SupplierType";
import { SupplierCard } from "./SupplierCard";




export const Suppliers = () => {
    const { data, isLoading, isError, error } = useSupplier({ "fields": "phone,legal_name,trade_name,id,registration_date,cnpj" });

    const information = data?.data;
    console.log(data);
    if (isError) console.log(error.message)
    return (
        <div>
            <div className="flex justify-between mt-16">
                <h1 className="ml-9 font-bold text-[#E0E2EB] text-[25px]">Fornecedores</h1>
                <div className="text-amber-50">
                    {/* depois trocar pro componente de pesquisa */}
                    <p>Pesquisar</p>
                    <div>
                        <div>
                            ordernar por:
                            imgpbaixo
                        </div>
                        imgpcima
                    </div>
                    <button> + adicionar novo</button>
                </div>
            </div>
            {isLoading && <p>Carregando...</p>}
            <SupplierCard information={information as SupplierType[]} />



        </div>
    )
}