<template>
    <div class="recents-container">
        <div class="recents">
            <div class="mr-5" v-for="trends in trending" :key="trends.id">
                <div class="card mt-2" style="width: 13rem; margin-right: 10px">
                    <img  class="card-img-top" :src="require(`../../assets/imgs/${trends.image}`)" style="height: 180px">
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

</style>