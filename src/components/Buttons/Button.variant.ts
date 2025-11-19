
import { tv } from "tailwind-variants/lite";

export const variantButton = tv({
    base: "font-bold transition-all ease-in duration-02",
    variants: {
        colors: {
            lighter: 'text-[#e0e3ff] hover:text-[#1f1f1f] hover:bg-[#e0e3ff]',
            light: 'bg-[#3E63E7] text-[#F1F4FE] hover:text-[white] hover:bg-[#5a76da]',
            main: 'text-[#F1F4FE] bg-transparent hover:text-[white] hover:bg-[#20273C]',
            dark: 'text-[#3346f0] hover:text-[white] hover:bg-[#3346f0]',   
            socialColor: 'text-[#6674f4] bg-[#e4e7ff]',
            submitColor: "text-white bg-[#5061FC] hover:bg-[#8491ff] active:bg-[#3346f0] transition duration-200",
            redStyle: 'text-[#fa2727] hover:text-[#ffffff] hover:bg-[#f04a4a]',
            googleStyle: 'text-[#F1F4FE] bg-[#0F1524] hover:bg-[#153193]/50',
            cancelStyle: 'flex justify-center items-center hover:bg-[#20273C] p-0  w-[14%] text-[#858CA3]',

            sideBarStylePrimary: 'bg-[#20273C] rounded-[10px] text-[#F1F4FE]',
            sideBarStyleSecondary: 'bg-transparent rounded-[10px] hover:bg-[#20273C] text-[#858CA3] border-none'
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
            googleStyle: "border border-[#20273C]",
            cancelStyle: "border border-[#20273C]"
        },
        reset : {
            true: 'border-none p-0 '
        },
       
        resetAll: { true: '!p-0 !m-0 !border-none !bg-transparent !text-inherit !shadow-none !ring-0' },
        disabled: { true: "bg-gray-400 opacity-50 cursor-not-allowed pointer-events-none" }
        
    },
    defaultVariants: {
        size: "md",
        colors: "main",
        display: "inline",
        padding: "default",
        border:"default",
        disabled: false,
        reset: false

    },
});

