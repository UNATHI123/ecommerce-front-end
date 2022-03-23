import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Contact from '../components/Contact'
import  Admin from '../components/Admin'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: ' Products',
    component:Products
  },

  {
    path: '/cart',
    name: ' Cart',
    component:Cart

  },
  {
    path: '/login',
    name: 'Login',
    component:Login

  },
  {
    path: '/register',
    name: 'Register',
    component:Register

  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile

  },
  {
    path: '/contact',
    name: 'contact',
    component:Contact

  },
  {
    path: '/admin',
    name: 'admin',
    component:Admin

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   const publicPages = ['/','/products', '/register', '/login','/profile','Contact'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   // trying to access a restricted page + not logged in
//   // redirect to login page


//   // if (to.path == '/cart' && !loggedIn) next({ name: 'Register' })
//   // else next()

// if (to.path == '/admin' && !loggedIn) next({ name: 'Register' })

//   // else next()

//   // if (to.path == '/profile' && !loggedIn) next({ name: 'Register' })
//   // else next()

//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });


export default router
