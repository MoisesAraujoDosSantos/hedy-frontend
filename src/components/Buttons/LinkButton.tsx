import type { VariantProps } from "tailwind-variants/lite";
import { variantButton } from "./Button.variant";

export type ButtonVariants = VariantProps<typeof variantButton>

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, 
ButtonVariants {
    children: React.ReactNode;
}

export const LinkButton = ({children,...props}: LinkButtonProps) => {

    return <a {...props} className={`${variantButton(props)} text-center`}>
        {children}
    </a>;
}