import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSupplier } from "../services/SupplierService";

export const useSubmitSupplier = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['submitForm'],
        mutationFn: (data: object) => createSupplier(data),
        onSuccess: () => {
           
            queryClient.invalidateQueries({ queryKey: ['suppliers'] });
            // Alternativa: atualizar o cache manualmente
            // queryClient.setQueryData(['suppliers'], (old: any) => [...(old || []), newSupplier]);
        },
    });
}