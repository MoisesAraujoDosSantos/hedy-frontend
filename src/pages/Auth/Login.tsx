import { useState, type ReactElement } from "react";
import { LogoHeader } from "../../components/LogoHeader";
import { Input } from "../../components/Forms/Input";
import { NormalButton } from "../../components/Buttons/NormalButton";
import { LogoSvg } from "../../svg/LogoSvg";
import { EyeSvg } from "../../svg/EyeSvg";
import { GoogleSvg } from "../../svg/GoogleSvg";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

export const Login = (): ReactElement => {

    const [enable, setEnable] = useState(false);
    const [seen, setSeen] = useState("password");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleDisable() {
        setEnable(!enable);
        if (!enable) {
            setSeen("text");
        } else {
            setSeen("password");
        }
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const loginData = {
            name,
            password
        }
        try {
            if (!name || !password) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            (async () => {
                 await login(loginData.name, loginData.password);
                
                //nao permite voltar para a pagina de login
              
                navigate("/home", { replace: true });
            })();
        } catch (error) {
            alert(`Erro ao realizar login. Verifique suas credenciais e tente novamente. ${error}`);
        }
    }

    function handleNameChange(value: string) {
        setName(value);
    }
    function handlePasswordChange(value: string) {
        setPassword(value);
    }

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

            <LogoHeader className="z-10 w-60 h-[75px]" />
            <form className="z-10 flex flex-col gap-5 mt-16 w-[420px] h-auto">
                <Input id="username" type="text" text="Usuario" placeholder="Nome de Usuário..."
                 className="w-full h-12" value={name} onChange={handleNameChange} />
                
                <div className="relative">
                    <Input id="password" text="Senha" placeholder="Senha de acesso..."
                     className="w-full h-12" type={seen} value={password} onChange={handlePasswordChange} />
                    <button aria-label="ver caracteres" type="button" onClick={handleDisable} className="top-[72%] right-3 absolute -translate-y-1/2 cursor-pointer transform">
                        <EyeSvg width={20} height={20} EyeSlash={enable} />
                    </button>
                </div>

                <NormalButton onClick={handleSubmit} className="rounded-[10px] w-full h-12" border="none">
                    Entrar
                </NormalButton>
                <div className="relative">
                    <NormalButton aria-label="entrar com google" className="rounded-[10px] w-full h-12" border="googleStyle" colors="googleStyle">
                    <GoogleSvg className="top-[50%] left-[25%] absolute -translate-y-1/2" />
                        Entrar com google
                    </NormalButton>
                </div>
            </form>

        </div>
    );
};
