<template>
    <div class="top-box">
        <Navbar></Navbar>
        <div class="row">
            <div class="col-xs-3">
                <Directory></Directory>
            </div>
            <div class="col-xs-9">
                <router-view></router-view>
            </div>
        </div>

        <Footerbar></Footerbar>
    </div>
</template>

<script>
    import store from './vuex/store'
    import Navbar from './components/Home/nav.vue'
    import Footerbar from './components/Home/footer.vue'
    import Directory from './components/Home/directory.vue'

    export default {
        store,
        components: {
            Navbar, Footerbar, Directory
        },
    }
</script>

<style>
    @import './assets/css/normalize.css';
    @import './assets/css/index.css';
</style>