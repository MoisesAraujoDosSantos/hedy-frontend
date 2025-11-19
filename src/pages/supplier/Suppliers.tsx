
import { useState } from "react";
import { useSupplier } from "../../hooks/useSupplier"
import type { SupplierType } from "../../types/SupplierType";
import { SupplierCard } from "./SupplierCard";
import { SearchSvg } from "../../svg/SearchSvg";
import { Input } from "../../components/Forms/Input";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { ArrowPointingSvg } from "../../svg/ArrowPointingSvg";
import { NormalButton } from "../../components/Buttons/NormalButton";




export const Suppliers = () => {
    const { data, isLoading, isError, error } = useSupplier({ "fields": "phone,legal_name,trade_name,id,registration_date,cnpj" });
    const [search, setSearch] =  useState("");
    const information = data?.data;
   
    if (isError) console.log(error.message)
    return (
        <div>
            <div className="flex justify-between mt-16">
                <h1 className="ml-9 font-bold text-[#E0E2EB] text-[25px]">Fornecedores</h1>
                <div className="flex items-center gap-5 mr-10 w-[740px] text-amber-50">
                    <Input
                        id="supplier-search"
                        placeholder="Pesquisar"
                        value={search}
                        onChange={setSearch}
                        startIcon={<SearchSvg />}
                        className="w-[300px]"
                    />
                    <div className="flex gap-3">
                        <div className="flex justify-around items-center w-[200px]">
                            ordernar por
                            <ArrowSvg className="rotate-90"/>
                        </div>
                        <ArrowPointingSvg />
                    </div>
                    <NormalButton colors="light" border="none" className="w-[200px]"> + adicionar novo</NormalButton>
                </div>
            </div>
            {isLoading && <p>Carregando...</p>}
            <SupplierCard information={information as SupplierType[]} />



        </div>
    )
}