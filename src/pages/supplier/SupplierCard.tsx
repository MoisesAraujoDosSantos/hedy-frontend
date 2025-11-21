import { EditSvg } from "../../svg/EditSvg"
import { TrashSvg } from "../../svg/TrashSvg"
import type { SupplierType } from "../../types/SupplierType"

export const SupplierCard = ({ information }: { information: SupplierType[] }) => {
    return (
        <>

            <div className="flex flex-col gap-4 bg-[#141A29] mt-10 ml-10 border-[#20273C] border-2 rounded-[10px] w-[1520px] h-[872px]">
                <p className="mt-5 ml-5 font-semibold text-[#E0E2EB] text-2xl">Listagem </p>
                <header className="items-center grid grid-cols-6 bg-[#20273C] w-full h-[50px] text-[#858CA3]">
                        <p className="ml-5">Nome Fantasia</p>
                        <p className="ml-5">Razão Social</p>
                        <p className="ml-5">CNPJ</p>
                        <p className="ml-5">Telefone</p>
                        <p className="ml-5">Data de Cadastro</p>
                        <span className="mr-14 ml-5">operações</span>
                    

                </header>
                {information && (information.map((supplier: SupplierType) => (

                    <div key={supplier.id} className="grid grid-cols-6 ml-5 w-full text-amber-50">
                        <p className="w-[230px] h-10">{supplier.legal_name}</p>
                        <p className="w-[230px] h-10">{supplier.trade_name}</p>
                        <p className="w-[230px] h-10">{supplier.cnpj}</p>
                        <p className="w-[230px] h-10">{supplier.value}</p>
                        <p className="w-[230px] h-10">{supplier.registration_date}</p>
                        <div className="flex gap-5 w-fit"><EditSvg /> <TrashSvg /></div>
                        <span className="col-span-6 border-[#20273C] border-b w-[97%]"></span>
                    </div>
                )))}
                {/* {information && (information.map((supplier: SupplierType) => (

                    <div key={supplier.id} className="grid grid-cols-6 ml-5 border-2 w-full text-amber-50">
                        <p className="w-[230px] h-10">{supplier.legal_name}</p>
                        <p className="w-[230px] h-10">{supplier.trade_name}</p>
                        <p className="w-[230px] h-10">{supplier.cnpj}</p>
                        <p className="w-[230px] h-10">{supplier.value}</p>
                        <p className="w-[230px] h-10">{supplier.registration_date}</p>
                        <div className="flex gap-2 w-fit"><p>editar</p> <p>excluir</p></div>
                    </div>
                )))} */}
            </div>
        </>
    )
}