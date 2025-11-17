
export interface ArrowSvgProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}


export const ArrowSvg = ({ width = 20, height = 20, color = "#F1F4FE", className }: ArrowSvgProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} transition-transform duration-600 ease-in-out`}>
            <path d="M4.90043 2.84898C4.42707 2.4052 4.42707 1.6857 4.90043 1.24192C5.3738 0.798144 6.14127 0.798144 6.61463 1.24192L15.0995 9.19647C15.5728 9.64024 15.5728 10.3597 15.0995 10.8035L6.61463 18.7581C6.14127 19.2019 5.3738 19.2019 4.90043 18.7581C4.42707 18.3143 4.42707 17.5948 4.90043 17.151L12.5282 10L4.90043 2.84898Z"
                fill={color} />
        </svg>
    )
}