<template>
    <div>
        <!-- 页头 -->
        <div class="search-header">
            <div class="home-icon">
                <img src="../../../public/zhengzu/home.png">
            </div>
            <div @click="cities" class="city-select">
                <span>西安</span>    
                <img src="../../../public/zhengzu/sanjiao.png">
            </div>
            <!-- 隐藏显示的城市选择列表 -->
            <mt-popup class="cities" v-model="citiesShow" position="right">
                <div class="city-option">
                    <div class="select-city-title">
                        <img @click="cities" src="../../../public/zhengzu/left-arrow.png" alt="返回">选择城市
                    </div>
                </div>
                <div>
                    <h2>当前城市</h2>
                    <ul>
                        <li>上海</li>
                    </ul>
                </div>
            </mt-popup>
            <div class="search-box">
                <img src="../../../public/zhengzu/fangdajin.png">输入区域、小区搜索源
            </div>
            <div class="my">
                <img src="../../../public/zhengzu/my.png">
            </div> 
        </div> 
        <!-- 主体-条件设置 -->
        <div class="tab-out">
            <ul>
                <li><span>位置</span><img src="../../../public/zhengzu/arrow-down.png"></li>
                <li><span>租金</span><img src="../../../public/zhengzu/arrow-down.png"></li>
                <li class="active"><span>合租</span><img src="../../../public/zhengzu/arrow-down.png"></li>
                <li><span>更多</span><img src="../../../public/zhengzu/arrow-down.png"></li>
            </ul>
        </div>
          <!-- 主体-条件搜索 -->
        <div class="short-cut">
            <ul>
                <li><span>租金月付</span></li>
                <li><span>近地铁</span></li>
                <li><img src="../../../public/zhengzu/trust.png"><span>平台认证</span></li>
                <li><span>独卫</span></li>
            </ul>
        </div>
        <!-- 排序按钮 -->
        <div class="sort" @click="show">
            <p>排序</p>
        </div>
        <!-- 显示的排序列表 -->
        
        <mt-popup class="sort-container" v-model="sortShow" position="bottom">
            <ul class="sortBox">
                <li class="active">默认排序</li>
                <li>最新上架时间</li>
                <li>租金从低到高</li>
                <li>租金从高到低</li>
                <li>面积从小到大</li>
                <li>面积从大到小</li>
            </ul>
        </mt-popup>
        <!-- 返回顶部按钮 -->
        <div class="toTop">
            <p>回顶部</p>
        </div>
        <!-- 主体-房源信息 -->
        <div class="house-list">
            <div class="house-card">
                <div class="base-info">
                    <div class="main-photo">
                        <img src="../../../public/zhengzu/house.png">
                        <div class="photo-info">房东提供 · 6</div>
                    </div>
                    <div class="details">
                        <p class="title">
                            <span>合租</span>
                            <span> 玫瑰坊</span>
                        </p>
                        <p class="room-info">18M² | 朝北</p>
                        <p class="labels">
                            <span class="red">租金月付</span>
                            <span>近地铁</span>
                            <span>新上架</span>
                            <span>电梯房</span>
                        </p>
                        <p class="trafic">
                            <img src="../../../public/zhengzu/position.png">
                            <span>1号线(康复路站),步行14分钟</span>
                        </p>
                    </div>
                </div>
                <div class="extra-info">
                    <div class="agency-info">
                        <div class="header">
                            <span>美丽屋公寓（分散式）</span>
                            <img src="../../../public/zhengzu/pinpai.png">
                        </div>
                        <div class="btn">进店</div>
                    </div>
                    <div class="price-info">
                        <div class="price">
                            <span>￥1350</span>/月
                        </div>
                        <div class="use-time">
                            <span>&nbsp;随时入住</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主体-房源信息 -->
        <div class="house-list">
            <div class="house-card">
                <div class="base-info">
                    <div class="main-photo">
                        <img src="../../../public/zhengzu/house.png">
                        <div class="photo-info">房东提供 · 6</div>
                    </div>
                    <div class="details">
                        <p class="title">
                            <span>合租</span>
                            <span> 玫瑰坊</span>
                        </p>
                        <p class="room-info">18M² | 朝北</p>
                        <p class="labels">
                            <span class="red">租金月付</span>
                            <span>近地铁</span>
                            <span>新上架</span>
                            <span>电梯房</span>
                        </p>
                        <p class="trafic">
                            <img src="../../../public/zhengzu/position.png">
                            <span>1号线(康复路站),步行14分钟</span>
                        </p>
                    </div>
                </div>
                <div class="extra-info">
                    <div class="agency-info">
                        <div class="header">
                            <span>美丽屋公寓（分散式）</span>
                            <img src="../../../public/zhengzu/pinpai.png">
                        </div>
                        <div class="btn">进店</div>
                    </div>
                    <div class="price-info">
                        <div class="price">
                            <span>￥1350</span>/月
                        </div>
                        <div class="use-time">
                            <span>&nbsp;随时入住</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主体-房源信息 -->
        <div class="house-list">
            <div class="house-card">
                <div class="base-info">
                    <div class="main-photo">
                        <img src="../../../public/zhengzu/house.png">
                        <div class="photo-info">房东提供 · 6</div>
                    </div>
                    <div class="details">
                        <p class="title">
                            <span>合租</span>
                            <span> 玫瑰坊</span>
                        </p>
                        <p class="room-info">18M² | 朝北</p>
                        <p class="labels">
                            <span class="red">租金月付</span>
                            <span>近地铁</span>
                            <span>新上架</span>
                            <span>电梯房</span>
                        </p>
                        <p class="trafic">
                            <img src="../../../public/zhengzu/position.png">
                            <span>1号线(康复路站),步行14分钟</span>
                        </p>
                    </div>
                </div>
                <div class="extra-info">
                    <div class="agency-info">
                        <div class="header">
                            <span>美丽屋公寓（分散式）</span>
                            <img src="../../../public/zhengzu/pinpai.png">
                        </div>
                        <div class="btn">进店</div>
                    </div>
                    <div class="price-info">
                        <div class="price">
                            <span>￥1350</span>/月
                        </div>
                        <div class="use-time">
                            <span>&nbsp;随时入住</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主体-房源信息 -->
        <div class="house-list">
            <div class="house-card">
                <div class="base-info">
                    <div class="main-photo">
                        <img src="../../../public/zhengzu/house.png">
                        <div class="photo-info">房东提供 · 6</div>
                    </div>
                    <div class="details">
                        <p class="title">
                            <span>合租</span>
                            <span> 玫瑰坊</span>
                        </p>
                        <p class="room-info">18M² | 朝北</p>
                        <p class="labels">
                            <span class="red">租金月付</span>
                            <span>近地铁</span>
                            <span>新上架</span>
                            <span>电梯房</span>
                        </p>
                        <p class="trafic">
                            <img src="../../../public/zhengzu/position.png">
                            <span>1号线(康复路站),步行14分钟</span>
                        </p>
                    </div>
                </div>
                <div class="extra-info">
                    <div class="agency-info">
                        <div class="header">
                            <span>美丽屋公寓（分散式）</span>
                            <img src="../../../public/zhengzu/pinpai.png">
                        </div>
                        <div class="btn">进店</div>
                    </div>
                    <div class="price-info">
                        <div class="price">
                            <span>￥1350</span>/月
                        </div>
                        <div class="use-time">
                            <span>&nbsp;随时入住</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主体-房源信息 -->
        <div class="house-list">
            <div class="house-card">
                <div class="base-info">
                    <div class="main-photo">
                        <img src="../../../public/zhengzu/house.png">
                        <div class="photo-info">房东提供 · 6</div>
                    </div>
                    <div class="details">
                        <p class="title">
                            <span>合租</span>
                            <span> 玫瑰坊</span>
                        </p>
                        <p class="room-info">18M² | 朝北</p>
                        <p class="labels">
                            <span class="red">租金月付</span>
                            <span>近地铁</span>
                            <span>新上架</span>
                            <span>电梯房</span>
                        </p>
                        <p class="trafic">
                            <img src="../../../public/zhengzu/position.png">
                            <span>1号线(康复路站),步行14分钟</span>
                        </p>
                    </div>
                </div>
                <div class="extra-info">
                    <div class="agency-info">
                        <div class="header">
                            <span>美丽屋公寓（分散式）</span>
                            <img src="../../../public/zhengzu/pinpai.png">
                        </div>
                        <div class="btn">进店</div>
                    </div>
                    <div class="price-info">
                        <div class="price">
                            <span>￥1350</span>/月
                        </div>
                        <div class="use-time">
                            <span>&nbsp;随时入住</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sortShow:false,//控制sort()
            citiesShow:false,//控制城市选择列表的变量
        }
    },
    methods:{
        show(){
            if(!this.sortShow){
                this.sortShow=true;
            }else{
                this.sortShow=false;
            }
        },
        cities(){
           if(!this.citiesShow){
                this.citiesShow=true;
            }else{
                this.citiesShow=false;
            } 
        }
    },
    
}
</script>
<style scoped>
    .search-header{/*表头样式*/
        width: 100%;
        background: #ee3943;
        position:relative;
        height:0.88rem;
        color:#fff;
        font-size: .24rem;
    }
    .search-header>.home-icon{/*首页图标容器样式*/
        float:left;
        width:1rem;
        height:0.8rem;
        padding:0.2rem 0.3rem;
        box-sizing: border-box;
    }
    .search-header>.home-icon img{/*首页图标样式*/
        width:100%;
        height:100%;
        display: block;
    }
    .city-select{/*城市选择框样式*/
        float:left;
        padding:.23rem 0;
    }
    .city-select>span{/*城市选择框文字*/
        font-size:0.28rem;
        color:#fff;
        display:block;
        float: left;
        margin-right: 0.2rem;

    }
    .city-select>img{/*城市选择框三角图标*/
        width:.21rem;
        float:right;
        margin-top:0.12rem;
    }
    .search-box{/*搜索框样式*/
        float: left;
        width:4.31rem;
        height:.6rem;
        background-color: #fff;
        border-radius: 5px;
        margin-top: .13rem;
        margin-left: .25rem;
        font-size: .24rem;
        line-height: .6rem;
        color:#cbcbcb;
    }
    .search-box>img{/*搜索框搜索图标样式*/
        width:0.3rem;
        height:0.3rem;
        padding: 0 .2rem 0 .3rem;
        vertical-align: middle;
    }
    .search-header>.my{/*个人图标盒子样式*/
        float:right;
        width: 0.33rem;
        height:0.4rem;
        padding:.22rem .3rem .15rem;
    }
    .search-header>.my>img{/*个人图标图片样式*/
        width:100%;
        height:100%;
        display:block;
    }
    /**************************搜索条件设置***************************/
    .tab-out{
        width:100%;
        height:.86rem;
        background-color: #fff;
    }
    .tab-out>ul{
        height:100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .26rem;
        color:#5a5c5d;
    }
    .tab-out>ul>li+.active{
        color:#ee3943;
    }
    .tab-out>ul img{
        width:.17rem;
        height:.1rem;
        vertical-align: middle;
        margin-left: .1rem;
    }
    /****************************检索条件*******************************/
    .short-cut{
        width:100%;
        background-color: #fff;
        height:.88rem;
        border-bottom: 1px solid #ececec;
    }
    .short-cut>ul{
        list-style:none;
        font-size:.26rem;
        color:#a0a0a0;
        display: flex;
        justify-content: space-around;
        align-items: center; 
    }
    .short-cut>ul>li{
        padding:0 .28rem;
        height:0.56rem;
        border-radius: .28rem;
        background-color: #f6f6f6;
        line-height: .56rem;
    }
    .short-cut>ul img{
        width:.24rem;
        height:.28rem;
        padding-right:.1rem;
    }
    /*************************排序按钮***************************/
    .sort{
        position: fixed;
        width:.9rem;
        height:.9rem;
        font-size: .2rem;
        color: #fff;
        bottom: 2.56rem;
        right: .3rem;
        background:url(../../../public/zhengzu/sort.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .sort>p{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        text-align: center;
    }
    /***********************房源信息*************************/
    .house-list{
        width:100%;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom:15px;
    }
    .house-card{
        box-sizing: border-box;
        margin:0 .3rem;
    }
    .base-info{
        width:100%;
        display: flex;
        justify-content:flex-start;
    }
    .main-photo{
        width:2.1rem;
        height:1.6rem;
        border-radius:.08rem;
        overflow: hidden;
        margin:.4rem .3rem .4rem 0;
        position: relative;
    }
    .main-photo>img{
        width:100%;
        height:100%;
    }
    .photo-info{
        width: 100%;
        height:.34rem;
        position: absolute;
        background-color: rgba(28,28,28,.4);
        bottom:0px;
        color:#fff;
        font-size: .2rem;
        text-align: center;
        line-height: .34rem;
    }
    .details{
        width:4.2rem;
    }
    .details .title{
        font-size: .34rem;
        color:#1c1c1c;
        font-weight: 700;
        line-height: .54rem;
        margin-top: .2rem;
        overflow: hidden;
    }
    .details .room-info{
        font-size: .28rem;
        color:#1c1c1c;
        line-height: .48rem;
        overflow: hidden;
    }
    .details .labels{
        height:.38rem;
        display: flex;
        justify-content: flex-start;
        margin-top: .1rem;
    }
    .details .labels>span{
        height:100%;
        font-size: .22rem;
        color:#9b9b9b;
        line-height: .38rem;
        margin-right: .1rem;
    }
    .details .labels>span.red{
        color:#f3787a;
    }
    .trafic{
        width:100%;
        height:.64rem;
        position: relative;
    }
    .trafic>img{
        position: absolute;
        left: 0;
        top: .2rem;
        display: inline-block;
        width: .2rem;
        height: .24rem;
    }
    .trafic>span{
        box-sizing: border-box;
        padding-left: .32rem;
        width: 100%;
        color: #9b9b9b;
        font-size: .22rem;
        line-height: .64rem;
        overflow: hidden;
        position: absolute;
        left:.05rem;
    }
    .extra-info{
        display: flex;
        justify-content: space-between;
    }
    .agency-info{
        width:2.1rem;
        height:0.92rem; 
    }
    .agency-info>.header{
        display: flex;
        align-items: center;
        margin-bottom: .2rem;
    }
    .agency-info>.header>span{
        font-size: .24rem;
        color: #1c1c1c;
        margin-right: .12rem;
        max-width: 1.54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .agency-info>.header>img{
        width:.44rem;
        height:.22rem;
    }
    .agency-info>.btn{
        width:1rem;
        height:.4rem;
        font-size: .24rem;
        color:#646464;
        border:1px solid #d9d9d9;
        border-radius: .2rem;
        text-align: center;
        line-height: .4rem;
        margin:0 auto;
    }
    .price-info{
        display:flex;
        flex-direction: column;
        text-align: right;
    }
    .price-info>.price{
        align-items: center;
        color: #ee3943;
        font-size: .24rem;
    }
    .price-info>.price>span{
        font-size: .32rem;
        font-weight: 700;
    }
    .use-time{
        font-size:.28rem;
        margin-top:.1rem;
    }
    .use-time span{
        color: #f58f32;
        font-weight:700;
    }
    .toTop{
        position: fixed;
        width: .9rem;
        height: .9rem;
        background-image: url(../../../public/zhengzu/toTop.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        font-size: .2rem;
        color: #fff;
        bottom: 1.28rem;
        right: .3rem;
        animation: .7s opacity2 0s;
        -webkit-animation: .7s opacity2 0s;
    }
    .toTop>p{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        text-align: center;
    }
    /*****************************************排序列表*******************************************/
    .sort-container{
        width:100%;
    }
    .sortBox{
        list-style: none;
        width:100%;
        background-color: #fff;
        text-align: center;
    }
    .sortBox>li{
        height: .9rem;
        line-height: .9rem;
        box-sizing: border-box;
        padding-right: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #5a5c5d;
        font-size: .28rem;
        margin-left: .3rem;
        border-bottom: 1px solid #ececec;
    }
    .sortBox>li.active{
        color: red;
    }
    /************************************城市列表***********************************/
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
</style>