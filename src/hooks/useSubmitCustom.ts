import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGeralService } from "../services/GeralService";

export interface SubmitCustomProps {
key?: string;
path?: string;

}


export const useSubmitCustom = ({key, path}: SubmitCustomProps) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['submitForm'],
        mutationFn: (data: object) => {
            if (!path) throw new Error('useSubmitCustom: path is required');
            const service = createGeralService(path);
            return service.create(data);
        },
        onSuccess: () => {
           
            queryClient.invalidateQueries({ queryKey: [key] });
           
        },
    });
}