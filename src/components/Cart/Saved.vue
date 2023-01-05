<template>
    <div>
        <div class="heading">Most recent saved Items</div>
        <div class="mt-1" v-if="isLoggedIn && saved.length == 0">You do not have any saved Item</div>
        <div class="mt-1" v-if="!isLoggedIn">Login to see saved item</div>
    </div>
    <div class="container row d-flex justify-content-center" v-if="isLoggedIn">
        <div class="card mt-2 router" v-for="(item, index) in saved.slice(0, 4)" :key="item.index">
            <router-link :to="`/product/${item.type.split(' ').join('-')}/${item.category.split(' ').join('-')}/${item.name.split(' ').join ('-')}`"><img class="card-img-top" :src="require(`../../assets/imgs/${item.image}`)" alt="">
            </router-link>
            <div class="card-body">
                <span class="title fw-bold">{{ item.name }}</span> <br>
                <div class="row">
                    <span class="amount fw-bold col col-sm-8 text-start">₦{{ item.price }}</span>
                    <span class="text-end col col-sm-4" @click="delItem(index)"><i class="bi bi-trash text-danger"></i></span>
                </div>
            </div>
        </div>

        <!-- Success alert -->
        <div class="row d-flex justify-content-end" v-if="showAlert">
            <div class="col-lg-4 col-md-5 col-sm-8 alert alert-success alert-dismissible fade show" role="alert">
                {{ alertMessage }}
                <button type="button" class="btn-close" @click="closeAlert" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>  
        </div>
        <!-- Success alert ends -->
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useAuth } from '@/store/auth'
import { storeToRefs } from 'pinia';
let auth = useAuth()

let { isLoggedIn, saved } = storeToRefs(auth);
let { delSavedItem } = auth

let showAlert = ref(false)
let alertMessage = ref('Product successfully removed from saved')

function delItem(index) {
    delSavedItem(index)
    showAlert.value = true

    setTimeout(() => {
        showAlert.value = false
    }, 1500)
}

</script>

<style scoped>
    .heading{
        font-size: 24px;
    }

    .title{
        font-size: 14px;
    }

    .amount{
        color: #6337b9
    }

    .router{
        color: #2c3e50;
    }

    .row{
        margin: 0;
    }
    .col{
        padding: 0;
    }

    .alert{
        bottom: 10px;
        position: fixed;
        transition: .5s ease-in;
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

        .alert{
            width: 250px;
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
