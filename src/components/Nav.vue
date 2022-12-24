<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid row">
        <div class="col-3 col-lg-3 col-sm-4 order-lg-1 order-1 order-lg-1">
           <router-link class="navbar-brand" to="/">
            <img src="../assets/imgs/logo.png" alt="">
        </router-link>
        </div>

        <div class="col-12 d-flex col-lg-5 col-sm-12 order-lg-2 order-3 order-lg-2">
            <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search">
            <button class="btn nav-btn text-muted" type="submit">Search</button>
        </div>

        <div class="col-8 d-flex justify-content-end col-lg-3 col-sm-8 order-2 order-lg-3">
            <div>
                <button type="button" class="btn nav-btn text-muted"><i class="bi bi-person"></i> <span class="d-none d-sm-inline">Sign up / Login</span> </button>
            </div>

            <div class="position-relative">
                  <button type="button" class="btn nav-btn text-muted"><i class="bi bi-cart"></i> <span class="d-none d-sm-inline">Cart</span>  
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-counter">
                          0
                          <span class="visually-hidden">Cart items</span>
                      </span>
                  </button>
            </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
    nav {
        background: #3d2272;
        color: ghostwhite;
    }

    .nav-btn{
        border: #3d2272 1px solid;
        background: ghostwhite;
        transition: ease 1s;
    }
    .nav-btn:hover{
        background: #b8a2e3;
    }

    .form-control{
        box-shadow: none;
        border-color: #3d2272;
    }

    .cart-counter{
        background: #7b52cc;
    }
</style>
