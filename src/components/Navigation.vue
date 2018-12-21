<template>
     <div>
         <div class="wrapper">
             <nav>
                 <ul class="menu">
                     <!-- <li 
                        v-for="routes in links"
                        v-bind:key="routes.id"
                        :to="`${routes.page}`">
                        <a v-bind:href="`${routes.page}`">{{routes.text}}</a>
                     </li> -->
                     <!-- <li>
                        <router-link tag="a" to="/Home" >Hem</router-link>      
                     </li>
                     <li>
                         <router-link tag="a" to="/Events" >Events</router-link>      
                         <div class="submeny">
                             <ul>
                                 <a href="#"> yay </a>
                             </ul>
                             <ul>
                                 <a href="#"> yay2s </a>
                             </ul>
                         </div>
                     </li>
                     <li>
                        <router-link tag="a" to="/About">About</router-link>      
                     </li>
                     <li>
                        <router-link tag="a" to="/Contact">Contact</router-link>      
                     </li> -->
                    <nav id="main-nav">
                        <ul>
                            <li>
                                 <router-link tag="a" to="/Home" >Hem</router-link>  
                            </li>
                            <li>
                                <router-link tag="a" to="/Events" >Events <span class="arrow"></span></router-link>   
                                <ul class="submenu">
                                    <li>
                                         <router-link tag="a" to="/Events/Provningar" >Provningar</router-link>   
                                    </li>
                                    <li>
                                          <router-link tag="a" to="/Events/Buteljeringar" >Buteljeringar</router-link>   
                                    </li>
                                     <li>
                                          <router-link tag="a" to="/Events/Resor">WhiskeyResor</router-link>   
                                    </li>
                                </ul>
                            </li>
                            <li>
                                 <router-link tag="a" to="/About">About</router-link>  
                            </li>
                            <li>
                                 <router-link tag="a" to="/Contact">Contact</router-link>  
                            </li>
                        </ul>
                    </nav>
                     <!-- <li> -->
                 </ul>
             </nav>
         </div>
         
    </div> 
    
</template>

 <script> 
    export default {
        // name: 'Navigation',
        // data() {
        //     return{
        //         links: [
        //             {
        //                 id: 0,
        //                 text: 'Hem',
        //                 page: '/Home'
        //             },
        //             {
        //                 id: 1,
        //                 text: 'Events',
        //                 page: '/Events'
        //             },
        //             {
        //                 id: 2,
        //                 text: 'Om oss',
        //                 page: '/About'
        //             },
        //             {
        //                 id: 3,
        //                 text: 'Kontakta Oss',
        //                 page: '/Contact'
        //             },
        //         ]
        //     }
        // }
    } 
 </script>

<style scoped lang="less">

*{
    margin: 0;
    padding: 0;
    box-sizing:  border-box;
}

@media screen and (min-width: 768px){

    

#main-nav a{
    color: white;
    background: #da9a00;
    display: block;
    Height: 64px;
    font-family: lato;
    font-weight: bold;
    display: flex;
    align-items:center;
    justify-content: center;
    text-decoration: none;
    transition: background 0.4s;
}

#main-nav a:hover{
    background: gray;
}

#main-nav ul{
    list-style: none;
    display: flex;
}

#main-nav li {
    width: 100%;
    text-align: center;
    position: relative;
}
#main-nav li:hover .submenu > li {
    display: block;
    top: 0px;
}

.submenu li{
    display: none;
    position: absolute;
    top: 0px;
}

.submenu{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%
}

.arrow{
    margin-left: 8px;
    color: #eee;
    font-size: 12px;
}
}
// *{
//     font-family: Arial, Helvetica, sans-serif;
//     margin: 0;
// }
// .wrapper{
//     width: 100%;
//     // max-width: 1010px;
//     margin: 0 auto;
// }

// nav {
//     background: #da9a00;
// }
// .menu{
//     list-style-type: none;
//     padding: 0; 
// }
// nav a {
//     text-decoration: none;
//     text-align: center;
//     color:#fff;
//     display: block;
//     padding: 10px;
//     cursor: pointer;
// }
// nav a:hover{
//     text-decoration: none;
//     background-color: #555;
//     color: #fff;;
// }
// a {
//     color: #fff;;
//     }

// .submeny{
//     font-family: 'Times New Roman', Times, serif;
//     color: aqua;
// }

// @media screen and (min-width: 768px){

//     .menu {
//         display: flex;
//         justify-content: flex-start;
//     }

   
// }
</style> 



