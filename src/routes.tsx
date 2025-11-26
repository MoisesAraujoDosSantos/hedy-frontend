import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Auth/Login";
import { HumanResources } from "./pages/HumanResources";
import { ListSuppliers, } from "./pages/supplier/ListSuppliers";
import { Stock } from "./pages/stock/Stock";
import { Report } from "./pages/Report";
import { AddSuplier } from "./pages/supplier/AddSuplier";
import { Suppliers } from "./pages/supplier/Suppliers";
import { ListLocations } from "./pages/stock/Location/ListLocations";
import { Movimentation } from "./pages/stock/Movimentation";
import { Category } from "./pages/stock/Category/Category";
import { Actives } from "./pages/stock/Actives";
import { AddLocation } from "./pages/stock/Location/AddLocation";
import { Location } from "./pages/stock/Location/Location";
import { ListCategories } from "./pages/stock/Category/ListCategories";


export const Directions = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="home" element={<Home />} />
                <Route path="recursos-humanos" element={<HumanResources />} />
                <Route path="estoque" element={<Stock />}>
                    <Route index element={<Stock />} />
                    <Route path="localidade" element={<Location />} >
                        <Route index element={<ListLocations />} />
                        <Route path="adicionar-novo" element={<AddLocation />} />
                    </Route>
                    <Route path="ativos" element={<Actives />} />
                    <Route path="categoria-Subcategoria" element={<Category />}>
                        <Route index element={<ListCategories />} />
                    
                    </Route>
                    <Route path="movimentacao" element={<Movimentation />} />
                </Route>
                <Route path="fornecedores" element={<Suppliers />}>
                    <Route index element={<ListSuppliers />} />
                    <Route path="adicionar-novo" element={<AddSuplier />} />
                </Route>
                <Route path="relatorio" element={<Report />} />
            </Route>
        </Routes>
    )
}