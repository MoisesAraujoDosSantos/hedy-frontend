
export interface ArrowPointingSvgProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}


export const ArrowPointingSvg = ({ width = 20, height = 20, color = "#858CA3", className }: ArrowPointingSvgProps) => {

    return (
        <svg width={width} height={height}  viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0.332833 8.28738C-0.110944 8.73116 -0.110944 9.45066 0.332833 9.89444C0.776611 10.3382 1.49612 10.3382 1.93989 9.89444L7.95455 3.87979L7.95455 17.0455C7.95455 17.673 8.46331 18.1818 9.09091 18.1818C9.71851 18.1818 10.2273 17.673 10.2273 17.0455V3.87979L16.2419 9.89444C16.6857 10.3382 17.4052 10.3382 17.849 9.89444C18.2928 9.45066 18.2928 8.73116 17.849 8.28738L9.89444 0.332834C9.45066 -0.110945 8.73116 -0.110945 8.28738 0.332834L0.332833 8.28738Z" 
            fill={color} />
        </svg>

    )
}