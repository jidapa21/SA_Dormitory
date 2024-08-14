import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../components/third-patry/Loadable";
import FullLayout from "../layout/FullLayout";

//const MainPages = Loadable(lazy(() => import("../pages/authentication/Login")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Repairing = Loadable(lazy(() => import("../pages/Repairing")));
const En_ExitingForm = Loadable(lazy(() => import("../pages/En_ExitingForm")));
const ResigningForm = Loadable(lazy(() => import("../pages/ResigningForm")));
const Status = Loadable(lazy(() => import("../pages/Status")));

const AdminRoutes = (isLoggedIn: boolean): RouteObject => {
    return {
        path: "/",
        element: isLoggedIn ? <FullLayout /> : <Home />, // ใช้ FullLayout ถ้า Logged In, ใช้ Home ถ้าไม่ Logged In
        children: [
            {
                path: "/",
                element: <Home />, // แสดง Home เมื่อเส้นทางหลัก ("/") ถูกเข้าถึง
            },
            {
                path: "/Repairing",
                element: <Repairing />, // แสดง Repairing เมื่อเส้นทาง ("/repairing") ถูกเข้าถึง
            },
            {
                path: "/En_ExitingForm",
                element: <En_ExitingForm />, // แสดง En_ExitingForm เมื่อเส้นทาง ("/en-exiting-form") ถูกเข้าถึง
            },
            {
                path: "/ResigningForm",
                element: <ResigningForm />, // แสดง ResigningForm เมื่อเส้นทาง ("/resigning-form") ถูกเข้าถึง
            },
            {
                path: "/Status",
                element: <Status />, // แสดง Status เมื่อเส้นทาง ("/status") ถูกเข้าถึง
            },
        ],
    };
};
export default AdminRoutes;