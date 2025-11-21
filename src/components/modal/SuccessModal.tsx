import { useNavigate } from "react-router-dom";
import { SuccessSvg } from "../../svg/SuccessSvg";
import { NormalButton } from "../Buttons/NormalButton";

export interface SuccessModalProps {
    
    isOpen?: boolean;
    onClose?: () => void;
    message: string;
    redirectPath: string
}

export const SuccessModal = ({isOpen, onClose, message, redirectPath }: SuccessModalProps) => {

const navigate = useNavigate();

if(!isOpen)  return null

    return (
        <div className="top-0 right-0 bottom-0 left-0 z-20 fixed flex justify-center items-center bg-[#0F1524]/30 text-white"> {/* backdrop */}
            <div className="flex flex-col justify-center items-center bg-[#141A29] w-[35.4%] h-[38.8%]"> {/* modal */}
            <SuccessSvg className="mt-[55px]"/>
            <h1 className="mt-8">Concluído</h1>
            <div className="mt-3 mb-[55px]">{message}</div>
            <NormalButton colors="modalStyle" border="modalStyle" className="mr-[30px] ml-[30px] w-[90%]" 
            onClick={() => ( onClose?.(),navigate(redirectPath) )}>fechar</NormalButton> 
            </div>
        </div>
    )
}

