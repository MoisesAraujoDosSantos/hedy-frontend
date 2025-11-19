import { QueryClient, useMutation } from "@tanstack/react-query";
import { createSupplier } from "../services/SupplierService";

export const useSubmitSupplier = () => {
const client = new QueryClient();
    return useMutation(
        {
            mutationKey: ['submitForm'],
            mutationFn: (data : object ) => createSupplier(data ),
            onSuccess: (data) => {
                //atualizar o cache com os novos dados
                client.setQueryData(['suppliers'], data);
            }

        }
    
    );
}