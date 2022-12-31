<template>
    <div class="container">
        <div class="row pb-5">
            <div class="col-lg-8 col-md-8 col-sm-12 products">
                <div v-if="emptyCart" class="empty-cart text-center">
                    <i class="bi bi-cart-x"></i> <br>
                    <span class="fs-3">Sorry, there is no item in your cart</span>
                </div>

                <div v-if="!emptyCart">
                    <div class="row product mt-4" v-for="(item, index) in cart" :key="item.index">
                        <div class="col-2">
                            <img v-if="item.image" :src="require(`../../assets/imgs/${item.image}`)" alt="" class="img-fluid">
                        </div>
                        <div class="col-6">
                            <span>{{item.name}}</span> <br>
                            <span class="text-danger del" @click="removeFromCart(index)"><i class="bi bi-trash"></i> Remove</span>
                        </div>
                        <div class="col-4 text-end">
                            <span>₦ {{item.price * item.qty}}</span> <br>
                            <!-- <span><i class="bi bi-dash-circle"></i> 1 <i class="bi bi-plus-circle"></i></span> -->
                            <span>Quantity: {{item.qty}}</span>
                        </div>
                    </div>
                    
                </div>

                <div class="mt-5 mb-5">
                    <Saved />
                </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 text-center pt-3">
                <div class=" row justify-content-center">
                    <div class="col-10">
                        <div class="price d-flex fw-bolder">
                            <div class="col-6">Total</div>
                            <div class="col-6">₦ {{total}}</div>
                        </div>
                    </div>
                    <div class="col-10 text-center">
                        <div class="checkout d-flex justify-content-center fw-bolder">
                            Checkout (₦ {{total}})
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { computed, onUpdated } from '@vue/runtime-core'
import Saved from './Saved.vue'

const props = defineProps(['cart'])
const emit = defineEmits(['removeFromCart'])

const {cart}  = props

let emptyCart = ref()
let numOfCartItems = ref(0)

console.log(cart);

let total = computed(() => {
    return cart.reduce((subTotal, item) => subTotal + item.qty * item.price, 0)
})

console.log(total.value);

function removeFromCart(index) {
    emit('removeFromCart', index)
}

if (cart.length == 0) {
    emptyCart.value = true
} else {
    emptyCart.value = false

    // total.value = computed(() => {
    //     return cart.reduce((item) => item.price)
    // })
}

onUpdated(() => {
    if (cart.length == 0) {
    emptyCart.value = true
    } else {
        emptyCart.value = false

        // total.value = computed(() => {
        //     return cart.reduce((item) => item.price)
        // })
    }
})

</script>

<style scoped>
    .empty-cart i{
        font-size: 50px;
    }
    .empty-cart{
        padding: 120px 0;
    }

    .price{
        background: #8c68d2;
        /* background: #b8a2e3; */
        color: ghostwhite;
    }
    .checkout{
        background: #6337b9;
        color: ghostwhite;
        padding: 7px 0px;
    }
    .product{
        border-bottom: 1px solid #8c68d2;
    }

    .del:hover{
        cursor: pointer;
    }

    @media only screen and (min-width: 1024px) {
        img{
            height: 50px;
        }
    }
</style>