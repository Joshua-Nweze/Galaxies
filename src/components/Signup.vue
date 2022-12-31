<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col justify-content-end text-center d-none d-lg-flex">
                <img src="../assets/imgs/handz/shake.png" class="img-fluid" alt="">
            </div>
            <div class="col d-flex justify-content-center">
                <div class="col-10">
                    <h1 class="pt-4">Signup</h1>
                    <!-- <form class="mt-5"> -->
                        <div class="mb-3">
                            <input type="text" v-model="name" class="form-control" placeholder="Enter your full name">
                            <div id="nameErrMsg" class="form-text text-danger">{{nameErrMsg}}</div>
                        </div>
                        <div class="mb-3">
                            <input type="email" v-model="email" class="form-control" placeholder="Enter your email">
                            <div id="emailErrMsg" class="form-text text-danger">{{emailErrMsg}}</div>
                        </div>
                        <div class="mb-3">
                            <input type="password" v-model="pwd1" class="form-control" placeholder="Password">
                            <div id="pwd1ErrMsg" class="form-text text-danger">{{pwd1ErrMsg}}</div>
                        </div>
                        <div class="mb-3">
                            <input type="password" v-model="pwd2" class="form-control" placeholder="Re-enter password">
                            <div id="pwd2ErrMsg" class="form-text text-danger">{{pwd2ErrMsg}}</div>
                        </div>
                        <button type="submit" class="btn" id="btn" @click.prevent="createAccount">Create account</button>
                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formInputValidator } from "@/composables/formInputValidator"
import { ref } from "@vue/reactivity"

let { textInputValidate, emailInputValidate, passwordInputValidate } = formInputValidator()

let name = ref('')
let email = ref('')
let pwd1 = ref('')
let pwd2 = ref('')
let nameErrMsg = ref('')
let emailErrMsg = ref('')
let pwd1ErrMsg = ref('')
let pwd2ErrMsg = ref('')

function createAccount() {
   textInputValidate(name, nameErrMsg)
   emailInputValidate(email, emailErrMsg)
   passwordInputValidate(pwd1, pwd2, pwd1ErrMsg, pwd2ErrMsg)
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