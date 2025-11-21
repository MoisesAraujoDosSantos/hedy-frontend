import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type SubButtonProps = {
    name: string;
    onClick?: () => void;
};
export interface ButtonProps {
    name: string;
    focused?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    expanded?: boolean;
    subbuttons?: SubButtonProps[];
    hidden?: "block" | "hidden";
}


// Botão principal clicado?  → muda estilo (ativo)
//                          ↓
//           Tem subbotões?  → sim → renderiza lista deles
//                                 ↓
//                 Cada subbotão pode ser clicado → muda seu próprio estilo


export const Button = ({ name, focused, className,hidden, children, subbuttons = [], onClick }: ButtonProps) => {

    const focusedStyle = "flex items-center gap-3 bg-[#20273C] px-3 py-2 rounded-[10px] w-full font-bold text-[#F1F4FE] transition-all duration-02 ease-in";
    const notFocusedStyle = "flex items-center gap-3 bg-transparent hover:bg-[#20273C] px-3 py-2 border-none rounded-[10px] w-full font-bold text-[#858CA3] transition-all duration-300 ease-in";
    const subbuttonFocusedStyle = "text-[#6B8AFA] transition-all duration-200 ease-in px-3 py-2";
    const subbuttonNotFocusedStyle = "w-full bg-transparent text-blackm hover:bg-[#20273C] px-3 py-2 rounded-[10px] transition-all duration-300 ease-in";

    const activeFocused = focused === name;
    const childrenArray = React.Children.toArray(children);

    const [subbuttonFocused, setSubbuttonFocused] = useState<string | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        setSubbuttonFocused(null);
    }, [activeFocused]);

    function handleSubbuttonClick(subbuttonName: string) {
        setSubbuttonFocused(subbuttonName);
        navigate("/estoque/" + subbuttonName.toLowerCase().replace(/\s+/g, '-'));
        
    }


    return (
        <div className="rounded-[10px] w-[272px] min-h-12">


            <button className={`${activeFocused ? focusedStyle : notFocusedStyle} ${className ?? ''} `} onClick={onClick} type="button">
                <div className="flex items-center gap-3">
                    {childrenArray[0]}
                    <span>{name}</span>
                </div>
                {childrenArray[1]}
            </button>
            {
                (subbuttons.map(sub => (

                    <button key={sub.name} type="button" onClick={() => { handleSubbuttonClick(sub.name), sub.onClick?.() }
                    } className={`${subbuttonFocused === sub.name
                        ? subbuttonFocusedStyle : subbuttonNotFocusedStyle} ${className ?? ''}
                        ${hidden}`}>
                        {sub.name}
                    </button>
                )))

            }


        </div>
    )
}