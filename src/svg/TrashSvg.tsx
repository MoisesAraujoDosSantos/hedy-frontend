

export type TrashSvgProps = {
    width?: string | number;
    height?: string | number;
    color?: string;
    className?: string;

};

export const TrashSvg = ({ width = 20, height = 20, color = "#858CA3", className }: TrashSvgProps) => {

    return (

        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5V3.5H19C19.5523 3.5 20 3.94772 20 4.5C20 5.05228 19.5523 5.5 19 5.5H17.9334L17.094 17.672C17.0036 18.9828 15.9138 20 14.5999 20H5.40012C4.08616 20 2.99644 18.9828 2.90604 17.672L2.06659 5.5H1C0.447715 5.5 0 5.05228 0 4.5C0 3.94772 0.447715 3.5 1 3.5H5V2.5C5 1.11929 6.11929 0 7.5 0H12.5C13.8807 0 15 1.11929 15 2.5ZM7 2.5C7 2.22386 7.22386 2 7.5 2H12.5C12.7761 2 13 2.22386 13 2.5V3.5H7V2.5ZM4.07134 5.5L4.9013 17.5344C4.91938 17.7966 5.13732 18 5.40012 18H14.5999C14.8627 18 15.0806 17.7966 15.0987 17.5344L15.9287 5.5H4.07134Z"
                fill={color} />
        </svg>




    )
}


