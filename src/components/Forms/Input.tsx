import React, { useState, useEffect } from "react";

export interface InputProps {
    id?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    text?: string;
    value?: string;
    onChange?: (value: string) => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

export const Input = ({ id, type = "text", placeholder = "Digite algo...", className = "", text, value, onChange, startIcon, endIcon }: InputProps) => {
    const isControlled = value !== undefined && onChange !== undefined;
    const [internal, setInternal] = useState<string>(value ?? "");

    useEffect(() => {
        if (!isControlled) {
            setInternal(value ?? "");
        }
    }, [value, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (isControlled) onChange!(v);
        else setInternal(v);
    };

    const paddingLeft = startIcon ? "pl-10" : "";
    const paddingRight = endIcon ? "pr-10" : "";

    return (
        <label htmlFor={id} className="flex flex-col gap-2">
            {text && <span className="font-medium text-[#E0E2EB] text-[16px] leading-[26px]">{text}</span>}
            <div className="relative">
                {startIcon && (
                    <div className="top-1/2 left-3 absolute -translate-y-1/2 pointer-events-none">
                        {startIcon}
                    </div>
                )}
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`p-2 rounded-md border border-[#20273C] text-amber-50 bg-transparent ${paddingLeft} ${paddingRight} ${className}`}
                    value={isControlled ? value! : internal}
                    onChange={handleChange}
                />
                {endIcon && (
                    <div className="top-1/2 right-3 absolute -translate-y-1/2 pointer-events-none">
                        {endIcon}
                    </div>
                )}
            </div>
        </label>
    );
};
