import { useQuery } from "@tanstack/react-query";
import { getSuppliers } from "../services/SupplierService";

export const useSupplier = (fields?: { fields: string }) => {
    return useQuery({
        queryKey: ['suppliers', fields],
        queryFn: () => getSuppliers(fields && fields.fields),
        // para debug
        staleTime: 1000 * 60 * 2, // 2 minutos
        // refetchOnWindowFocus: false,
        // refetchOnMount: "always",
        // refetchOnReconnect: "always",
    })
    //so pra debug
}