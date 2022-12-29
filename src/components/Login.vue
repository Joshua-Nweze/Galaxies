<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col justify-content-end text-center d-none d-lg-flex">
                <img src="../assets/imgs/login-side-image.jpg" class="img-fluid" alt="">
            </div>
            <div class="col d-flex justify-content-center">
                <div class="col-10">
                    <h1 class="pt-4">Login</h1>
                    <form class="mt-5">
                    <div class="mb-3">
                        <input type="email" v-model="email" class="form-control" placeholder="Enter your email">
                        <div id="emailHelp" class="form-text text-danger">{{emailErrMsg}}</div>
                    </div>
                    <div class="mb-3">
                        <input type="password" v-model="pwd" class="form-control" placeholder="Password">
                        <div id="emailHelp" class="form-text text-danger">{{pwdErrMsg}}</div>
                    </div>
                    <button type="submit" class="btn" id="btn" @click.prevent="login">Login</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formInputValidator } from "@/composables/formInputValidator"
import { ref } from "@vue/reactivity"

let { textInputValidate } = formInputValidator()

let email = ref('')
let pwd = ref('')

let emailErrMsg = ref('')
let pwdErrMsg = ref('')

function login() {
    textInputValidate(email, emailErrMsg)
    textInputValidate(pwd, pwdErrMsg)
}
</script>

<style scoped>
    h1{
    color: #3d2272;
    }

    button, button:hover {
        background: #3d2272;
        color: ghostwhite;
    }

    .form-control{
        box-shadow: none;
    }
    .form-control:focus{
        border-color: #3d2272;
    }

</style>