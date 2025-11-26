import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLocal } from "../services/LocalService";


export const useSubmitLocation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['submitForm'],
        mutationFn: (data: object) => createLocal(data),
        onSuccess: () => {
           
            queryClient.invalidateQueries({ queryKey: ['locals'] });
            // Alternativa: atualizar o cache manualmente
            // queryClient.setQueryData(['locals'], (old: any) => [...(old || []), newLocal]);
        },
    });
}