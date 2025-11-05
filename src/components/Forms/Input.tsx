
export interface InputProps {
    id:string;
    type?: string;
    placeholder?: string;
    className?: string;
    text : string;
}


export const Input = ({ id, type = "text", placeholder = "Digite algo...", className, text }: InputProps) => {
    return (
        <label htmlFor={id} className="flex flex-col gap-2">
            <span className="font-medium text-[#E0E2EB] text-[16px] leading-[26px]">{text}</span>
            <input type={type}
                id={id}
                placeholder={placeholder}
                className={`p-2  rounded-md border-2 border-gray-300 text-amber-50 ${className}`} />
        </label>)
}