import { HomeScreen } from "./pages/HomeScreen";
import { ErrorScreen } from "./pages/ErrorScreen";
import { pareseRequestUrl } from "./utils";

import { routes } from "./components/routes";

const router = ()=>{
    const parsedUrl = pareseRequestUrl();
    const buldUrl= (parsedUrl.resource ? `/${parsedUrl.resource}`: '/') +
                    (parsedUrl.id ? `/:id`: '' ) +
                    (parsedUrl.verb? `/${parsedUrl.verb}`: '');
    const root = routes[buldUrl] ? routes[buldUrl] : routes['/error'];

}