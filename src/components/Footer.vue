<template>
    <footer>
        <div class="container">
            <div class="row footer-links">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h4>About Galaxies</h4>
                    <ul>
                        <li><router-link to="/dummy" class="router"> About us</router-link></li>
                        <li><router-link to="/dummy" class="router">  Terms and Condition</router-link></li>
                        <li><router-link to="/dummy" class="router">  Privacy Policy</router-link> </li>
                        <li><router-link to="/dummy" class="router">  Career</router-link> </li>
                        <li><router-link to="/dummy" class="router">  Return Policy</router-link></li> 
                        <li><router-link to="/dummy" class="router">  Premium Services</router-link> </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h4>Support</h4>
                    <ul>
                        <li><router-link to="/dummy" class="router">  Safety tips</router-link> </li>
                        <li><router-link to="/dummy" class="router">  Contact</router-link> </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 socials">
                    <h4>Socials</h4>
                    <span class="social"><i class="bi bi-facebook"></i></span>
                    <span class="social"><i class="bi bi-twitter"></i></span>
                    <span class="socias"><i class="bi bi-instagram"></i></span>
                </div>
            </div>

        </div>

        <div class="copyright text-center">
            &copy;  {{ new Date().getFullYear() }} Galaxies. Desiged and built by <a href="https://joshuanweze.netlify.app/" target="_blank">Joshua Nweze</a>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
    footer{
        margin-top: 50px;
        background-color: #6337b9;
        color: ghostwhite;
    }

    li{
        list-style-type: none;
    }

    .footer-links{
        padding-top: 30px;
    }

    .social{
        margin: 0 5px;
    }

    .copyright{
        background: #3d2272;
        padding: 5px 0;
    }

    .router{
        color: ghostwhite;
    }

    @media only screen and (max-width: 767px) {
        .socials{
            margin-bottom: 15px;
        }
    }
</style>