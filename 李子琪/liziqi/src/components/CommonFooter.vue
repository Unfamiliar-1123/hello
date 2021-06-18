<template>
 
    <footer>
        <router-link  v-for="(obj,index) in menu" 
        :key="index" 
        :to="obj.path"
        @click="$store.commit('change',obj)"
        >{{obj.title}}</router-link>
        
    </footer>

    
</template>

<script>
    export default {
        data(){
            return {
                menu:[
                    {
                        title:"movie",
                        path:"/movie",
                        color:'red'
                    },
                    {
                        title:"music",
                        path:"/music",
                        color:'orange'
                    },
                    {
                        title:"book",
                        path:"/book",
                        color:'yellow'
                    },
                    {
                        title:"picture",
                        path:"/picture",
                        color:'pink'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
footer{
    background-color: red;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 16px;
    position: fixed;
    bottom: 0;
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
    }
}
</style>