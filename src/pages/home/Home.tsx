
import { NormalButton } from "../../components/Buttons/NormalButton";
import { useAuth } from "../../hooks/Auth";
import { LogoutSvg } from "../../svg/LogoutSvg";
import { TextSvg } from "../../svg/TextSvg";


export const Home = () => {

    const auth = useAuth();
    return (
        <main>
        <header>
            <div className="flex flex-row justify-between gap-2 ml-10 text-white">
                <div>
                    <p>Olá, {auth.user?.name}!</p>
                    <h1 className="font-bold text-[28px] leading-8">Inicio</h1>
                </div>
                <div className="flex flex-row items-center gap-5 mr-10">
                    
                    <NormalButton reset={true}  className="p-3.5 border border-[#20273C] rounded-[10px] size-12" title="Configurações da Empresa">
                        <TextSvg />
                    </NormalButton>
                    <NormalButton reset= {true} className="p-3.5 border border-[#20273C] rounded-[10px] size-12" title="Logout">
                        <LogoutSvg />
                    </NormalButton>
                </div>
            </div>

        </header>
        </main>
    )
}