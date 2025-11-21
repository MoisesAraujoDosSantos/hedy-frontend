import type { SupplierType } from "../../types/SupplierType";

export interface OrderProps {
    orderBy: string;
    //depois ver se troco essa tipagem
    content: SupplierType[];
}

// depois arrumar essa função de ordernar
export const Order = ({ orderBy, content }: OrderProps) => {
console.log("entrou no order")

    function ordenate() {
        content.sort((a, b) => {
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


    const returnContent = ordenate();

    return (
        <>
            {returnContent}
            {console.log("chegou aqui cara")}
        </>
    )
}