export interface LittleCardProps {
 text: string;
 isActive?: boolean;   
}

export const LittleCard = ({ text, isActive }: LittleCardProps) => {
 
 const active = "bg-[#1D310C] pl-[12px] pr-[12px] pb-[8px] pt-[8px] text-white w-[69px] h-[40px] flex justify-center items-center rounded-[10px]";
 const inactive = "bg-[#3C2825] pl-[12px] pr-[12px] pb-[8px] pt-[8px] text-white w-[69px] h-[40px] flex justify-center items-center rounded-[10px]";
    return (
        <p className={`${isActive? active : inactive}`}>
            {text}
        </p>
    )
}