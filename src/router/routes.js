import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import SeeShop from '../pages/SeeShop/SeeShop.vue'
import ShopCar from '../pages/ShopCar/ShopCard.vue'
import Personage from '../pages/Personage/Personage.vue'



export default[
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/seeShop',
        component: SeeShop
    },
    {
        path:'/shopCar',
        component: ShopCar
    },
    {
        path:'/personage',
        component: Personage
    },
    {
        path:'/',
        redirect: '/home'
    },
   
]