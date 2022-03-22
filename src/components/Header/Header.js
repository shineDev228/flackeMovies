import css from './header.css'

export const Header  = {
    afterRender : () =>{},
    render : ()=>{
        return`
        <header>
            <div class="container">
                <div class="header_wrapper">
                    <div class="header_logo">
                        <H1>flackMovie.</H1>
                    </div>
                    <div class="header_nav">
                        <nav class="header_nav_list">
                            <ul class="header_nav_links">
                                <li class="header_nav_link"> 
                                    <a href="">Movies</a>
                                </li>
                                <li class="header_nav_link"><a href="">Series</a></li>
                                <li class="header_nav_link"><a href="">Up comming</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header_search_container">
                        <div class="header_search">
                            <input type="text" name="" id="search" name="search" placeholder="Search...">
                            <i class="fa-solid fa-magnifying-glass icon_search"></i>
                        </div>
                        <i class="fa-solid fa-bell icon "></i>
                    </div>
                </div>
            </div>
    </header>
        `
    }
}