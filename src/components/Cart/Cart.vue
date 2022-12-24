<template>
    <div class="container">
        <div class="row pb-5">
            <div class="col-lg-8 col-md-8 col-sm-12 products">
                <div class="empty-cart text-center">
                    <i class="bi bi-cart-x"></i> <br>
                    <span class="fs-3">Sorry, there is no item in your cart</span>
                </div>

                <div class="row product mt-4">
                    <div class="col-3">ddd</div>
                    <div class="col-6">
                        <span>Product name</span> <br>
                        <span><i class="bi bi-trash"></i> Remove</span>
                    </div>
                    <div class="col-3 text-end">
                        <span>₦ Price</span> <br>
                        <span><i class="bi bi-plus-circle"></i> 1 <i class="bi bi-dash-circle"></i></span>
                    </div>
                </div>

                <div class="mt-5 mb-5">
                    <Saved />
                </div>
            </div>

            <div class="col-lg-4 col-sm-12 text-center pt-3">
                <div class=" row justify-content-center">
                    <div class="col-10">
                        <div class="price d-flex fw-bolder">
                            <div class="col-6">Total</div>
                            <div class="col-6">₦ 56789</div>
                        </div>
                    </div>
                    <div class="col-10 text-center">
                        <div class="checkout d-flex justify-content-center fw-bolder">
                            Checkout (₦ 56789)
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import Saved from './Saved.vue'

</script>

<style scoped>
    .empty-cart i{
        font-size: 50px;
    }
    .empty-cart{
        padding: 120px 0;
    }

    .price{
        background: #8c68d2;
        /* background: #b8a2e3; */
        color: ghostwhite;
    }
    .checkout{
        background: #6337b9;
        color: ghostwhite;
        padding: 7px 0px;
    }
    .product{
        border-bottom: 1px solid #8c68d2;
    }

    @media only screen and (min-width: 1024px) {
        /* .products{
            margin-bottom: 300px;
        } */
    }
</style>