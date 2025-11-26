import { useState } from "react";
import { ArrowSvg } from "../../svg/ArrowSvg"
import { CheckSvg } from "../../svg/CheckSvg";

export interface SelectProps {

    textName: string;
    options?: { value: string; label: string }[];
    className?: string;
    itens?: string[];
    onchange?: (value: string) => void;

}
//fazer isso aqui receber um array de opçõe e mapear elas aqui e mostrar na tela

export const Select = ({ textName, className, itens,onchange }: SelectProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const focusedClass = isOpen ? "border-blue-500" : "";
    const [text, set_text] = useState("selecione a categoria");
    function handleOpen() {
        setIsOpen(!isOpen);
    }

    function handleSelect(label: string) {
        set_text(label);
        setIsOpen(false);
        onchange && onchange(label);
    }
    return (
        <div className="w-[355px] select">
            <div id="category-select" className="relative text-[0.75rem] tracking-[0.0225rem]">
                <label htmlFor="category-select" className="flex flex-col gap-2 font-medium text-[#E0E2EB] text-[16px] leading-[26px]"> {textName}</label>
                <input type="checkbox" id="options-view-button" onChange={handleOpen}
                    className="top-0 left-0 z-50 absolute opacity-0 w-full h-full cursor-pointer unset"
                />

                <div id="select-button" className={`flex justify-between items-center mt-2 p-2 border-2 text-[16px] border-[#20273C] rounded-md ${focusedClass} ${className}`} >
                    <div id="selected-value"> {text}</div>
                    <ArrowSvg className={isOpen ? "-rotate-90" : "rotate-90"} />
                </div>
            </div>
            <ul id="options" className={`${isOpen ? "" : "hidden"} `} >
            {itens && itens.map((item) => (
                    <div className="group">
                        <li id="option" className="relative flex items-center gap-2 bg-amber-400 hover:bg-amber-500">
                            <label className="flex items-center gap-2 p-2 w-full cursor-pointer">
                                <input type="radio"
                                    name="category"
                                    value="category 1"
                                    data-label={item}
                                    className="cursor-pointer unset"
                                    onClick={() => handleSelect(item)}
                                />
                                <span className="label">{item}</span>
                                <CheckSvg className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
                            </label>
                        </li>
                    </div>
            ))}
            </ul>
                </div>

            )
}