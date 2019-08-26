<template>
    <div>
        <mt-popup class="cities" v-model="cityShow" position="right">
                <div class="city-option">
                    <div class="select-city-title">
                        <img @click="cities" src="../../../public/zhengzu/left-arrow.png" alt="返回">选择城市
                    </div>
                </div>
                <div class="cityList">
                    <h2>当前城市</h2>
                    <ul>
                        <li>西安</li>
                    </ul>
                </div>
                <div class="cityList">
                    <h2>热门城市</h2>
                    <ul>
                        <li>上海</li>
                        <li>北京</li>
                        <li>深圳</li>
                        <li>杭州</li>
                        <li>南京</li>
                        <li>苏州</li>
                        <li>广州</li>
                        <li>成都</li>
                        <li>大连</li>
                        <li>天津</li>
                        <li>成都</li>
                        <li>武汉</li>
                        <li>西安</li>
                        <li>郑州</li>
                    </ul>
                </div>
            </mt-popup>      
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:['cityShow'],//接收父组件传过来的变量cityShow
    methods: {
        cities(){
            this.$emit("update:cityShow",false);//通过$emit修改父组件中cityShow的值为false,关闭当前组件
        }
    },
}
</script>
<style scoped>
    .cities{
        height:100%;
        width: 100%;
    }
    .city-option{
        width:100%;
    }
    .select-city-title{
        height: .88rem;
        line-height: .88rem;
        background-color: #ee3943;
        text-align: center;
        font-size: .32rem;
        padding: 0 .8rem;
        position: relative;
        color: #fff;
    }
    .select-city-title>img{
        position: absolute;
        padding: .3rem;
        height: .35rem;
        left: 0;
        top: 0;
    }
    .cityList{
        width:100%;
        padding: .6rem 0 0 .3rem;
    }
    .cityList>h2{
        color: #5a5c5d;
        font-size: .28rem;
        font-weight: normal;
    }
    .cityList ul{
        overflow: hidden;
    }
    .cityList ul li{
        float: left;
        width: 1.58rem;
        height: .66rem;
        line-height: .66rem;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: .04rem;
        margin: .2rem .2rem 0 0;
        font-size: .3rem;
        color:#3a3b3c;
    }
</style>