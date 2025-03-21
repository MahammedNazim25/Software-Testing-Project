import { createBrowserRouter } from "react-router-dom";
import Main from './Main';
import Home from './Pages/Home/Home/Home';
import Login from './Login';
import SingUp from './SignUp';
import CreatePost from './Pages/Home/CreatePost/CreatePost';
import ViewPost from './Pages/Home/ViewPost/ViewPost';
import PrivateRoute from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <PrivateRoute><Home /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SingUp />
            },
            {
                path: "/create-post",
                element: <PrivateRoute><CreatePost /></PrivateRoute>
            },
            {
                path: "/view-post",
                element: <PrivateRoute><ViewPost /></PrivateRoute>
            },
            {
                path: "*",
                element: <div>Not Found</div>
            }
        ]
    }
]);

export default router;