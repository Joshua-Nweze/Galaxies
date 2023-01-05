<template>
    <div>
        <div class="fs-3 mt-3">Saved Products</div>
        <div v-if="saved.length > 0">
            <div class="row saved mt-4" v-for="(item, index) in saved" :key="item.index">
                <div class="col-2">
                    <img v-if="item.image" :src="require(`../../assets/imgs/${item.image}`)" alt="" class="img-fluid">
                </div>
                <div class="col-6">
                    <router-link
                     :to="`/product/${item.type.split(' ').join('-')}/${item.category.split(' ').join('-')}/${item.name.split(' ').join('-')}`" class="router"
                    >{{item.name}}
                    </router-link> <br>
                    <span class="text-danger del" @click="delItem(index)"><i class="bi bi-trash"></i> Remove</span>
                </div>
                <div class="col-4 text-end">
                    <span>₦ {{item.price}}</span> <br>
                </div>
            </div>
        </div>
        <div v-else class="fs-4 empty-saved text-center">
            Sorry, <br> You do not have any saved product
        </div>
    </div>
</template>

<script setup>
import { useAuth } from '@/store/auth'
import { storeToRefs } from 'pinia';
let auth = useAuth()

let { saved } = storeToRefs(auth);
let { delSavedItem } = auth

function delItem(index) {
    delSavedItem(index)
    showAlert.value = true

    setTimeout(() => {
        showAlert.value = false
    }, 1500)
}

</script>

<style scoped>
    .alert{
        bottom: 10px;
        position: fixed;
        transition: .5s ease-in;
    }

    .saved{
        border-bottom: 1px solid #8c68d2;
    }

    .empty-saved{
        padding: 120px 0;
    }

    .router{
        color: #2c3e50
    }

    img{
        height: 50px;
        margin-bottom: 5px;
    }

    @media only screen and (max-width: 480px) {
        .alert{
            width: 250px;
        }
    }
</style>