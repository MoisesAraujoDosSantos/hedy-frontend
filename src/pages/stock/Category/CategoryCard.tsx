import { EditSvg } from "../../../svg/EditSvg"
import { TrashSvg } from "../../../svg/TrashSvg"
import { LittleCard } from "../../../components/LittleCard"
import type { CategoryType } from "../../../types/CategoryType"

export const CategoryCard = ({ information }: { information: CategoryType[] }) => {
    //aqui provavelmente é levemente diferente, adaptar depois
    // const localsTypes = [{ value : "warehouse", label: "amoxarifado"},{value: "office", label: "escritorio"}];
    
    // function translateTypes(typeValue: string | undefined) {
    //     const type = localsTypes.find(type => type.value === typeValue);
    //     return type ? type.label : "desconhecido";
    // }
    
    return (
        <>

            <div className="flex flex-col gap-4 bg-[#141A29] mt-10 ml-10 border-[#20273C] border-2 rounded-[10px] w-[1520px] h-[872px]">
                <p className="mt-5 ml-5 font-semibold text-[#E0E2EB] text-2xl">Listagem </p>
                <header className="items-center grid grid-cols-7 bg-[#20273C] w-full h-[50px] text-[#858CA3]">
                        <p className="ml-5">Nome</p>
                        <p className="ml-5">Tipo</p>
                        <p className="ml-5">Categoria/Subcategoria</p>
                        <p className="ml-5">Descrição</p>
                        <p className="ml-5">Status</p>
                        <p className="ml-5">Data de Cadastro</p>
                        <span className="mr-14 ml-5">operações</span>
                    

                </header>
                {information && (information.map((category: CategoryType) => (
                    

                    <div key={category.id} className="grid grid-cols-7 ml-5 w-full text-amber-50">
                        <p className="w-[230px] h-10">{category.name}</p>
                        <p className="w-[230px] h-10">{category.type}</p>
                        <p className="w-[230px] h-10">{category.father_category}</p>
                        <p className="w-[230px] h-10">{category.description}</p>
                        <p className="w-[230px] h-10"><LittleCard isActive={category.active}  text={category.active ? "ativo" : "inativo"} /></p>
                        <p className="w-[230px] h-10">{category.registration_date}</p>
                        <div className="flex gap-5 w-fit"><EditSvg /> <TrashSvg /></div>
                        <span className="col-span-6 border-[#20273C] border-b w-[97%]"></span>
                    </div>
                )))}

            </div>
        </>
    )
}