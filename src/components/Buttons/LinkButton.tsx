import type { VariantProps } from "tailwind-variants/lite";
import { variantButton } from "./Button.variant";

export type ButtonVariants = VariantProps<typeof variantButton>

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, 
ButtonVariants {
    children: React.ReactNode;
}

export const LinkButton = ({children,...props}: LinkButtonProps) => {

    // Mescla as classes geradas pelo variantButton com qualquer className
    // passado via props, permitindo sobrepor/estender estilos quando
    // o componente é usado.
    const mergedClassName = `${variantButton(props)} ${props.className ?? ""} text-center`.trim();

    return <a {...props} className={mergedClassName}>
        {children}
    </a>
}