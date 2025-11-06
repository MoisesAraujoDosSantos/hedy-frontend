
import { tv } from "tailwind-variants/lite";

export const variantButton = tv({
    base: "font-bold transition-all ease-in duration-02",
    variants: {
        colors: {
            lighter: 'text-[#e0e3ff] hover:text-[#1f1f1f] hover:bg-[#e0e3ff]',
            light: 'text-[#6674f4] hover:text-[white] hover:bg-[#6674f4]',
            main: 'text-[#F1F4FE] bg-[#3E63E7] hover:text-[white] hover:bg-[#5061FC]',
            dark: 'text-[#3346f0] hover:text-[white] hover:bg-[#3346f0]',   
            socialColor: 'text-[#6674f4] bg-[#e4e7ff]',
            submitColor: "text-white bg-[#5061FC] hover:bg-[#8491ff] active:bg-[#3346f0] transition duration-200",
            redStyle: 'text-[#fa2727] hover:text-[#ffffff] hover:bg-[#f04a4a]',
            googleStyle: 'text-[#F1F4FE] bg-[#0F1524] hover:bg-[#153193]/50',
        },

        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
        },
        display: {
            inline: "inline",
            block: "inline-block",
            block_center: "flex gap-2 items-center",
        },
        padding: {
            default: "px-4 py-2",
            none: "p-0"
        },
        border: {
            default: "border-[3px]",
            none: "border-none",
            googleStyle: "border border-[#20273C]"
        },
        disabled: { true: "bg-gray-400 opacity-50 cursor-not-allowed pointer-events-none" }

    },
    defaultVariants: {
        size: "md",
        colors: "main",
        display: "inline",
        padding: "default",
        border:"default",
        disabled: false

    },
});

