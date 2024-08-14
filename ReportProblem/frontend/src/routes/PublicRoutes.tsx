import { RouteObject } from 'react-router-dom';
import Repairing from "../pages/Repairing";
import En_ExitingForm from "../pages/En_ExitingForm";
import ResigningForm from "../pages/ResigningForm";
import Status from "../pages/Status";

const PublicRoutes: RouteObject = {
    path: "/",
    children: [
        {
            path: "/repairing",
            element: <Repairing />, // แสดงหน้า Repairing โดยไม่ต้องล็อกอิน
        },
        {
            path: "/en-exiting-form",
            element: <En_ExitingForm />, // แสดงหน้า En_ExitingForm โดยไม่ต้องล็อกอิน
        },
        {
            path: "/resigning-form",
            element: <ResigningForm />, // แสดงหน้า ResigningForm โดยไม่ต้องล็อกอิน
        },
        {
            path: "/status",
            element: <Status />, // แสดงหน้า Status โดยไม่ต้องล็อกอิน
        },
    ],
};

export default PublicRoutes;
