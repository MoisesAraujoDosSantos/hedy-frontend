
export interface SuccessSvgProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}


export const SuccessSvg = ({ width = 60, height = 60, color = "#519000", className }: SuccessSvgProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}>
            <rect width={width} height={height} rx="7.5" fill={color} fill-opacity="0.1" />
            <path d="M41.3545 25.1265C41.9699 24.5111 41.9699 23.5134 41.3545 22.8981C40.7392 22.2827 39.7414 22.2827 39.1261 22.8981L26.8464 35.1778L20.8697 29.2011C20.2543 28.5857 19.2566 28.5857 18.6412 29.2011C18.0258 29.8165 18.0258 30.8142 18.6412 31.4295L25.7321 38.5204C26.3475 39.1358 27.3452 39.1358 27.9606 38.5204L41.3545 25.1265Z"
                fill={color} />
        </svg>


    )
}