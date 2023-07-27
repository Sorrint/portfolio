import { Navigate, RouteObject } from 'react-router-dom';

import MainPage from 'pages/documents/components/mainPage';


const BaseURL = ""

const routes: RouteObject[] = [
    { index: true, element: <Navigate to={`.${BaseURL}/main`} /> },
    {
        path: `${BaseURL}/main`,
        element: <MainPage />,
    },
    { path: '*', element: <Navigate to={`./${BaseURL}/main`} /> }
];
export default routes;
