import { LogoSvg } from "../svg/LogoSvg"

export interface LogoHeaderProps {
    className?: string;

}


export const LogoHeader = ({className }: LogoHeaderProps) => {
     return (
     <header className={`flex justify-center items-center ${className}`}>
        <LogoSvg width={56} height={75} className="mr-2" />
        <h1 className="w-36 h-14 font-bold text-[#E0E2EB] text-5xl">Hedy</h1>
      </header> )
 }