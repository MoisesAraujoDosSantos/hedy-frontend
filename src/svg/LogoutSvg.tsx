
export interface LogoutSvgProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}


export const LogoutSvg = ({ width = 20, height = 20, color = "#FD5640", className }: LogoutSvgProps) => {

    return (
        <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 3.40909V14.7727C0 16.6555 1.52772 18.1818 3.41227 18.1818H6.82453C7.45271 18.1818 7.96196 17.6731 7.96196 17.0455L7.96196 10.2273L14.3067 10.2273L12.2742 12.2665C11.831 12.7112 11.8325 13.4307 12.2777 13.8735C12.7228 14.3164 13.443 14.3148 13.8862 13.8701L17.8504 9.89272C18.2923 9.44933 18.2923 8.73245 17.8504 8.28907L13.8862 4.31192C13.4429 3.86721 12.7228 3.86569 12.2777 4.30854C11.8325 4.75138 11.831 5.47089 12.2743 5.91559L14.3066 7.95456L7.96196 7.95461V1.13636C7.96196 0.508767 7.45271 0 6.82453 0H3.41227C1.52772 0 0 1.5263 0 3.40909Z"
                fill={color} />
        </svg>

    )
}