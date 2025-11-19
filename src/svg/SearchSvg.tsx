
export interface SearchSvgProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}


export const SearchSvg = ({ width = 20, height = 20, color = "#E0E2EB", className }: SearchSvgProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5107 13.7964C11.195 14.8348 9.53352 15.4545 7.72727 15.4545C3.45962 15.4545 0 11.9949 0 7.72727C0 3.45962 3.45962 0 7.72727 0C11.9949 0 15.4545 3.45962 15.4545 7.72727C15.4545 9.53352 14.8348 11.195 13.7964 12.5107L17.9156 16.6299C18.2706 16.9849 18.2706 17.5605 17.9156 17.9156C17.5605 18.2706 16.9849 18.2706 16.6299 17.9156L12.5107 13.7964ZM13.6364 7.72727C13.6364 10.9908 10.9908 13.6364 7.72727 13.6364C4.46377 13.6364 1.81818 10.9908 1.81818 7.72727C1.81818 4.46377 4.46377 1.81818 7.72727 1.81818C10.9908 1.81818 13.6364 4.46377 13.6364 7.72727Z"
                fill={color} className={className} />
        </svg>

    )
}