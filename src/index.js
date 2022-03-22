import { pareseRequestUrl } from "./utils";
import { SideBar } from './components/Sidebar/SideBar'
import { Header } from './components/Header/Header'

import { routes } from "./components/routes";

const router = ()=>{
    const parsedUrl = pareseRequestUrl();
    const buldUrl= (parsedUrl.resource ? `/${parsedUrl.resource}`: '/') +
                    (parsedUrl.id ? `/:id`: '' ) +
                    (parsedUrl.verb? `/${parsedUrl.verb}`: '');
    const root = routes[buldUrl] ? routes[buldUrl] : routes['/error'];

    const sideBar= document.querySelector('.sidebar_menue')
    const content = document.querySelector('.header_container')

            sideBar.innerHTML = SideBar.render();
            SideBar.afterRender();

            content.innerHTML= Header.render()
            content.afterRender

}

window.addEventListener('load', router);
window.addEventListener('hashchange',router);