<template>
    <div class="container position-relative">
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-lg-5 col-md-5 col-sm-12">
                <img class="img-fluid" :src="require(`../../assets/imgs/${product.image}`)" alt="">
            </div>
            
            <div class="col-lg-5 col-md-5 col-sm-12 align-item-center mt-3">
                <div><h3>{{ product.name }}</h3></div>
                <div class="amount">₦ {{product.price}}</div>
                <div class="qty mt-3">Quantity <i class="bi bi-dash-circle" @click="decreaseQty"></i> {{qty}} <i class="bi bi-plus-circle" @click="increaseQty"></i></div>
                <div class="desc mt-2" v-if="product.description">{{product.description}}</div>
                <div class="seller-contact mt-3"><button class="btn">Seller contact</button></div>
                <div class="cart-and-fav mt-3"><button class="btn add-to-cart" @click="addToCart(product)">Add to cart</button><span class="add-to-fav" @click="save" id="save"><i class="bi bi-heart"></i></span></div>
            </div>
        </div>

    <div class="d-flex justify-content-end row" v-if="showAlert">
        <div class="col-lg-4 col-md-5 col-sm-10 alert alert-success alert-dismissible fade show" role="alert">
            Product successfully added to cart
        <button type="button" class="btn-close" @click="closeAlert" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>  
    </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps(['product'])
const emit = defineEmits(['addToCart'])

let qty = ref(1)
let product = ref(props.product)
let showAlert = ref(false)



function addToCart(data){
    emit('addToCart', data)
    data.qty = qty.value
    showAlert.value = true
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


// function save (){
//     document.getElementById('save').style.backgroundColor = 'red'
// }
</script>

<style scoped>
    .amount, .qty, .seller-contact, .cart-and-fav{
        font-size: 20px;
    }

    .seller-contact button, .seller-contact button:hover, .add-to-cart, .add-to-cart:hover{
        background: #9676d6;
        color: ghostwhite;
    }

    .add-to-fav{
        margin-left: 10px;
    }

    .alert{
        bottom: 10px;
        position: fixed;
        transition: .5s ease-in;
    }
</style>