import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");




const route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoutes> <Checkout></Checkout></PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element:<PrivateRoutes> <Orders></Orders></PrivateRoutes>
            }
        ]
    }
]);


export default route;