<template>
    <div class="container">
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-lg-5 col-md-5 col-sm-12">
                <img class="img-fluid" src="../../assets/imgs/trending/nike-airx.jpeg" alt="">
            </div>
            
            <div class="col-lg-5 col-md-5 col-sm-12 align-item-center product-details">
                <div><h3>Product Name</h3></div>
                <div class="amount">₦ amount</div>
                <div class="qty mt-3">Quantity <i class="bi bi-plus-circle"></i> 1 <i class="bi bi-dash-circle"></i></div>
                <div class="seller-contact mt-3"><button class="btn">Seller contact</button></div>
                <div class="cart-and-fav mt-3"><button class="btn add-to-cart">Add to cart</button><span class="add-to-fav"><i class="bi bi-heart"></i></span></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .amount, .qty, .seller-contact, .cart-and-fav{
        font-size: 20px;
    }

    .seller-contact button, .seller-contact button:hover, .add-to-cart, .add-to-cart:hover{
        background: #9676d6;
        color: ghostwhite;
    }

    .add-to-fav{
        margin-left: 10px;
    }

    @media only screen and(max-width: 767px){
        .product-details{
            margin-top: 10px;
        }
    }
</style>