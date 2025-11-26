import { useQuery } from "@tanstack/react-query";
import { createGeralService } from "../services/GeralService";

const service = createGeralService('/categories');

export const useCategory = (fields?: { fields: string }) => {
    return useQuery({
        queryKey: ['categories', fields],
        queryFn: () => service.reader(fields && fields.fields),
        staleTime: 1000, // 1 segundo

    })
}