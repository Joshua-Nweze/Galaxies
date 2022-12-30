import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/product/:productName',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ "../views/ProductView"),
    meta: {
      title: 'Product'
    }
  },
  {
    path: '/products/:productType/:categoryName', 
    name: 'products',
    component: () => import(/* webpackChunkName: "404" */ "../views/Productsview"),
    meta: {
      title: 'Products'
    }
  },
  {
    path: '/:pathMatch(.*)*', 
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ "../components/404"),
    meta: {
      title: '404 page'
    }
  },
  {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
