import { useNavigate} from "react-router-dom";
import { ArrowPointingSvg } from "../../../svg/arrow/ArrowPointingSvg"
import { NormalButton } from "../../../components/Buttons/NormalButton";
import { Input } from "../../../components/Forms/Input";
import { useState } from "react";
import { SuccessModal } from "../../../components/modal/SuccessModal";
import { Select } from "../../../components/Forms/Select";
import { useSubmitCustom } from "../../../hooks/useSubmitCustom";



export const AddLocation = () => {
    const [name,set_name ] = useState("")
    // search (busca)
    const [type,set_type ] = useState("") //warehouse/apartament etc
    const [status,set_status] = useState("") //ativo/inativo
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [responsible, set_responsible] = useState("");
    const navigate = useNavigate();
    const conditions = [{ value: "active", label: "ativo"}, {value: "inactive", label: "inativo"}];
    const types = [{ value : "warehouse", label: "amoxarifado"},{value: "office", label: "escritorio"}];
    
    const submit = useSubmitCustom({key: 'locations', path: '/locations'});
    
    function handleGoBack(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate('..');
    }
    
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        // mostra confirmação imediata (opcional)
        const data = {name,responsible,active: status === "active", type}
        submit.mutate(data, {
            onSuccess: () => {
                setIsModalOpen(true);
                
            },
            onError: () => { alert("Erro ao adicionar localidade."); }
        })
    }
    function handleNameChange(value: string) {
        console.log(value);
        set_name(value);
    }
    
    function handleResponsibleChange(value: string) {
        set_responsible(value);
    }
    


    return (
        <div>
            <header className="flex justify-between mt-11">
                <h1 className="flex items-center gap-5 mt-5 ml-9 font-bold text-[#E0E2EB] text-[25px]">
                    <button onClick={handleGoBack} className="flex justify-center items-center hover:bg-[#20273C] p-0 border border-[#20273C] rounded-[10px] size-12 text-[#858CA3]">
                        <ArrowPointingSvg className="rotate-270" />
                    </button>
                    Adicionar Localidade
                </h1>
            </header>

            <div className="flex flex-col justify-between gap-4 bg-[#141A29] mt-10 ml-10 border-[#20273C] border-2 rounded-[10px] w-[1520px] h-[872px]">
                <h3 className="mt-5 ml-5 font-semibold text-[#E0E2EB] text-[20px]">Dados da Localidade</h3>
                <div className="mr-5 ml-5 h-[77%]">
                    <div className="flex flex-row justify-between items-center gap-5 mb-5 w-full">
                        <p className="text-[#5E657D]">Informações</p>
                        <p className="border-[#20273C] border-t-2 w-full"></p>
                    </div>
                    <form className="flex justify-between gap-5 w-full">
                        <Input value={name} onChange={handleNameChange}  text="Nome" className="border-2 w-[355px]"></Input>
                        <Input value={responsible} onChange={handleResponsibleChange} text="Responsavel" className="border-2 w-[355px]"></Input>
                        <Select textName="Tipo" options={types} onchange={(value)=> set_type(value)} />
                        <Select textName="status"  options={conditions} onchange={(value)=> set_status(value)} />
                    </form>
                </div>
                <SuccessModal isOpen={isModalOpen} redirectPath=".." onClose={() => {setIsModalOpen(false)}} message="Localidade adicionada com sucesso" />
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