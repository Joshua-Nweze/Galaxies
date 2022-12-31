<template>
    <div class="row container-fluid d-flex justify-content-center">
        <nav aria-label="breadcrumb" class="mt-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <router-link to="/" class="breadcrumb-item router-crumb router">Home</router-link>
                    <li class="breadcrumb-item text-muted">Products</li>
                    <li class="breadcrumb-item text-muted">{{ productType.split('-').join(' ') }}</li>
                    <li class="breadcrumb-item active" aria-current="page">{{ productCat.split('-').join(' ') }}</li>
                </ol>
            </nav>
        </nav>

        <h4>{{ productCat.split('-').join(' ') }}</h4>

        <router-link @click="toProduct(item)" :to="`/product/${item.name.split(' ').join('-')}`" class="card mt-2 router" v-for="item in product" :key="item.index">
        <!-- <img  class="card-img-top" :src="trends.image" :alt="trends.name + ' image'"> 
        <img class="card-img-top img-fluid" alt="" style=""> -->
            <div class="card-body">
                <span class="title fw-bold">{{ item.name }}</span> <br>
                <span class="amount fw-bold">₦{{ item.price }}</span>
            </div>
        </router-link>
        <div v-if="product.length == 0" class="noProducts">
            No available product to show
        </div>
        
    </div>
</template>.

<script setup>
import { useProducts } from '@/store/products'
import { reactive, ref } from '@vue/reactivity'
import { mapActions, storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { routeEdit } from '@/composables/routeEdit'

let props = defineProps(["productCat"])
let emit = defineEmits(["toProduct"])
let route = useRoute()
let { routeRemoveDash } = routeEdit()

let productsStore = useProducts()

let { products, product} = storeToRefs(productsStore)
let { getProducts, retainProducts } = productsStore
// let {ina} = mapActions(useProducts, ['ina'])
let productsArr = reactive([])
let productType = ref(route.params.productType)
let productCat = ref(route.params.productCat)

console.log(productType.value, productCat.value);

productsArr.push(products.value.product)

getProducts(productsArr, props.productCat)
retainProducts(routeRemoveDash(productType), routeRemoveDash(productCat))

function toProduct(data){
    console.log(data);
    emit("toProduct", data)
}

</script>

<style scoped>
    .router-crumb{
        color: #502d95;
    }

    .router{
        color: #2c3e50;
    }

    .noProducts{
        font-size: 2rem;
    }

    @media only screen and (max-width: 480px) {
        .card{
            width: 7rem;
            height: 9rem;
            margin-right: 10px
        }
        .card img{
            height: 50px
        }
    }

    @media only screen and (min-width: 481px) and (max-width: 1023px) {
        .card{
            width: 13rem;
            /* height: 9rem; */
            margin-right: 10px
        }
        .card img{
            height: 180px
        }
    }

    @media only screen and (min-width: 1024px) {
        .card{
            width: 13rem;
            /* height: 9rem; */
            margin-right: 10px
        }
        .card img{
            height: 180px
        }
    }
</style>