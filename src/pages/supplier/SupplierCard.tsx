import type { SupplierType } from "../../types/SupplierType"

export const SupplierCard = ({information}: {information: SupplierType[]}) => {
    return (
        <>
        <header className="flex gap-32 text-red-600">
            <div className="flex gap-56">
                <span>Nome Fantasia</span>
                <span>Razão Social</span>
                <span>CNPJ</span>
                <span>Telefone</span>
                <span>Data de Cadastro</span>
            </div>
            <span>operações</span>
            
        </header>
            {information && (information.map((supplier: SupplierType) => (

                <div key={supplier.id} className="flex gap-32 w-[1520px] text-amber-300">
                    <p className="w-243">{supplier.legal_name}</p>
                    <p className="w-full">{supplier.trade_name}</p>
                    <p className="w-full">{supplier.cnpj}</p>
                    <p className="w-full">{supplier.value}</p>
                    <p className="w-full">{supplier.registration_date}</p>
                    <div className="flex gap-2 w-fit"><p>editar</p> <p>excluir</p></div>
                </div>
            )))}
        </>
    )
}