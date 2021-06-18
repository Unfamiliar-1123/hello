<template>
    <footer id="footer" :style="{ backgroundColor: curMenu.bgColor }">
        <div v-for = "obj in menuList" :key="obj.path" @click="changeMenu(obj)">
            <router-link :to = "obj.path">{{obj.name}}</router-link>
            
        </div>
        
    </footer>
</template>

<script>
    import {mapState,mapMutations} from "vuex"
    export default {
        data(){
            return{
                menuList:[
                    {
                        path:'/',
                        name:'剧集',
                        bgColor:'indianred'
                    },
                    {
                        path:'/music',
                        name:'音乐',
                        bgColor:'plum'
                    },
                    {
                        path:'/book',
                        name:'书籍',
                        bgColor:'rosybrown'
                    },
                    {
                        path:'/chat',
                        name:'聊天',
                        bgColor:'orchid'
                    }
                ]
            }
        },
        computed:{
            ...mapState(['curMenu'])
        },
        methods:{
            ...mapMutations(['setCurMenu']),
            changeMenu(obj){
                this.setCurMenu(obj);
            }
        }
        
    };
</script>

<style lang="scss" scoped>

#footer{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: indianred;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    a{
        color: black;
    }
    .router-link-exact-active{
        color: white;
    }
}

</style>