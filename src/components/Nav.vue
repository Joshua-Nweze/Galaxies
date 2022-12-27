<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid row position-relative">
        <!-- Collapsible nav -->
        <div class="sideNav" id="a">
            <span class="d-flex justify-content-end"><i class="bi bi-x-lg text-danger" @click="hideNav"></i></span>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <div class="nav-link dropdown row d-flex" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="col-2">img</div>
                            <div class="col-8">Dropdown</div>
                            <div class="col-2"><i class="bi bi-caret-down-fill"></i></div>
                        </div>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item row d-flex" href="#">
                                    <div class="col-2">img</div>
                                    <div class="col-10">Action</div>
                                </a>
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
           <router-link class="navbar-brand" to="/">
            <img src="../assets/imgs/logo.png" alt="">
        </router-link>
        </div>

        <div class="col-12 d-flex justify-content-start col-lg-5 col-sm-12 order-lg-2 order-3 order-lg-2">
            <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search">
            <button class="btn nav-btn text-muted" type="submit">Search</button>
        </div>

        <div class="col-8 d-flex justify-content-end col-lg-3 col-md-8 col-sm-6 order-2 order-lg-3 buttons">
            <div class="dropdown">
                <button type="button" class="buttons btn nav-btn text-muted d-inline" data-bs-toggle="dropdown"><i class="bi bi-person buttons"></i> <span class="d-none d-sm-inline">Sign up / Login</span> </button>
                <ul class="dropdown-menu">
                    <li><router-link to="/login" class="dropdown-item" href="#">Log In</router-link></li>
                    <li><router-link to="/signup" class="dropdown-item" href="#">Create an account</router-link></li>
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
import { computed, onUpdated, ref } from '@vue/runtime-core'

const props = defineProps(['cart'])

let {cart} = props

let numOfCartItems = computed(() => {
    let qty = []

    for (let index = 0; index < cart.length; index++) {
        qty.push(cart[index].qty);
    }

    let reduced = qty.reduce((acc, cur) => acc + cur, 0)

    return reduced
})

function showNav() {
    document.getElementById('a').style.left = 0
}
function hideNav() {
    document.getElementById('a').style.left = '-10000px'
}

</script>

<style scoped>
    .sideNav{
        top: 0;
        right: 0;
        bottom: 0;
        left: -1000px;
        position: fixed;
        background: white;
        z-index: 99;
        height: 100vh;
        overflow-y: scroll;
        transition: ease-in .5s;
    }

    .dropdown-menu li{
        border-bottom: #7b52cc 1px solid;
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
     }
</style>
