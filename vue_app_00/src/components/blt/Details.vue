<template>
    <div>
        <!-- 详情部分 -->
        <div class="details">
            <!--返回按钮-->
            <div class="backBtn">
                <span>&nbsp;</span>
            </div>
            <!-- 返回顶部按钮 -->
            <div class="toTop">
                <p>回顶部</p>
            </div>
            <!--轮播图-->
            <div class="carousel">
                <ul>
                    <li><img src="../../../public/details/room.jpg"></li>
                </ul>
                <div class="swiper-count">
                    <div class="swiper-count-text">1/6</div>
                    <div class="swiper-count-bg"></div>
                </div>
            </div>
            <!--认证-->
            <div class="renzheng"><img src="../../../public/details/renzheng.png"></div>
            <!--房屋详情信息-->
            <div class="details-info">
                <ul>
                    <!-- 详情文字内容-->
                    <li>
                        <h1>合租 - 玫瑰坊</h1>
                        <p class="house-price"><span class="house-price-numble">¥1350/月</span></p>
                        <p style="height: 0.2rem;">&nbsp;</p>
                    </li>
                    <li>
                        <ul class="house-ms">
                            <li>朝北-次卧</li>
                            <li>18M²</li>
                            <li>电梯10/24层</li>
                        </ul>    
                    </li>
                    <li>
                        <ul class="house-label">
                            <li>近地铁</li>
                            <li>新上架</li>
                            <li>电梯房</li>
                            <li>非一楼</li>
                        </ul>
                    </li>
                </ul>
                <!-- 详情地理信息 -->
                <div class="mapText">
                    <ul>
                        <li><div class="active"><span class="iconDz"></span>地址</div></li>
                        <li><div><span class="iconJt"></span>交通</div></li>
                        <li><div><span class="iconPt"></span>周边配套</div></li>
                    </ul>
                    <div class="mapTextConter" style="">碑林&nbsp;东关正街&nbsp;长乐坊18号
                    </div>
                    <div class="mapTextConter" style="display:none;">
                        203路;228路;237路;240路;408路;410路;512路;517路;709路;709路区间;K622路 <br>
                        1号线(康复路站)，步行14分钟|3号线(长乐公园站)|1号线;3号线(通化门站)|1号线(朝阳门站)
                    </div>
                    <div class="mapTextConter" style="display:none">
                        <ul>
                            <li><span> 饮食：</span>王李记冷锅串串、澄城水盆羊肉、小六汤包、桥头米线涮牛肚、重庆四座火锅
                            </li>
                            <li><span> 购物：</span>华东万悦城、西北商贸中心、益田假日世界、东门美博城、五环交大Outlets工厂店
                            </li>
                            <li><span> 生活：</span>西安碑林郭西京诊所、交通银行ATM、雅诗美发沙龙
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 详情地图 -->
                <div class="mapImg">
                    <img src="../../../public/details/map.png">
                    <div class="map-text-wrapper">
                        <p  class="map-text"><span class="dingwei"></span>
                            碑林&nbsp;东关正街&nbsp;长乐坊18号
                        </p>
                    </div>
                </div>
                <!-- 详情配套设施 -->
                <div>
                    <div class="tabSheshi">
                        <ul>
                            <li><span class="active">独用设施</span></li> <li><span class="">公用设施</span></li>
                        </ul>
                    </div>
                    <ul id="example-1" class="icon-list" style="">
                        <li><img src="../../../public/details/1.png"></li>
                        <li><img src="../../../public/details/2.png"></li>
                        <li><img src="../../../public/details/3.png"></li>
                        <li><img src="../../../public/details/4.png"></li>
                        <li><img src="../../../public/details/5.png"></li>
                    </ul>
                </div>
            </div>
            <!-- 用户点评区域 -->
            <div class="argue">
                <h2>— 用户点评 —</h2>  
                <div class="commentNull">
                    <p>还没有评价，评一条占个沙发</p> 
                    <span class="btn">看房评价赢积分好礼</span>
                </div>
            </div>
            <!-- 点评区域下方广告 -->
            <div class="adv">
                <a href="">
                    <img src="../../../public/details/tongqinzufang.jpg">
                </a>
            </div>
            <!-- 举报 -->
            <div class="jubao">
                <img src="../../../public/details/jubao.png">
            </div>
            <!-- 页面顶部功能区 -->
            <div class="details-footer">
                <ul>
                    <li class="shoucang">
                        <img src="../../../public/details/sc.png">
                        <img style="display:none" src="../../../public/details/ysc.png">
                    </li>
                    <li class="into">进入门店</li>
                    <li class="call">电话房东
                        <img class="tishi" src="../../../public/details/tishi_phone.png">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            popupVisible:true,

        }
    }
}
</script>
<style scoped>
    .details{
        width:100%;
        height:100%;
        background-color: #f0f0f0;
        padding-bottom: 1rem;
    }
    /***************************返回按钮***************************/
    .backBtn{
        z-index: 110;
        position: absolute;
        top: .3rem;
        left: .3rem;
        width: .8rem;
        height: .8rem;
        text-align: center;
        background-color: rgba(0,0,0,.5);
        border-radius: 50%;
    }
    .backBtn>span{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        border: 2px solid #fff;
        border-width: 2px 2px 0 0;
        transform: rotate(-135deg);
        margin: .22rem 0 0 .15rem;
        z-index: 200;
    }
    /*******************************返回顶部按钮***********************************/
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
    /***************************轮播图样式*******************************/
    .carousel{
        width:100%;
        height:4.16rem;
        position: relative;
    }
    .carousel>ul{
        list-style: none;
        width: 100%;
        height:100%;
        overflow: hidden;
    }
    .carousel>ul>li{
        height:4.16rem;
        width:100%;
        display: flex;
        align-items: center;
    }
    .carousel li img{
        width:100%;
        vertical-align: middle;
        font-size: 0;
    }
    /************************轮播图数量**************************/
    .swiper-count-text{
        z-index: 100;
        text-align: center;
        line-height: .8rem;
        color: #fff;
        width: .8rem;
        height: .8rem;
        position: absolute;
        bottom: .2rem;
        right: .2rem;
        font-size: .24rem;
    }   
    .swiper-count-bg{
        width: .8rem;
        height: .8rem;
        background-color: #000;
        opacity: .5;
        border-radius: 50%;
        position: absolute;
        bottom: .2rem;
        right: .2rem;
    }
    /********************认证******************* */
    .renzheng{
        width: 100%;
        height:.86rem;
        overflow: hidden;
        font-size: 0;
    }
    .renzheng>img{
        width:100%;
    }
    /********************房屋详情信息******************* */
    .details-info{
        width:100%;
        box-sizing: border-box;
        padding-bottom: .2rem;
    }
    .details-info>ul{
        margin-bottom: 10px;
        background-color: #fff;
        font-size:0;
    }
    .details-info>ul>li:first-child>h1{
        font-size: .36rem;
        font-weight: 700;
        color: #424445;
        padding: 10px 4% 4px;
        width: 92%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .house-price{
        padding: 0 4%;
        position: relative;
        overflow: hidden;
        line-height: .52rem;
        font-size: .34rem;  
    }
    .house-price>span{
        color: #ee3943;
        overflow: hidden;
        line-height: .52rem;
        font-size: .32rem;
    }
    .house-ms{
        list-style:none;
        display: flex;
        justify-content: space-between;
        padding: .24rem 0;
        border: 1px solid #e7e7e7;
        border-width: 1px 0;
    }
    .house-ms>li{
        width:33.3%;
        text-align: center;
        border-right: 1px solid #f0f0f0;
        margin-right: -1px;
        height: .38rem;
        line-height: .38rem;
        color:#505050;
        font-size: .28rem;
    }
    .house-label{
        list-style: none;
        overflow: hidden;
        padding: 10px;
        border-bottom: 1px solid #e7e7e7;
    }
    .house-label>li{
        float: left;
        background-color: #f6f6f6;
        padding: 3px 9px;
        text-align: center;
        color: #9b9b9b;
        font-size: .28rem;
        margin: 5px 8px 5px 2px;
        border-radius: 2px;
        text-align: center;
    }
    /***********************************************地理信息*******************************************/
    .mapText>ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
    }
    .mapText>ul>li{
        width:33.3%;
        text-align: center;
        font-size: 0;
    }
    .mapText>ul>li>div{
        display: inline-block;
        padding: .3rem 0;
        font-size: .32rem;
        color: #5a5c5d;
    }
    .mapText>ul>li>div.active{
        color: #ee3943;
        border-bottom: .04rem solid #ee3943;
    }
    .mapText>ul>li>div>span{
        display: inline-block;
        vertical-align: middle;
        margin-right: .1rem;
        width: .26rem;
        height: .26rem;
        padding: 0;
    }
    .iconDz{
        background: url(../../../public/details/position-red.png) top no-repeat;
        background-size: .22rem .26rem;
    }
    .iconJt{
        background: url(../../../public/details/trafic.png) top no-repeat;
        background-size: .22rem .26rem;
    }
    .iconPt{
        background: url(../../../public/details/near.png) top no-repeat;
        background-size: .22rem .26rem;
    }
    .mapTextConter{
        padding: .4rem;
        line-height: .56rem;
        font-size: .28rem;
        color:#505050;
        background-color: #fff;
    }
    .mapTextConter>ul{
        list-style:none;
    }
    .mapTextConter li{
        margin-bottom: .1rem;
    }
    /*****************************************************地图************************************/
    .mapImg{
        width: 100%;
        height: 4rem;
        position: relative;
        padding-bottom: .4rem;
        background-color: #fff;
        margin-bottom: .2rem;
    }
    .mapImg>img{
        width:100%;
        height:100%;
    }
    .mapImg .map-text-wrapper{
        width: 5.57rem;
        height: .66rem;
        line-height: .66rem;
        margin: 0 auto;
        background: rgba(0,0,0,.6);
        color: #fff;
        border-radius: 4px;
        position: relative;
        top: -.76rem;
        margin-top: -.36rem;
        padding: 0 .5rem;
    }
    .mapImg .map-text-wrapper .map-text{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .28rem;
    }
    .mapImg .map-text-wrapper .map-text .dingwei{
        display: inline-block;
        width: .25rem;
        height: .3rem;
        background: url(../../../public/details/dingwei.png) top no-repeat;
        background-size: 100% 100%;
        vertical-align: sub;
    }
    /* ************************************设施区域********************************************** */
    .tabSheshi{
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        font-size: 0;
    }
    .tabSheshi>ul{
        display: flex;
        list-style: none;
    }
    .tabSheshi>ul>li{
        width:50%;
        text-align: center;
    }
    .tabSheshi li span.active{
        color: #ee3943;
        border-bottom: 2px solid #ee3943;
    }
    .tabSheshi li span{
        display: inline-block;
        padding: 10px 0;
        font-size: .32rem;
        color:#505050;
    }
    .icon-list{
        list-style: none;
        overflow: hidden;
        padding: 20px 0;
        background-color: #fff;
    }
    .icon-list>li{
        float: left;
        width: 20%;
        text-align: center;
        height: .92rem;
        margin-bottom: 10px;
    }
    .icon-list>li>img{
        height:100%;
    }
    /****************************************用户评论*************************************************/
    .argue{
        width:100%;
        margin-bottom: 10px;
        background-color: #fff;
        font-size: 0;
    }
    .argue>h2{
        font-size: .32rem;
        color: #5a5c5d;
        text-align: center;
        line-height: 1.12rem;
        font-weight: normal;
    }
    .argue>.commentNull{
        text-align: center;
        font-size: .28rem;
        color: #c4c4c4;
        padding: .4rem 0;
        min-height: .6rem;
    }
    .argue>.commentNull>p{
        margin: 0 0 .4rem;
    }
    .argue>.commentNull .btn{
        display: inline-block;
        color: #f85355;
        width: 3rem;
        height: .6rem;
        line-height: .6rem;
        border: 1px solid #f85355;
        border-radius: .04rem;
    }
    /********************************************广告区域**************************************************/
    .adv{
        width:100%;
        margin-bottom: .2rem;
        font-size: 0;
    }
    .adv>a{
        width:100%;
        text-decoration: none;
        font-size:0;
        display: inline-block;
    }
    .adv img{
        width:100%;
    }
    /************************************************举报***************************************************/
    .jubao{
        text-align: center;
        padding: .2rem 0;
        margin-bottom: 1.5rem;
        font-size: 0;
    }
    .jubao>img{
        width:.46rem;
        vertical-align: middle;
        font-size: 0;
    }
    /*********************************底部功能区******************************************/
    .details-footer{
        width: 100%;
        height:.98rem;
        font-size: .28rem;
        position:fixed;
        bottom:0;
        left:0;
        background-color: #fff;
        box-shadow: 0 0 14px #999;
    }
    .details-footer>ul{
        display: flex;
        list-style: none;
        width:100%;
    }
    .details-footer li{
        text-align: center;
        font-size: .28rem;
        width: 40%;
        height: .98rem;
        line-height: .98rem;
    }
    .details-footer .shoucang{
        width:20%;
    }
    .details-footer .shoucang>img{
        height:.64rem;
        vertical-align: middle;
        font-size: 0;
    }
    .details-footer .into{
        background-color: #e5e5e8;
        color: #ee3943;
    }
    .details-footer .call{
        background-color: #ee3943;
        color: #fff;
        position: relative;
    }
    .details-footer .tishi{
        width: 3.5rem;
        right: .2rem;
        position:absolute;
        left:-.72rem;
        top:-.8rem;
    }
</style>