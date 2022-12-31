<template>
    <div class="trends-container">
        <div class="trends">
            <div class="mr-5" v-for="trends in trending" :key="trends.index">
                <router-link @click="toProduct(trends)" :to="`/product/${trends.name.split(' ').join('-')}`" class="card mt-2 router">
                    <!-- <img  class="card-img-top" :src="trends.image" :alt="trends.name + ' image'"> -->
                    <img v-if="trends.image" class="card-img-top img-fluid" :src="require(`../../assets/imgs/${trends.image}`)" :alt="trends.name" style="">
                    <div class="card-body">
                        <span class="title fw-bold">{{trends.name}}</span> <br>
                        <span class="amount fw-bold">₦{{trends.price}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import trendingProducts from '../../assets/json/trending.json'

let emit = defineEmits(['toProduct'])

let trending = ref(trendingProducts.trending)

function toProduct(data) {
    emit('toProduct', data)
}
</script>

<style scoped>
    .trends-container{
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    }

    .trends{
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
        padding: 5px;
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