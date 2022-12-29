<template>
    <div class="recents-container">
        <div class="recents">
            <div class="mr-5" v-for="trends in trending" :key="trends.id">
                <div class="card mt-2">
                    <img  class="card-img-top" :src="require(`../../assets/imgs/${trends.image}`)">
                    <div class="card-body">
                        <span class="title fw-bold">{{trends.name}}</span> <br>
                        <span class="amount fw-bold">₦{{trends.price}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import trendingProducts from '../../assets/json/trending.json'

let trending = ref(trendingProducts.trending)

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