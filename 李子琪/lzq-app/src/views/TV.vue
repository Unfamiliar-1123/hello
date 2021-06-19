<template>
    <div>
        <ul>
            <li></li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
           return{
               tvList:[]
           }
        },
        create(){
            this.getData();
        },
        methods:{
            getData(){
                let baseUrl = 'https://bird.ioliu.cn/v2?url=';
                let tvUrl = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=108288&_=1624062785728'
                this.axios.get(baseUrl + tvUrl)
                .then(res=>{
                    this.tvList = res.data.subject_collection_items;
                    })
                .catch(err=>console.log(err))
            }
        }


    }
</script>

<style lang="scss" scoped>

</style>