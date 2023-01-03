<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid row position-relative">
        <!-- Collapsible nav -->
        <div class="sideNav" id="sideNav">
            <span class="d-flex justify-content-end"><i class="bi bi-x-lg text-danger" @click="hideNav"></i></span>
            <div v-for="nav in navList" :key="nav.index">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <div class="nav-link dropdown row d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="col-2"><img :src="require(`../assets/imgs/${nav.image}`)" alt="" class="img-fluid nav-img" height="100px"></div>
                            <div class="col-8">{{nav.name}}</div>
                            <div class="col-2"><i class="bi bi-caret-down-fill"></i></div>
                        </div>
                        <ul class="dropdown-menu" >
                            <li v-for="category in nav.category" :key="category.index">
                                <router-link :to="`/products/${nav.name.split(' ').join('-')}/${category.name.split(' ').join('-')}`" class="dropdown-item row d-flex" @click="hideNav()">
                                    <div class="col-12 d-down-item">{{ category.name }}</div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Collapsible nav ends -->
        <div class="col-3 col-lg-3 col-md-3 col-sm-4 order-lg-1 order-1 order-lg-1 d-flex align-items-center">
            <div>
                <span @click="showNav" class="navbar-toggler">
                    <i class="bi bi-list "></i>
                </span>
            </div>
            <router-link class="navbar-brand" to="/" style="z-index: 2">
                <img src="../assets/imgs/logo.png" alt="">
            </router-link>
        </div>

        <div class="col-12 d-flex justify-content-start col-lg-5 col-sm-12 order-lg-2 order-3 order-lg-2">
            <input v-model="searchQuery" @keypress.enter="searchProduct()" id="searchInput" class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search">
            <div class="btn nav-btn text-muted" id="searchBtn" type="submit" @click="searchProduct()">Search</div>
            <!-- <div class="btn nav-btn text-muted" id="searchBtn" type="submit" @click="searchProduct(searchQuery)">Search</div> -->
        </div>

        <div class="col-8 d-flex justify-content-end col-lg-3 col-md-8 col-sm-4 order-2 order-lg-3 buttons">
            <div class="dropdown">
                <button type="button" class="buttons btn nav-btn text-muted d-inline" data-bs-toggle="dropdown"><i class="bi bi-person buttons"></i> <span class="d-none d-sm-inline">Sign up / Login</span> </button>
                <ul class="dropdown-menu">
                    <li><router-link to="/login" class="dropdown-item" href="#">Log In</router-link></li>
                    <li><router-link to="/signup" class="dropdown-item" href="#">Signup</router-link></li>
                </ul>
            </div>

            <div class="position-relative">
                  <router-link to="/cart" class="btn nav-btn text-muted"><i class="bi bi-cart"></i> <span class="d-none d-sm-inline">Cart</span>  
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-counter">
                          {{numOfCartItems}}
                          <span class="visually-hidden">Cart items</span>
                      </span>
                  </router-link>
            </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script setup>
import { computed, onUpdated, reactive, ref } from '@vue/runtime-core'
import { useNavItem } from '@/store/useNavItem'
import { useProducts } from '@/store/products'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const props = defineProps(['cart'])
let navItem = useNavItem()
let router = useRouter()

let {cart} = props
let { navItems } = storeToRefs(navItem)
let productStore = useProducts()

let { products } = storeToRefs(productStore)
let { search, getProducts } = productStore

let productsArr = reactive([])
productsArr.push(products.value.product)

let navList = navItems.value.nav
let searchQuery = ref('')



let numOfCartItems = computed(() => {
    let qty = []

    for (let index = 0; index < cart.length; index++) {
        qty.push(cart[index].qty);
    }

    let reduced = qty.reduce((acc, cur) => acc + cur, 0)

    return reduced
})

function showNav() {
    document.getElementById('sideNav').style.left = 0
}
function hideNav() {
    document.getElementById('sideNav').style.left = '-1550px'
}

function searchProduct() {
    if (searchQuery.value !== "") {
        router.push({ name: 'search', params: { query: searchQuery.value}})
        searchQuery.value = ''
    }
}

</script>

<style scoped>
    .sideNav{
        top: 0;
        right: 0;
        bottom: 0;
        left: -1550px;
        position: fixed;
        background: white;
        z-index: 99;
        height: 100vh;
        overflow-y: scroll;
        transition: ease-in .5s;
    }

    .d-down-item{
        color: #777777;
    }

    nav {
        background: #3d2272;
        color: ghostwhite;
    }   

    .nav-btn{
        border: #3d2272 1px solid;
        background: ghostwhite;
        transition: ease 1s;
    }
    .nav-btn:hover{
        background: #b8a2e3;
    }

    .form-control{
        box-shadow: none;
        border-color: #3d2272;
    }

    .cart-counter{
        background: #7b52cc;
    }

    .dropdown-item:hover{
        background: #b8a2e3;
    }

    .navbar-toggler{
        color: ghostwhite;
        border-color: ghostwhite;
    }

    /* @media only screen and (max-width: 480px) {
        .dropdown-menu{
           float: left;
        }
    } */
    
     @media only screen and (min-width: 481px) and (max-width: 1023px) {
        .buttons{
            display: inline;
        }

        .nav-img{
            height: 40px;
        }
     }
</style>
