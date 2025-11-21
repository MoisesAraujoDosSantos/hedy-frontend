
import { useState } from "react";
import { useSupplier } from "../../hooks/useSupplier"
import type { SupplierType } from "../../types/SupplierType";
import { SupplierCard } from "./SupplierCard";
import { SearchSvg } from "../../svg/SearchSvg";
import { Input } from "../../components/Forms/Input";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { ArrowPointingSvg } from "../../svg/arrow/ArrowPointingSvg";
import { NormalButton } from "../../components/Buttons/NormalButton";
import { useNavigate } from "react-router-dom";
import { Order } from "./Order";




export const ListSuppliers = () => {
    const { data, isLoading, isError, error } = useSupplier({ "fields": "phone,legal_name,trade_name,id,registration_date,cnpj" });
    const [search, setSearch] = useState("");
    const [orderBy, setOrderBy] = useState<"up" | "down">("up");
    const information = data?.data;
    const navigate = useNavigate();
    function handleAddSupplier(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate("/fornecedores/adicionar-novo");
        
    }

    function handleOrderByChange() {
        setOrderBy(orderBy === "up" ? "down" : "up");
        //nao está funcionando o ordernar
        console.log(<Order orderBy={orderBy} content={information as SupplierType[]} />)
    }

    if (isError) console.log(error.message)
    return (
        <div>
            <div className="flex justify-between mt-16">
                <h1 className="ml-9 font-bold text-[#E0E2EB] text-[25px]">Fornecedores</h1>
                <div className="flex justify-between items-center gap-5 mr-10 w-[740px] text-amber-50">
                    <Input
                        id="supplier-search"
                        placeholder="Pesquisar"
                        value={search}
                        onChange={setSearch}
                        startIcon={<SearchSvg />}
                        className="w-[250px]"
                    />
                    <div className="gap-3 grid grid-cols-3 border border-[#20273C] rounded-sm w-[230px] h-10">
    
                        <button  className="flex justify-between items-center col-span-2 p-3 rounded-[10px] w-[150px] h-10 text-[#858CA3]">
                            ordernar por
                            
                            <ArrowSvg className="col-span-1 rotate-90" />
                            
                        </button>

                        <button onClick={handleOrderByChange} className="flex justify-center items-center hover:bg-[#20273C] p-0 border-[#20273C] border-l text-[#858CA3]">
                            <ArrowPointingSvg direction={orderBy} />
                        </button>
                    </div>
                    <NormalButton colors="light" border="none" className="rounded-[10px] w-[200px]" onClick={handleAddSupplier}> + adicionar novo</NormalButton>
                </div>
            </div>
            {isLoading && <p>Carregando...</p>}
            
            <SupplierCard information={information as SupplierType[]} />



        </div>
    )
}