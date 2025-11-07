
import { useAuth } from "../hooks/Auth"
import { BoxSvg } from "../svg/BoxSvg"
import { HouseSvg } from "../svg/HouseSvg"
import { PersonGroupSvg } from "../svg/PersonGroupSvg"
import { PersonTextSvg } from "../svg/PersonTextSvg"
import { ReportSvg } from "../svg/ReportSvg"
import { NormalButton } from "./Buttons/NormalButton"
import { LogoHeader } from "./LogoHeader"

export const Sidebar = () => {

    const user = useAuth()

    return (
        <aside className="top-0 left-0 fixed flex flex-col items-center bg-[#141A29] m-0 border border-[#20273C] w-80 h-screen text-white">
            <LogoHeader className="mt-10 mr-20 ml-20" />
            <div className="flex flex-col mt-[178px] ml-6 w-[272px] h-[250px]">
                <div className="mb-4 rounded-[10px] w-[272px] h-12 text-center">
                    <NormalButton  colors="sideBarStylePrimary" className="w-full">
                        <HouseSvg /> <span>Inicio</span> 
                        
                    </NormalButton>
                </div>
                <NormalButton colors="sideBarStyleSecondary" className="w-full">
                    <PersonTextSvg /><span>Recursos Humanos</span>
                </NormalButton>
                <NormalButton colors="sideBarStyleSecondary" className="w-full">
                    <BoxSvg /><span>Estoque</span>
                </NormalButton>
                <NormalButton colors="sideBarStyleSecondary" className="w-full">
                    <PersonGroupSvg /><span>Fornecedores</span>
                </NormalButton>
                <NormalButton colors="sideBarStyleSecondary" className="w-full">
                    <ReportSvg /><span>Relatório</span>
                </NormalButton>
            </div>
            <div className="flex flex-col gap-2 bg-[#1B2132] mt-[350px] mr-6 ml-6 p-3 rounded-[10px] w-[272px]">imagem {user?.user?.name}
                <p>email@exemplo.com</p>
            </div>
        </aside>
    )
}