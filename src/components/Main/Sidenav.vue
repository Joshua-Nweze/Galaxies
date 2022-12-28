<template>
    <div class="container-fluid side-nav">
        <div class="row" v-for="nav in navList" :key="nav.index">
            <div class="btn-group dropend d- col-12">
                <div class="dropdown col-12 d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <img :src="require(`../../assets/imgs/${nav.image}`)" alt="" width="50px" class="img-fluid col-2">
                    <div class="col-9">{{nav.name}}</div>
                    <div class="col-1"><i class="bi bi-caret-right-fill"></i></div>
                </div>
                <ul class="dropdown-menu sidenav-dropdown">
                    <li class="dropdown-item" v-for="dropdown in nav.dropdown" :key="dropdown.index">{{ dropdown.name}} </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useNavItem } from '@/store/useNavItem'
import { storeToRefs } from 'pinia'

let navItem = useNavItem()

let { navItems } = storeToRefs(navItem)

let navList = navItems.value.nav

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
        box-sizing: border-box;
        height: 50px;
    }
    .row:hover{
        cursor: pointer;
    }

    .ads-count{
        font-size: 15px;
    }

    .sidenav-dropdown{
        /* margin:-48px 0 0 300px; */
        /* display: none; */
        z-index:99;
        /* height: 500px; */
        background: white;
        box-shadow: #b8a2e3 0px 7px 29px 0px;
        padding: 5px 5px;
    }

    .sidenav-item{
        margin-top: 20px;
        display: flex;
        align-items: center;
    }

    .dropdown-item{
        padding: 15px 5px;
    }
</style>