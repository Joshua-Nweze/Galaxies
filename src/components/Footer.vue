<template>
    <footer>
        <div class="container">
            <div class="row footer-links">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h4>About Galaxies</h4>
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> About us</li>
                        <li><i class="bi bi-chevron-right"></i> Terms and Condition</li>
                        <li><i class="bi bi-chevron-right"></i> Privacy Policy</li>
                        <li><i class="bi bi-chevron-right"></i> Career</li>
                        <li><i class="bi bi-chevron-right"></i> Return Policy</li>
                        <li><i class="bi bi-chevron-right"></i> Premium Services</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h4>Support</h4>
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> Safety tips</li>
                        <li><i class="bi bi-chevron-right"></i> Contact</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h4>Socials</h4>
                    <span class="socials"><i class="bi bi-facebook"></i></span>
                    <span class="socials"><i class="bi bi-twitter"></i></span>
                    <span class="socials"><i class="bi bi-instagram"></i></span>
                </div>
            </div>

        </div>

        <div class="copyright text-center">
            &copy;  {{ new Date().getFullYear() }} Galaxies. Desiged and built by <a href="https://joshuanweze.netlify.app/">Joshua Nweze</a>
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

    .socials{
        margin: 0 5px;
    }

    .copyright{
        background: #3d2272;
        padding: 5px 0;
    }
</style>