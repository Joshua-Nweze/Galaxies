<template>
    <div class="container">
        <div class="row d-flex justify-content-center text-center notFound">
            <div class="col-lg-6 col-md-8 col-sm-12">
                <i class="bi bi-emoji-frown"></i> <br>
                <h4>404 <br> Page not found</h4>

                <h5>Go to <router-link to="/" class="router"> home</router-link> </h5>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.notFound{
    margin: 100px 0;
    font-size: 50px;
}

.router{
    color: #9676d6;
}
</style>