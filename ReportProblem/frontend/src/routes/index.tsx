/*
import { useRoutes, RouteObject } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import MainRoutes from "./MainRoutes";
function ConfigRoutes() {
    const isLoggedIn = localStorage.getItem("isLogin") === "true";
    let routes: RouteObject[] = [];
    if (isLoggedIn) {
        routes = [AdminRoutes(isLoggedIn), MainRoutes()];
    } else {
        routes = [MainRoutes()];
    }
    return useRoutes(routes);
}
export default ConfigRoutes;
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes'; // นำเข้าการกำหนดเส้นทางที่ถูกต้อง

function ConfigRoutes() {
    return (
        <Router>
            <Routes>
                {PublicRoutes.children!.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Router>
    );
}

export default ConfigRoutes;

