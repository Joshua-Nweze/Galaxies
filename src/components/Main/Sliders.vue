<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-9 col-sm-12 col-md-9 hero position-relative">
                <div class="col-5 hero-words position-absolute">
                    <img src="../../assets/imgs/dot-grp.png" class="position-absolute dots" alt="" height="300px">
                    <span class="fs-2 fw-bolder">Galaxies</span> <br>
                    <span class="fs-5">The online marketplace you can trust </span><br>

                    <a href="#trends"><button type="button" class="btn main-btn text-light mt-3 position-absolute">See Products</button></a>
                </div>
                <img class="position-absolute handz" src="../../assets/imgs/handz/thumbs-up.png" alt="" width="500px">
            </div>

            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 sm-hero-container">
                <div class="col-lg-12 col-md-12 col-6 col-xs-6 sm-hero text-center pt-4">
                    <span class="mt-5 fw-bold">Wanna sell something?</span> <br>
                    <button type="button" class="btn main-btn text-light mt-2 col-11" data-bs-toggle="modal" data-bs-target="#sellProduct"><i class="bi bi-bag-plus"></i> Sell a product</button>
                </div>

                <div class="col-lg-12 col-md-12 col-6 col-xs-6 sm-hero text-center pt-4 sm-hero-second">
                    <span class="mt-5 fw-bold">See Premium services</span>
                    <router-link to="/coming-soon" type="button" class="btn main-btn text-light mt-2 col-11"><i class="bi bi-gem"></i> Premium Services</router-link>
                </div>
            </div>
        </div>

        <!-- Sell Product Modal -->
        <div class="modal fade" id="sellProduct" tabindex="-1" aria-labelledby="sellProductLabel" aria-hidden="true">
        <div class=" modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Wanna sell somthing?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-center">
                Login or Signup to continue
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <div @click="auth('/login')" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Login</div>
                <div @click="auth('/signup')" type="button" class="btn main-btn" data-bs-dismiss="modal">Signup</div>
            </div>
            </div>
        </div>
        </div>
        <!-- Modal ends -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'


let router = useRouter()

function auth(path) {
    setTimeout(() => {
        router.push(path)
    }, 100)
}

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
    }

    .main-btn{
        background: #3d2272;
        color: ghostwhite;
    }

     @media only screen and (max-width: 480px) {
        .handz{
            right: -200px;
        }
        .sm-hero-container{
            margin-top: 10px;
            display: flex;
        }
        .sm-hero-second{
            margin-left: 5px;
        }
        
     }

     @media only screen and (min-width: 481px) and (max-width: 767px) {
        .sm-hero-second{
            margin-left: 5px;
        }
        .sm-hero-container{
            margin-top: 10px;
            display: flex;
        }
     }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .sm-hero-container{
            display: block;
        }
        .sm-hero-second{
            margin-top: 5px;
        }
    }

     @media only screen and (min-width: 1024px) {
        .sm-hero-second{
            margin-top: 5px;
        }
     }
</style>