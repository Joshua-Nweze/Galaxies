<template>
    <div class="row container-fluid d-flex justify-content-center">
        <h4>Product cat</h4>
        <div class="card mt-2 router">
            <!-- <img  class="card-img-top" :src="trends.image" :alt="trends.name + ' image'"> -->
            <img class="card-img-top img-fluid" alt="" style="">
            <div class="card-body">
                <span class="title fw-bold"></span> <br>
                <span class="amount fw-bold">₦</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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