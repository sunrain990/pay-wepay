<template>
    data : {{ data | json }}
    <!--<div class="heart"></div>-->
</template>

<style>
    .heart{
        width: 150px;
        height: 100px;
        background-color: #E76464;
        transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        border-top-left-radius: 50px 50px;
        border-bottom-left-radius: 50px 50px;
        position: relative;
        margin-top: 200px;
    }
    .heart::after{
        transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        content: " ";
        display: block;
        position: absolute;
        width: 150px;
        height: 100px;
        background-color: #E76464;
        border-top-right-radius: 50px 50px;
        border-bottom-right-radius: 50px 50px;
        top: -25px;
        right: -25px;
    }
</style>

<script>
    import { getDemosData } from '../../vuex/getters'
    import { getDemo } from '../../vuex/actions'

    export default {
        components: {
        },
        vuex: {
            getters: {
                data: getDemosData
            },
            actions: {
                getDemo
            }
        },
        created() {
            this.getDemo()
        },
        methods: {

        }
    }
</script>