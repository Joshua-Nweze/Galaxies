<template>
    <div class="trends-container">
        <div class="heading">Saved Items</div>
        <div class="mt-1">You do not have any saved Item</div>
        <div class="mt-1">Login to see saved item</div>
        <!-- <div class="trends">
            <div class="mr-5">
                <div class="card mt-2" style="width: 13rem; margin-right: 10px">
                    <img  class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <span class="title fw-bold">name</span> <br>
                        <span class="amount fw-bold">₦price</span>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'

</script>

<style scoped>
    .trends-container{
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    }

    .heading{
        font-size: 24px;
    }

    .trends{
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

</style>