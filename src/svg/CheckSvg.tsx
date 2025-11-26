export type CheckSvgProps = {
    width?: string | number;
    height?: string | number;
    color?: string;
    className?: string;

};

export const CheckSvg = ({ width = 17, height = 12, color = "#E0E2EB", className }: CheckSvgProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0441 1.8623C16.4701 1.43627 16.4701 0.745546 16.0441 0.31952C15.6181 -0.106507 14.9274 -0.106507 14.5013 0.31952L6 8.82086L1.8623 4.68316C1.43627 4.25713 0.745546 4.25713 0.31952 4.68316C-0.106507 5.10918 -0.106507 5.79991 0.31952 6.22593L5.22861 11.135C5.65464 11.5611 6.34536 11.5611 6.77139 11.135L16.0441 1.8623Z" fill={color}
            className={className} />
        </svg>




    )
}