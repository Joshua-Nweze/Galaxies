<template>
    <div class="container-fluid side-nav">
        <div class="row" @mouseenter="showSubSidenav" @mouseleave="hideSubSidenav" id="sideNav">
                <div class="col-2 d-flex align-items-center">
                    <img src="../../assets/imgs/handz/thumbs-up.png" alt="" width="50px">
                </div>
                <div class="col-8"><span class="category fw-bold">Electronics</span> <br> <span class="ads-count">0 ads</span></div>
                <div class="col-2 d-flex align-items-center"> <i class="bi bi-chevron-right"></i> </div>
               
            
            <div @mouseenter="showSubSidenav" @mouseleave="hideSubSidenav" class="sidenav-dropdown" id="subSidenav">
                <div class="sidenav-item">Nav kam</div>
                <div class="sidenav-item">Nav kam</div>
            </div>
        </div>
    </div>
</template>

<script setup>

function showSubSidenav () {
    let sideNav = document.getElementById('sideNav')
    let subSideNav = document.getElementById('subSidenav')

     subSideNav.style.display = 'block'
}

function hideSubSidenav() {
    let sideNav = document.getElementById('sideNav')
    let subSideNav = document.getElementById('subSidenav')

     subSideNav.style.display = 'none'
}
</script>

<style  scoped>
    .side-nav{
        margin-top: 20px;
        box-shadow: #b8a2e3 0px 7px 29px 0px;
        height: 500px;
    }
    .row{
        border-bottom: 1px solid ;
        box-sizing: border-box;
        height: 50px;
    }
    .row:hover{
        cursor: pointer;
    }
    /* .category{
        color: ;
    } */
    .ads-count{
        font-size: 15px;
    }

    .sidenav-dropdown{
        margin:-48px 0 0 300px;
        display: none;
        z-index:99;
        height: 500px;
        background: white;
        box-shadow: #b8a2e3 0px 7px 29px 0px;
        padding: 5px 5px;
    }

    .sidenav-item{
        margin-top: 20px;
        display: flex;
        align-items: center;
    }
</style>