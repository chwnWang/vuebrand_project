import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import SeeShop from '../pages/SeeShop/SeeShop.vue'
import ShopCar from '../pages/ShopCar/ShopCard.vue'
import Personage from '../pages/Personage/Personage.vue'
import Search from '../pages/Search/Search.vue'
import Register from '../pages/Register/Register.vue'
import Login from '../pages/Login/Login.vue'


export default[
    {
        path:'/home',
        component: Home,
        meta:{
            FooterGuide:true
        }
    },
    {
        path:'/category',
        component: Category,
        meta:{
            FooterGuide:true
        }
    },
    {
        path:'/seeShop',
        component: SeeShop,
        meta:{
            FooterGuide:true
        }
    },
    {
        path:'/shopCar',
        component: ShopCar,
        meta:{
            FooterGuide:true
        }
    },
    {
        path:'/personage',
        component: Personage,
        meta:{
            FooterGuide:false
        }
    },
    {
        path:'/search',
        component: Search,
        meta:{
            FooterGuide:false
        }
    },
    {
        path:'/login',
        component: Login,
        meta:{
            FooterGuide:false
        }
    },
    {
        path:'/register',
        component: Register,
        meta:{
            FooterGuide:false
        }
    },
    {
        path:'/',
        redirect: '/home'
    },
   
]