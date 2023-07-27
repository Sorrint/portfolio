import { useRoutes } from 'react-router-dom';

import routes from './routes';
import './global.css'

function App () {
    const elements = useRoutes(routes);
    return <>{elements}</>;
}

export default App;
