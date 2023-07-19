<template>
    <!-- Image and text -->
    <MDBNavbar light bg="light" container>
        <router-link to="/">
            <MDBNavbarBrand href="#" id="nav">
                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp" height="30" alt=""
                    loading="lazy" />Home
            </MDBNavbarBrand>
        </router-link>

        <router-link to="/about">
            <MDBNavbarBrand>About</MDBNavbarBrand>
        </router-link>

        <router-link to="/login"><MDBNavbarBrand id="login">login</MDBNavbarBrand></router-link>
        <MDBNavbarBrand id="logout">logout </MDBNavbarBrand>
        <router-link to="/register"><MDBNavbarBrand id="reg">Register</MDBNavbarBrand></router-link>
        <router-link to="/log"><MDBNavbarBrand id="login">loginvue</MDBNavbarBrand></router-link>
    </MDBNavbar>
</template>



<script>
import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';

export default {
    components: {
        MDBNavbar,
        MDBNavbarBrand,
    },
};
</script>

<style>
#login {
    margin-left:200px;
}</style>