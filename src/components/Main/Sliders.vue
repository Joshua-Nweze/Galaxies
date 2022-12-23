<template>
    <div class="container row">
        <div class="col-9 hero position-relative">
            <div class="hero-words position-absolute">
                <img src="../../assets/imgs/dot-grp.png" class="position-absolute dots" alt="" height="300px">
                <span class="fs-2 fw-bolder">Galaxies</span> <br>
                <span class="fs-5">The online marketplace you can trust </span><br>

                <button type="button" class="btn main-btn text-light mt-3">Learn more</button>
            </div>
            <img class="position-absolute handz" src="../../assets/imgs/handz/thumbs-up.png" alt="" width="500px">

        </div>

        <div class="col-3">
            <div class="col-12 sm-hero text-center pt-4">
                <span class="mt-5 fw-bold">Wanna sell something?</span> <br>
                <button type="button" class="btn main-btn text-light mt-3"><i class="bi bi-bag-plus"></i> Sell a product</button>
            </div>

            <div class="col-12 sm-hero mt-1 text-center pt-4">
                <span class="fw-bold">See Premium services</span>
                <button type="button" class="btn main-btn text-light mt-3"><i class="bi bi-gem"></i> Premium Services</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .hero{
        height: 305px;
        overflow: hidden;
        box-shadow: #b8a2e3 0px 7px 29px 0px;
        background: #b8a2e3;
    }

    .sm-hero{
        background: #b8a2e3;    
        height: 150px;
    }

    .hero-words{
        top: 100px;
    }

    .handz{
        right: -130px;
        /* object-fit: cover; */
    }

    .main-btn{
        background: #3d2272;
    }
</style>