import { useQuery } from "@tanstack/react-query";
import { getSuppliers } from "../services/SupplierService";

export const useSupplier = (fields?: { fields: string }) => {
    return useQuery({
        queryKey: ['suppliers', fields],
        queryFn: () => getSuppliers(fields && fields.fields),
        // para debug
        staleTime: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: "always",
        refetchOnReconnect: "always",
    })
    //so pra debug
}