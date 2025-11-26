import { useCategory } from "../../../hooks/useCategory";;
import { Header } from "../../Header"
import { CategoryCard } from "./CategoryCard";

export const ListCategories = () => {
    const { data, isLoading, isError } = useCategory({ "fields": "name,description" });
    const information = data?.data;
    console.log("information",information);
    return (
        <div>
            <Header addPath="/estoque/categoria/adicionar-novo"
             title="Categorias" isLoading={isLoading} 
             information={information} />
             {isError && <p>Erro ao carregar os dados.</p>}
            <CategoryCard information={information} />
        </div>
    )
}