
export interface InputProps {
    id:string;
    type?: string;
    placeholder?: string;
    className?: string;
    text : string;
    value: string;
    onChange: (value: string) => void;
}


export const Input = ({ id, type = "text", placeholder = "Digite algo...", className, text, value, onChange }: InputProps) => {
    return (
        <label htmlFor={id} className="flex flex-col gap-2">
            <span className="font-medium text-[#E0E2EB] text-[16px] leading-[26px]">{text}</span>
            <input type={type}
                id={id}
                placeholder={placeholder}
                className={`p-2  rounded-md border border-[#20273C] text-amber-50 ${className}`} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                />
        </label>)
}