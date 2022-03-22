import css from './sidebar.css'

export const SideBar = {
    afterRender: ()=>{
        const sideBar= document.querySelector('.sidebar_menue');
        const toogable = document.querySelectorAll('.toogable');


        document.querySelector('.toogle_menu').addEventListener('click',()=>{
            sideBar.classList.toggle('close')
        })

        toogable.forEach(el =>{
            el.addEventListener('click',() =>{
                const isShowing = document.querySelector('.toogable.show');
                isShowing && (isShowing != el) ? isShowing.classList.remove('show') : '';
                el.classList.toggle('show');
            })
        })
    },
    render : ()=>{
        return`
            <div>
                <div class="toogle_menu">
                    <i class="fa-solid fa-bars icon"></i>
                </div>
                <div class="nav_container">
                    <nav class="side_navlinks">
                        <ul class="side_navlinks_list">
                            <li class="side_navlink">
                                <a href="#">
                                    <i class="fa-solid fa-house icon"></i>
                                    <span class="link_label">Home</span>
                                </a>
                                <!-- <span class="tootip">Home</span> -->
                            </li>
                            <li class="side_navlink toogable">
                                <a href="#">
                                    <i class="fa-solid fa-film icon"></i>
                                    <span class="link_label">Movies</span>
                                    <i class="fa-solid fa-chevron-down icon arrow_down"></i>
                                </a>
                                <ul class="sub_menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">commedie</a></li>
                                    <li><a href="#">Autre</a></li>
                                </ul>

                                <!-- <span class="tootip">Home</span> -->
                            </li>
                            <li class="side_navlink toogable" >
                                <a href="#">
                                    <i class="fa-solid fa-video icon"></i>
                                    <span class="link_label">Series</span>
                                    <i class="fa-solid fa-chevron-down icon arrow_down"></i>
                                </a>
                                
                                <ul class="sub_menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">commedie</a></li>
                                    <li><a href="#">Autre</a></li>
                                </ul>
                                <!-- <span class="tootip">Home</span> -->
                            </li>
                            <li class="side_navlink">
                                <a href="#">
                                    <i class="fa-solid fa-house icon"></i>
                                    <span class="link_label">Most Populars</span>
                                </a>
                                <!-- <span class="tootip">Home</span> -->
                            </li>
                            <li class="side_navlink">
                                <a href="#">
                                <i class="fa-solid fa-heart icon"></i>
                                    <span class="link_label">My Favorite</span>
                                </a>
                                <!-- <span class="tootip">Home</span> -->
                            </li>
                            <li class="side_navlink">
                                <a href="#">
                                    <i class="fa-solid fa-people-group icon"></i>
                                    <span class="link_label">Actors</span>
                                </a>
                                <!-- <span class="tootip">Home</span> -->
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="profile_container">
                    <ul>
                        <li class="profile">
                            <a href="#">
                                <img class="profile_img" src='./assets/images/pp.jpg' alt=''/>
                                <div class="profile_desc">
                                    <h2>Dadze Kossi</h2>
                                    <h3>web designer</h3>
                                </div>
                            </a>
                            <i class="fa-solid fa-arrow-right-from-bracket icon logout"></i>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
}