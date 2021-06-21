<template>
    <footer :style="{background:$store.state.color}">
        <router-link 
        v-for="(obj,index) in menu" 
        :key="index" 
        :to="obj.path"
        @click.native="$store.commit('change',obj)"
        >
        {{obj.title}}
        
        </router-link>
        
    </footer>
        
   
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                    {
                        title:"电影",
                        path:"/movie",
                        color:'burlywood'
                    },
                    {
                        title:"音乐",
                        path:"/music",
                        color:'yellow'
                    },
                    {
                        title:"图书",
                        path:"/book",
                        color:'pink'
                    },
                    {
                        title:"图片",
                        path:"/photo",
                        color:'orange'
                    },
                ]
            }
        },
        created(){
            // console.log(this.$route.path)
            this.menu.forEach((obj,index) => {
                if(obj.path == this.$route.path){
                    this.$store.commit('change',obj);
                }
                
            });
        }
    }
</script>

<style lang="scss" scoped>

footer{
    background-color: burlywood;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 16px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
    
    a{
        flex: 1;
        text-align: center;
        color: black;
        font-size: 14px;
        cursor: pointer;
    }
    .router-link-active{
        color: white;
        text-decoration: none;
    }
}


</style>