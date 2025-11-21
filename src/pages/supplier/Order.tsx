import type { SupplierType } from "../../types/SupplierType";

export interface OrderProps {
    orderBy: string;
    //depois ver se troco essa tipagem
    content: SupplierType[];
}


export const Order = ({ orderBy, content }: OrderProps) => {


    return (
        <>
            {content.sort((a, b) => {
                if (a.legal_name !== undefined && b.legal_name !== undefined) {
                    if (orderBy === "down") {
                        if (a.legal_name.toLowerCase() < b.legal_name.toLowerCase()) return -1;
                        if (a.legal_name.toLowerCase() > b.legal_name.toLowerCase()) return 1;
                    }
                    if (orderBy === "up") {
                        if (a.legal_name.toLowerCase() > b.legal_name.toLowerCase()) return -1;
                        if (a.legal_name.toLowerCase() < b.legal_name.toLowerCase()) return 1;
                    }
                }
                return 0;
            })
            }
        </>
    )
}