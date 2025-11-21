import { useNavigate } from "react-router-dom";
import { ArrowPointingSvg } from "../../svg/ArrowPointingSvg"
import { NormalButton } from "../../components/Buttons/NormalButton";
import { Input } from "../../components/Forms/Input";
import { useSubmitSupplier } from "../../hooks/useSubmitSupplier";
import { useState } from "react";


export const AddSuplier = () => {
    const [legal_name,set_legal_name ] = useState("")
    const [trade_name,set_trade_name ] = useState("")
    const [cnpj,set_cnpj ] = useState("")
    const [type ] = useState("phone")
    const [value,set_value ] = useState("")
    const navigate = useNavigate();
    
    const submit = useSubmitSupplier();
    
    function handleGoBack(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate('..')
    }
    
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        // mostra confirmação imediata (opcional)
        const data = {legal_name,trade_name,cnpj,type,value}

        submit.mutate(data, {
            onSuccess: () => {
                alert(`Fornecedor adicionado com sucesso! ${JSON.stringify(data)}`);
                navigate('..');
            },
            onError: () => { alert("Erro ao adicionar fornecedor."); }
        })
    }
    function handleLegalNameChange(value: string) {
        set_legal_name(value);
    }
    
    function handleTradeNameChange(value: string) {
        set_trade_name(value);
    }
    
    function handleCnpjChange(value: string) {
        set_cnpj(value);
    }
    
    function handleValueChange(value: string) {
        set_value(value);
    }

    return (
        <div>
            <header className="flex justify-between mt-11">
                <h1 className="flex items-center gap-5 mt-5 ml-9 font-bold text-[#E0E2EB] text-[25px]">
                    <button onClick={handleGoBack} className="flex justify-center items-center hover:bg-[#20273C] p-0 border border-[#20273C] rounded-[10px] size-12 text-[#858CA3]">
                        <ArrowPointingSvg className="rotate-270" />
                    </button>
                    Adicionar Fornecedor
                </h1>
            </header>

            <div className="flex flex-col justify-between gap-4 bg-[#141A29] mt-10 ml-10 border-[#20273C] border-2 rounded-[10px] w-[1520px] h-[872px]">
                <h3 className="mt-5 ml-5 font-semibold text-[#E0E2EB] text-[20px]">Dados do Ativo</h3>
                <div className="mr-5 ml-5 h-[77%]">
                    <div className="flex flex-row justify-between items-center gap-5 mb-5 w-full">
                        <p className="text-[#5E657D]">Informações</p>
                        <p className="border-[#20273C] border-t-2 w-full"></p>
                    </div>
                    <form className="flex justify-between gap-5 w-full">
                        <Input value={legal_name} onChange={handleLegalNameChange}  text="Nome Fantasia" className="border-2 w-[355px]"></Input>
                        <Input value={trade_name} onChange={handleTradeNameChange} text="Razão Social" className="border-2 w-[355px]"></Input>
                        <Input value={cnpj} onChange={handleCnpjChange} text="CNPJ" className="border-2 w-[355px]"></Input>
                        <Input value={value} onChange={handleValueChange} text="Telefone" className="border-2 w-[355px]"></Input>
                    </form>
                </div>

                <footer className="flex justify-end items-center gap-4 border-[#20273C] border-t h-[10%]">
                    <NormalButton  colors="cancelStyle" border="cancelStyle" onClick={handleGoBack} className="rounded-[10px] text-[#E0E2EB]">
                        Cancelar
                    </NormalButton>
                    <NormalButton colors="light" border="none" className="mr-5 rounded-[10px] w-[14%]" onClick={handleSubmit}>
                        Salvar
                    </NormalButton>
                </footer>
            </div>
        </div>
    )
}