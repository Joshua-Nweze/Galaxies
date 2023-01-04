<template>
    <div class="container-fluid">
        <!-- Login success alert -->
        <div class="row mt-3 d-flex justify-content-end" v-if="loginSuccess">
            <div class="col-lg-4 col-md-5 col-sm-8 alert alert-success alert-dismissible fade show" role="alert">
                {{ alertMessage }}
            </div>
        </div>
        <!--  -->
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
import { useAuth } from '@/store/auth'
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

let auth = useAuth()
let { isLoggedIn } = storeToRefs(auth);
let { loginUser } = auth
let router = useRouter()

let { textInputValidate } = formInputValidator()

let email = ref('')
let pwd = ref('')
let loginSuccess = ref(false)
let alertMessage = ref('Login successful, taking you to home in 3 seconds')

let emailErrMsg = ref('')
let pwdErrMsg = ref('')

function login() {
    textInputValidate(email, emailErrMsg)
    textInputValidate(pwd, pwdErrMsg)

    if(email.value == 'test@gmail.com' && pwd.value == 12345) {
        loginSuccess.value = true;
        loginUser()

        setTimeout(() => {
            router.push('/')
        }, 3000)
    }
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


    @media only screen and (max-width: 480px) {
            .alert{
                width: 300px;
                margin-right: 10px;
            }
        }

</style>