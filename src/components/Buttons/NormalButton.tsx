import type { VariantProps } from "tailwind-variants/lite";
import { variantButton } from "./Button.variant";

export type ButtonVariants = VariantProps<typeof variantButton>

export interface NormalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
ButtonVariants {
    children: React.ReactNode;
    tooltip?: string;
}

export const NormalButton = ({children, tooltip, ...props}: NormalButtonProps) => {

    // Mescla as classes geradas pelo variantButton com qualquer className
    // passado via props, permitindo sobrepor/estender estilos quando
    // o componente é usado (por exemplo: `className="flex items-center"`).
    const mergedClassName = `${variantButton(props)} ${props.className ?? ""} text-center relative`.trim();
    
    return (
            <button {...props} className={mergedClassName}>
                {children}
            </button>
         
    );



//  antes este componente sobrescrevia qualquer `className` passado via
// props com o resultado de `variantButton(props)`. Agora mesclamos as
// classes (`variantButton(props)` + `props.className`) para que quem usar o
// componente possa passar utilitários (por exemplo `flex items-center gap-2`)
// e garantir que ícones e texto dentro do botão fiquem corretamente
// alinhados. Isso resolveu o problema de alinhamento do ícone na sidebar.
}

// Wrapper conveniente que aplica a variante `resetAll` para garantir que
// o botão fique sem estilos (útil quando você quer um botão sem qualquer
// estilo herdado). Use `<NormalButtonReset>...</NormalButtonReset>` ou
// `<NormalButton resetAll>` — ambos funcionam porque `resetAll` é uma
// variante do `variantButton`.
export const NormalButtonReset = ({ children, ...props }: NormalButtonProps) => {
    return <NormalButton {...props} resetAll>{children}</NormalButton>
}