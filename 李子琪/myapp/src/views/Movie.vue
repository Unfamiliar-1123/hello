<template>
    <div>
        <ul class="list-box">
            <li class="list">
                
                    <img src="https://img1.baidu.com/it/u=2954529447,2988246611&fm=26&fmt=auto&gp=0.jpg" alt="">
                    <div class="desc-box">
                        <h3>误杀</h3>
                        <div>xiaoyang </div>
                        <p>1222人看</p>
                        <p>2019上映</p>
                        <p>剧情</p>
                    </div>
                
            </li>

            <li class="list">
                
                    <img src="https://img1.baidu.com/it/u=2954529447,2988246611&fm=26&fmt=auto&gp=0.jpg" alt="">
                    <div class="desc-box">
                        <h3>误杀</h3>
                        <div>xiaoyang </div>
                        <p>1222人看</p>
                        <p>2019上映</p>
                        <p>剧情</p>
                    </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        create(){
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
            .then(function(res){
                console.log(res)
            }).catch(function(res){
                console.log(res)
            })
        }
        
        
    }
</script>

<style lang="scss" scoped>

.list {
    display: flex;
    color: black;
    margin-bottom: 0.2rem;
}
.list img{
    width: 2rem;
    height: 2.46rem;
    margin-left: 0.2rem;
}
.desc-box{
    flex: 1;
}
.list-box{
    padding: 0.2rem;
}

</style>