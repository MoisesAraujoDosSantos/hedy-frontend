import { useQuery } from "@tanstack/react-query";

import { getLocals } from "../services/LocalService";

export const useLocation = (fields?: { fields: string }) => {
    return useQuery({
        queryKey: ['locations', fields],
        queryFn: () => getLocals(fields && fields.fields),
        staleTime: 1000 * 60 * 2, // 2 minutos

    })
}