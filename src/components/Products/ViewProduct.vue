<template>
    <div class="container position-relative">
         <nav aria-label="breadcrumb" class="mt-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <router-link to="/" class="breadcrumb-item router-crumb">Home</router-link>
                    <li class="breadcrumb-item text-muted">Products</li>
                    <li class="breadcrumb-item text-muted">{{ productType.split('-').join(' ') }}</li>
                    <router-link :to="`/products/${productType}/${productCat}`" class="breadcrumb-item router-crumb router" aria-current="page">{{ productCat.split('-').join(' ') }}</router-link>
                    <li class="breadcrumb-item" aria-current="page">{{ productName.split('-').join(' ') }}</li>
                </ol>
            </nav>
        </nav>

        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-lg-5 col-md-5 col-sm-12">
                <img class="img-fluid" v-if="product.image" :src="require(`../../assets/imgs/${product.image}`)" alt="">
            </div>
            
            <div class="col-lg-5 col-md-5 col-sm-12 align-item-center mt-3">
                <div><h3>{{ product.name }}</h3></div>
                <div class="amount">₦ {{product.price}}</div>
                <div class="qty mt-3">Quantity <i class="bi bi-dash-circle" @click="decreaseQty"></i> {{qty}} <i class="bi bi-plus-circle" @click="increaseQty"></i></div>
                <div class="desc mt-2" v-if="product.description">{{product.description}}</div>
                <div class="seller-contact mt-3"><button class="btn" data-bs-toggle="modal" data-bs-target="#sellerContact">Seller contact</button></div>
                <div class="cart-and-fav mt-3">
                    <button class="btn add-to-cart" @click="addToCart(product)">Add to cart</button>
                    <span class="add-to-fav ml-3" data-bs-toggle="modal" data-bs-target="#saveModal" id="save">
                        <i class="bi bi-heart"></i>
                    </span>
                </div>
            </div>
        </div>

        <!-- Success alert -->
        <div class="row d-flex justify-content-end" v-if="showAlert">
            <div class="col-lg-4 col-md-5 col-sm-8 alert alert-success alert-dismissible fade show" role="alert">
                {{ alertMessage }}
                <button type="button" class="btn-close" @click="closeAlert" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>  
        </div>
        <!-- Success alert ends -->

    <!-- Save Modal -->
        <div class="modal fade" id="saveModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Save product</h1>
            </div>
            <div class="modal-body">
                Add {{ product.name }} to saved items
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn save-btn" @click="save(product)" data-bs-dismiss="modal">Save</button>
            </div>
            </div>
        </div>
        </div>
        <!-- Modal ends -->

        <!-- Sell Product Modal -->
        <div class="modal fade" id="sellerContact" tabindex="-1" aria-labelledby="sellProductLabel" aria-hidden="true">
        <div class=" modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Seller contact</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-center">
                Login or Signup to continue
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <div @click="to('/login')" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Login</div>
                <div @click="to('/signup')" type="button" class="btn main-btn" data-bs-dismiss="modal">Signup</div>
            </div>
            </div>
        </div>
        </div>
        <!-- Modal ends -->
    </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import { useProducts } from '@/store/products'
import { storeToRefs } from 'pinia';
import { useAuth } from '@/store/auth'
import { routeEdit } from '@/composables/routeEdit'
import { onMounted } from '@vue/runtime-core';

const props = defineProps(['product'])
const emit = defineEmits(['addToCart', 'save'])
let router = useRouter()
let route = useRoute()
let productsStore = useProducts()
let { routeRemoveDash } = routeEdit()
let auth = useAuth()

let { products, product } = storeToRefs(productsStore)
let { retainProduct } = productsStore
let { saved } = storeToRefs(auth)
let { addToSaved } = auth

let qty = ref(1)
let showAlert = ref(false)
let alertMessage = ref('')
// let loggedIn = ref(false)
let productName = ref(route.params.productName)
let productType = ref(route.params.productType)
let productCat = ref(route.params.productCat)

function addToCart(data){
    emit('addToCart', data)
    data.qty = qty.value
    showAlert.value = true
    alertMessage.value = "Product successfully added to cart"
}

function closeAlert(){
    showAlert.value = false
}

function decreaseQty() {
    if (qty.value > 1 ) {
        qty.value--
    }
}

function increaseQty() {
    qty.value++
}


function save(product){
    showAlert.value = true
    alertMessage.value = "Product added to saved items"

    addToSaved(product)
}

function to(path) {
    setTimeout(() => {
        router.push(path)
    }, 100)
}

retainProduct(routeRemoveDash(productName))

</script>

<style scoped>
    .amount, .qty, .seller-contact, .cart-and-fav{
        font-size: 20px;
    }

    .qty i:hover{
        cursor: pointer;
    }

    .seller-contact button, .seller-contact button:hover, .add-to-cart, .add-to-cart:hover, .save-btn{
        background: #9676d6;
        color: ghostwhite;
    }

    .add-to-fav{
        margin-left: 10px;
    }

    .add-to-fav:hover{
        cursor: pointer;
    }

    .alert{
        bottom: 10px;
        position: fixed;
        transition: .5s ease-in;
    }

    .router-crumb{
        color: #9676d6;
        text-decoration: none;
    }

    .main-btn{
        background: #3d2272;
        color: ghostwhite;
    }

    @media only screen and (max-width: 480px) {
        .alert{
            width: 300px;
            margin-left: 10px;
        }
    }

    
</style>