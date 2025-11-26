import { EditSvg } from "../../../svg/EditSvg"
import { TrashSvg } from "../../../svg/TrashSvg"
import type { LocationType } from "../../../types/LocationType"

export const LocationCard = ({ information }: { information: LocationType[] }) => {
    return (
        <>

            <div className="flex flex-col gap-4 bg-[#141A29] mt-10 ml-10 border-[#20273C] border-2 rounded-[10px] w-[1520px] h-[872px]">
                <p className="mt-5 ml-5 font-semibold text-[#E0E2EB] text-2xl">Listagem </p>
                <header className="items-center grid grid-cols-7 bg-[#20273C] w-full h-[50px] text-[#858CA3]">
                        <p className="ml-5">id</p>
                        <p className="ml-5">Nome</p>
                        <p className="ml-5">Responsável</p>
                        <p className="ml-5">Tipo</p>
                        <p className="ml-5">Status</p>
                        <p className="ml-5">Data de Cadastro</p>
                        <span className="mr-14 ml-5">operações</span>
                    

                </header>
                {information && (information.map((location: LocationType) => (

                    <div key={location.id} className="grid grid-cols-7 ml-5 w-full text-amber-50">
                        <p className="w-[230px] h-10">{location.id}</p>
                        <p className="w-[230px] h-10">{location.name}</p>
                        <p className="w-[230px] h-10">{location.responsible_person}</p>
                        <p className="w-[230px] h-10">{location.type}</p>
                        <p className="w-[230px] h-10">{location.active}</p>
                        <p className="w-[230px] h-10">{location.registration_date}</p>
                        <div className="flex gap-5 w-fit"><EditSvg /> <TrashSvg /></div>
                        <span className="col-span-6 border-[#20273C] border-b w-[97%]"></span>
                    </div>
                )))}

            </div>
        </>
    )
}