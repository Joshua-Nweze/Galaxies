import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import {useAuth} from '@/store/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Galaxies - Online Marketplace'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ "../views/CartView"),
    meta: {
      title: 'Cart'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView"),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ "../views/SignupView"),
    meta: {
      title: 'Signup'
    }
  },
  {
    path: '/product/:productType/:productCat/:productName',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ "../views/ProductView"),
    meta: {
      title: 'Product'
    }
  },
  {
    path: '/products/:productType/:productCat',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ "../views/Productsview"),
    meta: {
      title: 'Products'
    }
  },
  {
    path: '/coming-soon', 
    name: 'coming-soon',
    component: () => import(/* webpackChunkName: "coming-soon" */ "../components/ComingSoon"),
    meta: {
      title: 'Coming soon'
    }
  },
  {
    path: '/search/:query', 
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ "../views/SearchView"),
    meta: {
      title: 'Search'
    }
  },
  {
    path: '/dummy', 
    name: 'dummy',
    component: () => import(/* webpackChunkName: "search" */ "../components/Dummy"),
    meta: {
      title: 'Dummy'
    }
  },
  {
    path: '/saved',
    name: 'saved',
    component: () => import(/* webpackChunkName: "search" */ "../views/SavedView"),
    meta: {
      title: 'Saved'
    },
    beforeEnter: (to, from) => {
      let auth = useAuth()
      let { isLoggedIn } = auth
      if(!isLoggedIn) {
        return { name: 'home' }
      }
    },
  },
  {
    path: '/:pathMatch(.*)*', 
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ "../components/404"),
    meta: {
      title: '404 page'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()

})

// router.beforeEach((to, from) => {
// })


export default router
