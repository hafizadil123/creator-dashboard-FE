import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Audience from "views/examples/Audience.js";
import Icons from "views/examples/Icons.js";
import ConfirmEmail from "./views/examples/ConfirmEmail";
import EditProfile from "./views/examples/EditProfile";
import UsersTable from "./views/examples/UsersTable";
import ResetPassword from "./views/examples/ResetPassword";
import ConfirmPassword from "./views/examples/ConfirmPassword";
import ResetPasswordSuccess from "./views/examples/ResetPasswordSuccess";
import TiktokTrends from "views/TiktokTrends.js";
import TiktokTrendsTable from 'views/TikTokTrendsTable.js'
import Watchlist from "views/Watchlist.js";
import Analytics from "views/Analytics.js";
import Pricing from "views/examples/Pricing";
import Pay from "views/examples/PopUpPay.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tablet-button text-light",
    component: Index,
    layout: "/admin",
    api: false
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "ni ni-chart-pie-35 text-light",
    component: Analytics,
    layout: "/admin",
    api: false
  },
  {
    path: "/tiktoktrends",
    name: "Trends",
    icon: "ni ni-chart-bar-32 text-light",
    component: TiktokTrendsTable,
    layout: "/admin",
    api: false
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    api: true
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    api: true
  },
  {
    path: "/confirm-email/:id",
    name: "Confirm Email",
    icon: "ni ni-check-bold text-green",
    component: ConfirmEmail,
    layout: "/auth",
    api: true
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    icon: "ni ni-folder-17 text-pink",
    component: ResetPassword,
    layout: "/auth",
    api: true
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    api: true
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    icon: "ni ni-ruler-pencil text-info",
    component: EditProfile,
    layout: "/admin",
    api: true
  },
  {
    path: "/confirm-password/:id",
    name: "Confirm Password",
    icon: "ni ni-folder-17 text-pink",
    component: ConfirmPassword,
    layout: "/auth",
    api: true
  },
  {
    path: "/reset-success",
    name: "Password Reset Confirmed",
    icon: "ni ni-folder-17 text-pink",
    component: ResetPasswordSuccess,
    layout: "/auth",
    api: false
  },
  {
    path: "/pricing",
    name: "Pricing",
    icon: "ni ni-ruler-pencil text-light",
    component: Pricing,
    layout: "/admin",
    api: true
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    icon: "ni ni-glasses-2 text-dar",
    component: Watchlist,
    layout: "/admin",
    api: false
  },
  {
    path: "/pay",
    name: "Pay",
    icon: "ni ni-glasses-2 text-dar",
    component: Pay,
    layout: "/admin",
    api: true
  }

];
export default routes;
