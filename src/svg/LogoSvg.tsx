
export type LogoSvgProps = {
    width?: string | number;
    height?: string | number;
    color?: string;
    className?: string;
};

export const LogoSvg = ({ width = 142, height = 189, color = "#3E63E7", className }: LogoSvgProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 142 189" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 0H47.0588V47.0588H0V0Z" fill="#E0E2EB" />
            <path d="M141.176 47.0588V0H94.1176V47.0588C94.1176 60.0538 83.5832 70.5882 70.5882 70.5882C31.6034 70.5882 0 102.192 0 141.176V188.235H47.0588V141.176C47.0588 128.182 57.5933 117.647 70.5882 117.647C109.573 117.647 141.176 86.0436 141.176 47.0588Z"
                fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M94.1176 141.176V188.235H141.176V164.706V141.176H94.1176ZM105.882 176.471V152.941H129.412V176.471H105.882Z"
                fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M141.176 141.176H94.1176V188.235H141.176V164.706V141.176ZM105.882 176.471V152.941H129.412V176.471H105.882Z"
                fill={color} />
        </svg>
    )
}
