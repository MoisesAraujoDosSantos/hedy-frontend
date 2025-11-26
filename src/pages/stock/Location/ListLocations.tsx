import { useLocation } from "../../../hooks/useLocation";
import { Header } from "../../Header"
import { LocationCard } from "./LocationCard"

export const ListLocations = () => {
    const { data, isLoading, isError } = useLocation({ "fields": "name,id_responsible,type,active,registration_date,id" });
    const information = data?.data;
    console.log("information",information);
    return (
        <div>
            <Header addPath="/estoque/localidade/adicionar-novo"
             title="Locais de Estoque" isLoading={isLoading} 
             information={information} />
             {isError && <p>Erro ao carregar os dados.</p>}
            <LocationCard information={information} />
        </div>
    )
}