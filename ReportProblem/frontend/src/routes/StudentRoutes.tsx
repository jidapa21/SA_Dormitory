import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../components/third-patry/Loadable";
import FullLayout from "../layout/FullLayout";
const MainPages = Loadable(lazy(() => import("../pages/authentication/LoginStudent")));
const Homepages = Loadable(lazy(() => import("../pages/Home")));
const Payment = Loadable(lazy(() => import("../pages/PaymentConfirmation")));
const DormBooking = Loadable(lazy(() => import("../pages/dorm")));
const List = Loadable(lazy(() => import("../pages/list")));
const Repair = Loadable(lazy(() => import("../pages/Repairing")));
const DelayedPayment = Loadable(lazy(() => import("../pages/DelayedPaymentForm")));
const EnExiting = Loadable(lazy(() => import("../pages/En_ExitingForm")));
const Resigning = Loadable(lazy(() => import("../pages/ResigningForm")));
const Status = Loadable(lazy(() => import("../pages/Status")));
const Personal = Loadable(lazy(() => import("../pages/personal")));
const PersonalCreate = Loadable(lazy(() => import("../pages/personal/create")));

const StudentRoutes = (isLoggedInStudent : boolean): RouteObject => {
  return {
    path: "/",
    element: isLoggedInStudent ? <FullLayout /> : <MainPages />,
    children: [
      {
        path: "/",
        element: <Homepages />,
      },
      {
        path: "/personal",
        children: [
          {
            path: "/personal",
            element: <Personal />,
          },
          {
            path: "/personal/create",
            element: <PersonalCreate />,
          },
        ],
      },
      {
        path: "/payment",
        children: [
          {
            path: "/payment",
            element: <Payment />,
          },
        ],
      },
      {
        path: "/dorm-booking",
        children: [
          {
            path: "/dorm-booking",
            element: <DormBooking />,
          },
        ],
      },
      {
        path: "/list",
        children: [
          {
            path: "/list",
            element: <List />,
          },
        ],
      },
      {
        path: "/repair",
        children: [
          {
            path: "/repair",
            element: <Repair />,
          },
        ],
      },
      {
        path: "/form",
        children: [
          {
            path: "/form/DelayedPayment",
            element: <DelayedPayment />,
          },
          {
            path: "/form/EnExiting",
            element: <EnExiting />,
          },
          {
            path: "/form/Resigning",
            element: <Resigning />,
          },
        ],
      },
      {
        path: "/status",
        children: [
          {
            path: "/status",
            element: <Status />,
          },
        ],
      },
    ],
  };
};
export default StudentRoutes;