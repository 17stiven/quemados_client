//import Admin from "./pages/Admin";
import Home from "./pages/home";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import GeneralLayout from "./pages/generalLayout"

const routesAdmin=[
   
   // {path: "/admin", layout:GeneralLayout, component:Admin},
    {path: "/admin/home", layout:GeneralLayout, component:Home},
    {path: "/admin/contact", layout:GeneralLayout, component:Contact},

];

const routesGeneral=[
    {path: "", layout:GeneralLayout, component:NotFound},
];

const projectRoutes=[
    ...routesGeneral, ...routesAdmin
];
export default projectRoutes;