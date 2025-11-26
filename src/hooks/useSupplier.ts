import { useQuery } from "@tanstack/react-query";
import { createGeralService } from "../services/GeralService";

const service = createGeralService('/suppliers');

export const useSupplier = (fields?: { fields: string }) => {
    return useQuery({
        queryKey: ['suppliers', fields],
        queryFn: () => service.reader(fields && fields.fields),
        // para debug
        staleTime: 1000 * 60 * 2, // 2 minutos
        // refetchOnWindowFocus: false,
        // refetchOnMount: "always",
        // refetchOnReconnect: "always",
    })
    //so pra debug
}