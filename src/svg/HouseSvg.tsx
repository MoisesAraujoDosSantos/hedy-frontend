export type HouseSvgProps = {
    width?: string | number;
    height?: string | number;
    color?: string;
    className?: string;

};

export const HouseSvg = ({ width = 22, height = 22, color = "#6B8AFA", className }: HouseSvgProps) => {


    return (
        <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 7.34146V17.9607C0 19.087 0.895431 20 2 20H18C19.1046 20 20 19.087 20 17.9607V7.34146C20 6.65121 19.6576 6.00781 19.09 5.63163L11.09 0.329461C10.4272 -0.10982 9.57282 -0.109821 8.91002 0.329461L0.910024 5.63163C0.342438 6.00781 0 6.65121 0 7.34146ZM12.5 16.9411V13.3723C12.5 12.5276 11.8284 11.8428 11 11.8428H9C8.17157 11.8428 7.5 12.5276 7.5 13.3723V16.9411C7.5 17.5042 7.94772 17.9607 8.5 17.9607H11.5C12.0523 17.9607 12.5 17.5042 12.5 16.9411Z"
                fill={color} />
        </svg>
    )
}