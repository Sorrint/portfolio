import { Navigate, RouteObject } from 'react-router-dom';

import MainPage from 'pages/documents/components/mainPage';

const routes: RouteObject[] = [
    { index: true, element: <MainPage /> },
    { path: '*', element: <Navigate to={`/`} /> }
];
export default routes;
