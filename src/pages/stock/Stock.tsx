import { Outlet } from "react-router-dom"

export const Stock = () => {
    return (
        <div className="text-white">
            Página de Estoque
            <Outlet />
        </div>
    )
}