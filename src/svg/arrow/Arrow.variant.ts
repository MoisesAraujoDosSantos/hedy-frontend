import { tv } from "tailwind-variants/lite";

export const arrowVariants = tv({
    base: "transition-transform ease-in duration-300",
    variants: {
        direction: {
            up: 'rotate-0',
            down: 'rotate-180',
            left: 'rotate-270',
            right: 'rotate-90',
        },
    },
    defaultVariants: {
        direction: "up"
    }
})