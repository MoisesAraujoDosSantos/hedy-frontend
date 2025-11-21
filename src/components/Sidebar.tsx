
import { useAuth } from "../hooks/Auth"
import { BoxSvg } from "../svg/BoxSvg"
import { HouseSvg } from "../svg/HouseSvg"
import { PersonGroupSvg } from "../svg/PersonGroupSvg"
import { PersonTextSvg } from "../svg/PersonTextSvg"
import { ReportSvg } from "../svg/ReportSvg"
import { useNavigate } from "react-router-dom"
import { LogoHeader } from "./LogoHeader"
import { useState } from "react"
import { Button } from "./Buttons/Button"
import { ArrowSvg } from "../svg/ArrowSvg"

//depois colocar uma variante no tailwind para esconder essa seta quando o botão não tiver subitens

export const Sidebar = () => {

    const user = useAuth()
    const navigate = useNavigate()
    const [focused, setFocused] = useState<string>("");
    const focusedColor = "#6B8AFA ease-in-out transition-all duration-600";
    const notFocusedColor = "#858CA3 ease-in-out transition-all duration-600";
    const stokSubmenus = [
        { name: "Ativos",
          onclick: () => (alert("clicou em ativos"))
         },
        { name: "Categoria-Subcategoria" },
        { name: "Localidade" },
        { name: "Movimentacao" },
    ];
    const humanResourcesSubmenus = [
        {name:"Cargos"},
        {name:"Funcionários"},
    ]

    function handleNavigation(path: string) {
        navigate(path)
    }

    function handleButtonClick(name: string) {
        setFocused(name);

    }

    return (
        <aside className="top-0 left-0 fixed flex flex-col justify-around items-center bg-[#141A29] m-0 border border-[#20273C] w-80 h-screen text-white">
            <LogoHeader className="mr-20 ml-20" />
            <div className="flex flex-col mt-[178px] ml-6 w-[272px] h-[43%]">
                <Button name="Inicio" className="flex justify-between" focused={focused} onClick={() => { handleButtonClick("Inicio"); handleNavigation("/home"); }}>
                    <HouseSvg className="block w-5 h-5" color={focused === "Inicio" ? focusedColor : notFocusedColor} />
                    {focused === "Inicio" && <ArrowSvg />}
                </Button>


                <Button name="Recursos Humanos" className="flex justify-between" hidden={focused === "Recursos Humanos" ? "block" : "hidden"} subbuttons={humanResourcesSubmenus}  focused={focused} onClick={() => { handleButtonClick("Recursos Humanos"); handleNavigation("/recursos-humanos"); }}>
                    <PersonTextSvg className="block w-5 h-5" color={focused === "Recursos Humanos" ? focusedColor : notFocusedColor} />
                    {focused === "Recursos Humanos" && <ArrowSvg className="-rotate-90"/>}
        
                </Button>


                <Button name="Estoque" hidden={focused === "Estoque" ? "block" : "hidden"} className="flex justify-between" subbuttons={stokSubmenus}  focused={focused} onClick={() => { handleButtonClick("Estoque"); handleNavigation("/estoque"); }}>
                    <BoxSvg className="block w-5 h-5" color={focused === "Estoque" ? focusedColor : notFocusedColor} />
                    {focused === "Estoque" && <ArrowSvg className="-rotate-90" />}
                </Button>

                <Button name="Fornecedores" className="block static" focused={focused} onClick={() => { handleButtonClick("Fornecedores"); handleNavigation("/fornecedores"); }}>
                    <PersonGroupSvg className="block w-5 h-5" color={focused === "Fornecedores" ? focusedColor : notFocusedColor} />
                </Button>


                <Button name="Relatório" focused={focused} onClick={() => { handleButtonClick("Relatório"); handleNavigation("/relatorio"); }}>
                    <ReportSvg className="block w-5 h-5" color={focused === "Relatório" ? focusedColor : notFocusedColor} />
                </Button>

            </div>
            <div className="flex flex-col gap-2 bg-[#1B2132] mr-6 ml-6 p-3 rounded-[10px] w-[272px]">imagem {user?.user?.name}
                <p>email@exemplo.com</p>
            </div>
        </aside>
    )
}