import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Auth/Login";
import { HumanResources } from "./pages/HumanResources";
import { ListSuppliers, } from "./pages/supplier/ListSuppliers";
import { Stock } from "./pages/Stock";
import { Report } from "./pages/Report";
import { AddSuplier } from "./pages/supplier/AddSuplier";
import { Suppliers } from "./pages/supplier/Suppliers";


export const Directions = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="home" element={<Home />} />
                <Route path="recursos-humanos" element={<HumanResources />} />
                <Route path="estoque" element={<Stock />} />
                <Route path="fornecedores" element={<Suppliers />}>
                    <Route index element={<ListSuppliers />} />
                    <Route path="adicionar-novo" element={<AddSuplier />} />
                </Route>
                <Route path="relatorio" element={<Report />} />
            </Route>
        </Routes>
    )
}