<template>
    <div class="row container-fluid d-flex justify-content-center">
        <nav aria-label="breadcrumb" class="mt-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <router-link to="/" class="breadcrumb-item router-crumb">Home</router-link>
                    <li class="breadcrumb-item text-muted">Search</li>
                    <li class="breadcrumb-item text-muted">{{ query.split('-').join(' ') }}</li>
                </ol>
            </nav>
        </nav>

        <h4>Found {{ product.length }} product(s) containing '{{ query.split('-').join(' ') }}'</h4>

        <router-link :to="`/product/${item.type.split(' ').join('-')}/${item.category.split(' ').join('-')}/${item.name.split(' ').join('-')}`" class="card mt-2 router" v-for="item in product" :key="item.index">
        <img  class="card-img-top" :src="require(`../../assets/imgs/${item.image}`)">
            <div class="card-body">
                <span class="title fw-bold">{{ item.name }}</span> <br>
                <span class="amount fw-bold">₦{{ item.price }}</span>
            </div>
        </router-link>
        <div v-if="product.length == 0">
            <h5>No available product to show</h5>
        </div>
    </div>
</template>

<script setup>
import { useProducts } from '@/store/products'
import { reactive, ref } from '@vue/reactivity'
import { mapActions, storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { routeEdit } from '@/composables/routeEdit'
// import 404 from '@/components/404'

let route = useRoute()
let { routeRemoveDash } = routeEdit()

let productsStore = useProducts()

let { products, product} = storeToRefs(productsStore)
let { getProducts, retainProducts, search } = productsStore

let query = ref(route.params.query)

let item = ref(search(routeRemoveDash(query)))
</script>

<style scoped>
    .router-crumb{
        color: #9676d6;
        text-decoration: none;
    }

    .router{
        color: #2c3e50;
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
        .card-body{
            padding: 0;
            font-size: 14px;
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