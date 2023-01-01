<template>
    <div class="recents-container">
        <div class="recents">
            <div class="mr-5" v-for="recent in recents.slice(0, 4)" :key="recent.id">
                <router-link :to="`/product/${recent.type.split(' ').join('-')}/${recent.category.split(' ').join('-')}/${recent.name.split(' ').join('-')}`" class="card mt-2 router">
                    <img  class="card-img-top" :src="require(`../../assets/imgs/${recent.image}`)">
                    <div class="card-body">
                        <span class="title fw-bold">{{recent.name}}</span> <br>
                        <span class="amount fw-bold">₦{{recent.price}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import recentProducts from '../../assets/json/products.json'

let recents = ref(recentProducts.product)

</script>

<style scoped>
    .recents-container{
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    }

    .recents{
        margin: 0 5px 0 0;
        display: flex;
        margin: 10px;
    }

    .title{
        font-size: 16px;
        color: #2c3e50;
    }

    .amount{
        color: #6337b9
    }

    .card-body{
        padding: 0;
        margin: 0;
    }

    @media only screen and (max-width: 480px) {
        .card{
            width: 7rem;
            height: 9rem;
            margin-right: 10px;
            margin-bottom: 15px;
        }
        .card img{
            height: 70px
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