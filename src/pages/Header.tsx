import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SupplierType } from "../types/SupplierType";
import { Order } from "./supplier/Order";
import { Input } from "../components/Forms/Input";
import { SearchSvg } from "../svg/SearchSvg";
import { ArrowSvg } from "../svg/ArrowSvg";
import { ArrowPointingSvg } from "../svg/arrow/ArrowPointingSvg";
import { NormalButton } from "../components/Buttons/NormalButton";

export interface HeaderProps {
    addPath: string;
    information: SupplierType[];
    title: string,
    isLoading: boolean;
}



export const Header = ({ addPath, title, isLoading, information }: HeaderProps) => {
    const [search, setSearch] = useState("");
    const [orderBy, setOrderBy] = useState<"up" | "down">("up");
    const navigate = useNavigate();
    const list = ["um", "dois", "tres", "quatro", "cinco"]
    function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate(addPath);

    }
    //depois entender pq n está funcionando o ordernar
    function handleOrderByChange() {
        setOrderBy(orderBy === "up" ? "down" : "up");
        //nao está funcionando o ordernar

        const ala = <Order orderBy={orderBy} content={information as SupplierType[]} />
        console.log(ala)
    }

    return (
        <div>

            <div className="flex justify-between mt-16">
                <h1 className="ml-9 font-bold text-[#E0E2EB] text-[25px]">{title}</h1>
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

                        <button className="flex justify-between items-center col-span-2 p-3 rounded-[10px] w-[150px] h-10 text-[#858CA3]">
                            ordernar por

                            <ArrowSvg className="col-span-1 rotate-90" />

                            {/* <div className="block">{list}</div> */}
                        </button>


                        <button onClick={handleOrderByChange} className="flex justify-center items-center hover:bg-[#20273C] p-0 border-[#20273C] border-l text-[#858CA3]">
                            <ArrowPointingSvg direction={orderBy} />
                        </button>
                    </div>
                    <NormalButton colors="light" border="none" className="rounded-[10px] w-[200px]" onClick={handleAdd}> + adicionar novo</NormalButton>
                </div>
            </div>
            {/* depois arrumar isso aqui */}
            {/* <div className="relative flex justify-end items-center mt-1 w-full h-10">
                
                <p className="absolute flex flex-col items-start mr-[16.9%] border border-[#20273C] rounded-sm w-[230px] h-fit">
                    <button>oie</button>
                    <button>ola</button>
                    
                    </p>
            </div> */}
            {isLoading && <p>Carregando...</p>}

        </div>
    )
}