import React, { useEffect, useState } from "react";

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
}


// Botão principal clicado?  → muda estilo (ativo)
//                          ↓
//           Tem subbotões?  → sim → renderiza lista deles
//                                 ↓
//                 Cada subbotão pode ser clicado → muda seu próprio estilo


export const Button = ({ name, focused, className, children, subbuttons = [], onClick }: ButtonProps) => {

    const focusedStyle = "flex items-center gap-3 bg-[#20273C] px-3 py-2 rounded-[10px] w-full font-bold text-[#F1F4FE] transition-all duration-02 ease-in";
    const notFocusedStyle = "flex items-center gap-3 bg-transparent hover:bg-[#20273C] px-3 py-2 border-none rounded-[10px] w-full font-bold text-[#858CA3] transition-all duration-02 ease-in";
    const subbuttonFocusedStyle = "bg-blue-300 text-white transition-all duration-200 ease-in";
    const subbuttonNotFocusedStyle = "bg-gray-100 text-blackm hover:bg-gray-200 transition-all duration-200 ease-in";

    const activeFocused = focused === name;
    const childrenArray = React.Children.toArray(children);

    const [subbuttonFocused, setSubbuttonFocused] = useState<string | null>(null);

    useEffect(() => {
        setSubbuttonFocused(null);
    }, [activeFocused]);

    function handleSubbuttonClick(subbuttonName: string) {
        setSubbuttonFocused(subbuttonName);
    }


    return (
        <div className="rounded-[10px] w-[272px] h-12">


            <button className={`${activeFocused ? focusedStyle : notFocusedStyle} ${className ?? ''}`} onClick={onClick} type="button">
                <div className="flex items-center gap-3"> 
                    {childrenArray[0]}
                    <span>{name}</span>
                </div>
                {childrenArray[1]}
            </button>
            {
                activeFocused && subbuttons?.length > 0 && (subbuttons.map(sub => (

                    <button key={sub.name} type="button" onClick={() => handleSubbuttonClick(sub.name)
                    } className={`${subbuttonFocused === sub.name
                        ? subbuttonFocusedStyle : subbuttonNotFocusedStyle} ${className ?? ''}`}>
                        {sub.name}
                    </button>
                )))

            }


        </div>
    )
}