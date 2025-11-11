
import { useAuth } from "../hooks/Auth"
import { BoxSvg } from "../svg/BoxSvg"
import { HouseSvg } from "../svg/HouseSvg"
import { PersonGroupSvg } from "../svg/PersonGroupSvg"
import { PersonTextSvg } from "../svg/PersonTextSvg"
import { ReportSvg } from "../svg/ReportSvg"
import { useNavigate } from "react-router-dom"
import { LogoHeader } from "./LogoHeader"

export const Sidebar = () => {

    const user = useAuth()
    const navigate = useNavigate()

    function handleNavigation(path: string) {
        navigate(path)
    }

    return (
        <aside className="top-0 left-0 fixed flex flex-col items-center bg-[#141A29] m-0 border border-[#20273C] w-80 h-screen text-white">
            <LogoHeader className="mt-10 mr-20 ml-20" />
            <div className="flex flex-col mt-[178px] ml-6 w-[272px] h-[250px]">
                <div className="mb-4 rounded-[10px] w-[272px] h-12">
                    <button type="button" onClick={() => handleNavigation("/home")} className="flex justify-between items-center bg-[#20273C] px-3 py-2 rounded-[10px] w-full font-bold text-[#F1F4FE] transition-all duration-02 ease-in">
                        <span className="inline-block"><HouseSvg className="block w-5 h-5" /></span>

                        <span>Inicio</span>
                    </button>
                </div>

                <button type="button" onClick={() => handleNavigation("/recursos-humanos")} className="flex items-center gap-3 bg-transparent hover:bg-[#20273C] px-3 py-2 border-none rounded-[10px] w-full font-bold text-[#858CA3] transition-all duration-02 ease-in">
                    <PersonTextSvg className="block w-5 h-5" />
                    <span>Recursos Humanos</span>
                </button>

                <button type="button" onClick={() => handleNavigation("/estoque")} className="flex items-center gap-3 bg-transparent hover:bg-[#20273C] px-3 py-2 border-none rounded-[10px] w-full font-bold text-[#858CA3] transition-all duration-02 ease-in">
                    <BoxSvg className="block w-5 h-5" />
                    <span>Estoque</span>
                </button>

                <button type="button" onClick={() => handleNavigation("/fornecedores")} className="flex items-center gap-3 bg-transparent hover:bg-[#20273C] px-3 py-2 border-none rounded-[10px] w-full font-bold text-[#858CA3] transition-all duration-02 ease-in">
                    <PersonGroupSvg className="block w-5 h-5" />
                    <span>Fornecedores</span>
                </button>

                <button type="button" onClick={() => handleNavigation("/relatorio")} className="flex items-center gap-3 bg-transparent hover:bg-[#20273C] px-3 py-2 border-none rounded-[10px] w-full font-bold text-[#858CA3] transition-all duration-02 ease-in">
                    <ReportSvg className="block w-5 h-5" />
                    <span>Relatório</span>
                </button>
            </div>
            <div className="flex flex-col gap-2 bg-[#1B2132] mt-[350px] mr-6 ml-6 p-3 rounded-[10px] w-[272px]">imagem {user?.user?.name}
                <p>email@exemplo.com</p>
            </div>
        </aside>
    )
}