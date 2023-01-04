<template>
    <div class="saved-container container">
        <div class="heading">Saved Items</div>
        <div class="mt-1" v-if="isLoggedIn">You do not have any saved Item</div>
        <div class="mt-1" v-else>Login to see saved item</div>
        <div class="saved row d-flex justify-content-center" v-if="saved.length > 0">
            <div class="mr-5" v-for="item in saved" :key="item.id">
                <router-link 
                :to="`/product/${item.type.split(' ').join('-')}/${item.category.split(' ').join('-')}/${item.name.split(' ').join ('-')}`" class="card mt-2 router"
                >
                    <img class="card-img-top" :src="require(`../../assets/imgs/${item.image}`)" alt="">
                    <div class="card-body">
                        <span class="title fw-bold">{{ item.name }}</span> <br>
                        <span class="amount fw-bold">₦{{ item.price }}</span> <span class="text-end">del</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useAuth } from '@/store/auth'
import { storeToRefs } from 'pinia';
let auth = useAuth()
let { isLoggedIn, saved } = storeToRefs(auth);

</script>

<style scoped>
    /* .saved-container{
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    } */

    .heading{
        font-size: 24px;
    }

    .saved{
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
        padding: 5px;
        margin: 0;
    }

    .router{
        color: #2c3e50;
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