import type { ReactElement } from "react";
import { LogoHeader } from "../../components/LogoHeader";
import { Input } from "../../components/Forms/Input";
import { NormalButton } from "../../components/Buttons/NormalButton";
import { LogoSvg } from "../../svg/LogoSvg";
//tirar as bordas dos inputs e botões depois
export const Login = (): ReactElement => {
    return (
        <div className="flex flex-col justify-center items-center m-[420px] mt-[300px]">


            <div className="top-0 left-0 z-0 fixed w-[405px] h-[1080px] overflow-hidden pointer-events-none">
                <LogoSvg
                    width={810}
                    height={1080}
                    className="top-0 left-[-405px] absolute object-cover"
                    color="#141A29"
                />
            </div>


            <LogoHeader className="w-60 h-[75px]" />
            <form className="flex flex-col gap-5 mt-16 w-[420px] h-auto">
                <Input id="username" text="Usuario" className="w-full h-12" />
                <Input id="password" text="Senha" className="w-full h-12" />
                <NormalButton className="rounded-[10px] w-full h-12" border="none">
                    Entrar
                </NormalButton>
                <NormalButton className="rounded-[10px] w-full h-12" colors="googleStyle">
                    Entrar com google
                </NormalButton>
            </form>





        </div>
    );
};
