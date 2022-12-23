<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
            <img src="../assets/imgs/logo.png" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>

          </div>
        </div> -->
        <div class="d-flex justify-contents-end">
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search">
                <button class="btn nav-btn text-muted" type="submit">Search</button>
            </div>
                
            <div class="position-relative" style="margin-left: 200px; margin-right: 10px">
                <button type="button" class="btn nav-btn text-muted"><i class="bi bi-cart"></i> Cart 
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-counter">
                        0
                        <span class="visually-hidden">Cart items</span>
                    </span>
                </button>
                
                
            </div>
            
            <div>
                <button type="button" class="btn nav-btn text-muted">Sign up / Login</button>
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
