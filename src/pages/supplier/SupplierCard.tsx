import type { SupplierType } from "../../types/SupplierType"

export const SupplierCard = ({ information }: { information: SupplierType[] }) => {
    return (
        <>
            <div className="flex flex-col gap-4 bg-[#141A29] ml-10 border-2 w-[1520px] h-[872px]">
                <header className="flex gap-4 bg-[#20273C] text-red-600">
                    <div className="flex gap-40 w-[1400px]">
                        <p className="ml-5">Nome Fantasia</p>
                        <p>Razão Social</p>
                        <p>CNPJ</p>
                        <p>Telefone</p>
                        <p>Data de Cadastro</p>
                    </div>
                    <span className="mr-14">operações</span>

                </header>
                {information && (information.map((supplier: SupplierType) => (

                    <div key={supplier.id} className="flex gap-4 ml-5 border-2 w-[96%] text-amber-300">
                        <p className="w-full">{supplier.legal_name}</p>
                        <p className="w-full">{supplier.trade_name}</p>
                        <p className="w-full">{supplier.cnpj}</p>
                        <p className="w-full">{supplier.value}</p>
                        <p className="w-full">{supplier.registration_date}</p>
                        <div className="flex gap-2 w-fit"><p>editar</p> <p>excluir</p></div>
                    </div>
                )))}
            </div>
        </>
    )
}