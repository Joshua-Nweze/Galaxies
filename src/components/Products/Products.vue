<template>
    <div class="row container-fluid d-flex justify-content-center">
        <nav aria-label="breadcrumb" class="mt-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <router-link to="/" class="breadcrumb-item router-crumb router">Home</router-link>
                    <li class="breadcrumb-item text-muted">Products</li>
                    <li class="breadcrumb-item text-muted">{{$route.params.productCategory}}</li>
                    <li class="breadcrumb-item active" aria-current="page">{{ props.productCat }}</li>
                </ol>
            </nav>
        </nav>

        <h4>{{ props.productCat }}</h4>
            <!-- <div class=""> -->
            <div  class="card mt-2 router" v-for="b in product" :key="b.index">
            <!-- <img  class="card-img-top" :src="trends.image" :alt="trends.name + ' image'"> 
            <img class="card-img-top img-fluid" alt="" style=""> -->
            <div class="card-body" v-if="product.length" >
                <span class="title fw-bold">{{ b.name }}</span> <br>
                <span class="amount fw-bold">₦</span>
            </div>
            <div v-else class="noProducts">
                No available product to show
            </div>
            </div>
        <!-- </div> -->
        
    </div>
</template>.

<script setup>
import { useProducts } from '@/store/products'
import { reactive, ref } from '@vue/reactivity'
import { mapActions, storeToRefs } from 'pinia'

let props = defineProps(["productCat"])

console.log(props.searchQuery);

let productsStore = useProducts()

let { products, product} = storeToRefs(productsStore)
let { getProducts } = productsStore
// let {ina} = mapActions(useProducts, ['ina'])
let productsArr = reactive([])

// if (product) {
    // console.log(Object.keys(product).length);
// }

productsArr.push(products.value.product)

getProducts(productsArr, props.productCat)
// search(productsArr, 'tv')

// console.log(product.value);

</script>

<style scoped>
    .router-crumb{
        color: #502d95;
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