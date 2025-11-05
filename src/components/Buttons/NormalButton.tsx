import type { VariantProps } from "tailwind-variants/lite";
import { variantButton } from "./Button.variant";

export type ButtonVariants = VariantProps<typeof variantButton>

export interface NormalButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
ButtonVariants {
    children: React.ReactNode;
}

export const NormalButton = ({children,...props}: NormalButton) => {

    return <button  {...props} className={`${variantButton(props)}  text-center`}>
        {children}
    </button>;
}