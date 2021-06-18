<template>
    <header  id="header" :style="{ backgroundColor: curMenu.bgColor }">
        <span @click="goHome()" class="home">首页</span>
        {{curMenu.name}}
        </header>
</template>

<script>
    import {mapState,mapMutations} from "vuex";
    export default {
        computed:{
            ...mapState(['curMenu'])
        },
        methods:{

            ...mapMutations(['setCurMenu']),

            goHome(){
                this.$router.push('/');
                this.setCurMenu({
                    name:'剧集',
                    bgColor:'indianred'
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

#header{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: indianred;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    color: white;
    a{
        color: black;
    }
    .home{
        position: absolute;
        left: 0;
    }
}

</style>