<template>
    <div class="Zhengzu-selected">
        <!-------------------------导航--------------------------->
        <div class="tab-out">
            <ul>
                <li :class="{active:tabIndex==i}" v-for="(item,i) of taboutList" :key="i" @click="tabChange(i)">
                    <span>{{item}}</span>
                    <span class="tab-icon"></span>
                </li>
            </ul>
        </div>
        <!-------------------------主体--------------------------->
        <div class="main-container">
            <!-- 位置板块 -->
            <div class="position-box" v-if="tabIndex==0">
                <div class="position-tab">
                    <div @click="tabPosition" :class="{positionTabSelected:positionIndex==0}" data-index=0><span data-index=0>区域</span></div>
                    <div @click="tabPosition" :class="{positionTabSelected:positionIndex==1}" data-index=1><span data-index=1>地铁</span></div>
                </div>
                <div class="position-options">
                    <div v-show="positionIndex==0">
                        <ul>
                            <li class="position-item-left" :class="{active:i==countryIndex}" v-for="(item,i) of countryList" :key="i" @click="changeCountry(i)">{{item.country}}</li>
                        </ul>
                        <ul>
                            <li class="position-item-right" :class="{active:zoneIndex==i}" v-for="(item,i) of countryList[countryIndex].zone" :key="i" @click="zoneSelect(i)">{{item}} </li>
                        </ul>
                    </div>
                    <div v-show="positionIndex==1">
                        <ul>
                            <li class="position-item-left" :class="{active:i==subwayIndex}" v-for="(item,i) of subwayList" :key="i" @click="changeSubway(i)">{{item.line}}</li>
                        </ul>
                        <ul>
                            <li class="position-item-right" :class="{active:stationIndex==i}" v-for="(item,i) of subwayList[subwayIndex].station" :key="i" @click="stationSelect(i)">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 租金板块 -->
            <div class="rent-box" v-if="tabIndex==1">
                <ul class="rent-options">
                    <li @click="priceSelect(i)" class="rent-option" :class="{active:priceIndex==i}" v-for="(item,i) of rentList" :key="i">
                        {{item}}
                    </li>
                </ul>
                <div class="rent-price">
                    <span class="price-self">自定义价格</span>
                    <span class="price-unit"> （单位：元）</span>
                    <span class="price-confirm" :class="{active:sliderConfirm}">确定</span>
                </div>
                <slider :sliderConfirm.sync="sliderConfirm"></slider>/******引入滑竿组件******/
                <ul class="range-ruler">
                    <li>0</li>
                    <li>1000</li>
                    <li>2000</li>
                    <li>3000</li>
                    <li>4000</li>
                    <li>不限</li>
                </ul>
            </div>
            
            
            <!-- 户型板块 -->
            <div class="house-box" v-if="tabIndex==2">
                <div class="position-options">
                    <ul>
                        <li class="position-item-left" v-for="(item,i) of houseList" :key="i" :class="{active:houseIndex==i}" @click="houseChange(i)">{{item.type}}</li>
                    </ul>
                    <ul>
                        <li class="position-item-right" v-for="(item,i) of houseList[houseIndex].roomCount" :key="i" :class="{active:roomCountIndex==i}" @click="roomCountChange(i)">{{item}}</li>
                    </ul>
                </div>
            </div>
            <!-- 更多板块 -->
            <div class="more-box" v-if="tabIndex==3">
                <div class="more-options">
                    <div class="title-new">
                        特色
                    </div>
                    <div class="content-new">
                        <ul>
                            <li v-for="(item,i) of newList" :key="i" :class="{active:newChecked.includes(i)}" @click="chooseNew(i)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="title-new">
                        保障
                    </div>
                    <div class="content-new">
                        <ul>
                            <li :class="{active:promiseChecked.includes(i)}" v-for="(item,i) of promiseList" :key="i" @click="choosePromise(i)">{{item}}</li>
                        </ul>
                    </div>
                    <div>
                        <div class="btns-new">
                            <div class="btn-new btn-clean" @click="cleanChecked">清空</div>
                            <div class="btn-new btn-confirm" @click="queryHouse">确认</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :style="maskStyle" @click="clickMask"></div><!-- 遮罩层 -->
    </div>
</template>
<script>
import slider from './Slider.vue';
export default {
    data(){
        return{
            phoneHeight:0,
            maskStyle:{
                height:"",
                width:"100%",
                background:"rgba(0, 0, 0, 0.5)",
                position:"fixed",
                left:0,
                top:0,
                zIndex:-1
            },
            positionIndex:0,
            taboutList:["位置","租金","户型","更多"],//保存导航栏的内容,
            tabIndex:0,//控制导航选中样式切换的变量
            countryList:[
                {country:"全部",zone:[]},
                {country:"灞桥",zone:["全部","世博公园","十里堡","桃花潭","席王","洪庆街道","浐河西路"]},
                {country:"碑林",zone:["全部","东关正街","南稍门","南门","李家村","西安交大","西工大"]},
                {country:"雁塔",zone:["全部","光华路","南湖","吉祥村","大寨路","大唐芙蓉园","中兴产业园"]}
            ],
            countryIndex:0,//保存区县下标的变量
            zoneIndex:0,//保存区域下标的变量
            subwayIndex:0,//保存地铁线路下标的变量
            stationIndex:0,//保存地体站下标的变量
            subwayList:[
                {line:"全部",station:[]},
                {line:"1号线",station:["全部","后卫寨","三桥","皂河","枣园","汉城路","开远门"]},
                {line:"2号线",station:["全部","韦曲南","航天城","凤栖原","三爻","会展中心","纬一街"]},
                {line:"3号线",station:["全部","保税区","新筑","双寨","国际港务区","务庄","香湖湾"]}
            ],
            rentList:[
                "不限","1500元以下","1500-2000元","2000-3000元","3000-4000元","4000-5000元","5000元以上"
            ],
            priceIndex:0,
            houseList:[
                {type:"不限",roomCount:[]},
                {type:"合租",roomCount:["不限","一户合租","两户合租","三户合租","四户合租"]},
                {type:"整租",roomCount:["不限","一室","两室","三室","四室及以上"]},
            ],
            houseIndex:0,
            roomCountIndex:0,
            newList:["月付","新上架","近地铁","主卧","朝南","独卫","带阳台","精装","独立厨房","智能电表","家电全配","电梯房","非一楼","转租","精品房源","品牌优选"],
            promiseList:["全网底价","阳光收费","平台认证"],
            newChecked:[],
            promiseChecked:[],
            sliderConfirm:false,
        }
    },
    props:["zselectShow"]
    ,
    watch(){

    },
    created() {
        var phoneHeight=window.screen.height;
        this.maskStyle.height=phoneHeight+"px";
        this.tabIndex=this.tabIndexS;
        // this.tabIndex=this.$route.query.tabIndex
    },
    updated() {
        
        
    },
    methods: {
        clickMask(){//点击遮罩层函数
            this.$emit('update:zselectShow',false) 
        },
        tabChange(i){//改变导航栏默认样式的函数
            this.tabIndex=i;
        },
        tabPosition(e){//切换位置板块中区域和地铁模块的函数
            this.positionIndex=e.target.dataset.index;
        },
        changeCountry(i){
            this.countryIndex=i;
        },
        changeSubway(i){
            this.subwayIndex=i;
        },
        zoneSelect(i){
            this.zoneIndex=i;
        },
        stationSelect(i){
            this.stationIndex=i;
        },
        houseChange(i){
            this.houseIndex=i;
        },
        roomCountChange(i){
            this.roomCountIndex=i;
        },
        priceSelect(i){
            this.priceIndex=i;
        },
        chooseNew(i){
            if(this.newChecked.includes(i)){
                this.newChecked=this.newChecked.filter((el)=>{return el!=i})
                // console.log(this.newChecked.filter((el)=>{return el!=i}));
            }else{
                this.newChecked.push(i);
            }
        },
        choosePromise(i){
            if(this.promiseChecked.includes(i)){
                this.promiseChecked=this.promiseChecked.filter((el)=>{return el!=i})
            }else{
                this.promiseChecked.push(i);
            }
        },
        cleanChecked(){
            this.newChecked=[];
            this.promiseChecked=[];
        },
        queryHouse(){
            // 发送ajax请求
        }

    },
    components:{slider}
}
</script>
<style scoped>
    /************************************************导航*********************************************/
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
    .tab-out>ul>li.active{
        color:#ee3943;
    }
    .tab-out>ul>li.active>.tab-icon{
        background: url(../../../public/query/arrow-up.png) no-repeat 50%;
        background-size: 100% 100%;
    }
    .tab-out>ul .tab-icon{
        background: url(../../../public/query/arrow-down.png) no-repeat 50%;
        background-size: 100% 100%;
        display: inline-block;
        width: .17rem;
        height: .1rem;
        vertical-align: middle;
        margin-left: .1rem;
    }
    /************************************************主体*******************************************************/
    .position-box{
        background-color: #fff;
        height:7.8rem;
        width:100%;
        overflow:hidden;
    }
    .position-tab{
        width:100%;
        height: .9rem;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        display: flex;
    }
    .position-tab>div{
        width:50%;
        height:100%; 
        flex: 1;
        text-align: center;
        line-height: .9rem;
        font-size: .28rem;
    }
    .position-tab>div>span{
        display: inline-block;
        height: .9rem;
        box-sizing: border-box;
        font-size: .28rem;
    }
    .position-tab>div.positionTabSelected>span{
        border-bottom: 4px solid #ee3943;
        color: #ee3943;
    }
    /*********************************************************************/
    .position-options{
        display: flex;
        height: 100%;
        width: 100%;
    }
    .position-options>div{
        width:100%;
        height: 100%;
        overflow: auto;
        font-size: .28rem;
        background:#fff;
        display: flex;
    }
    .position-options ul{
        width:50%;
    }
    .position-options ul>li{
        height: .9rem;
        line-height: .9rem;
        box-sizing: border-box;
        padding-right: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #5a5c5d;
    }
    .position-options ul>li.active{
        background-color: #fff;
        color: #ee3943;
    }
    .position-options ul:first-child{
        background-color:#f0f0f0;
    }
    .position-item-left{
        padding-left: .3rem;
    }
    .position-item-right{
        margin-left: .3rem;
        border-bottom: 1px solid #ececec;
    }
    /****************************租金板块*****************************/
    .rent-box{
        background-color: #fff;
        font-size: 0;
    }
    .rent-options{
        padding-top: .4rem;
        width:100%;
    }
    .rent-options>.rent-option{
        display: inline-block;
        width: 2.09rem;
        height: .66rem;
        line-height: .66rem;
        background-color: #f8f8f8;
        margin: 0 0 .3rem .3rem;
        color: #a3a2a2;
        font-size: .28rem;
        text-align: center;
        overflow: hidden;
    }
    .rent-options>.rent-option.active{
        background-color: #eff6fa;
        color: #2f92ca;
    }
    .rent-price{
        padding: .2rem .3rem;
        display: flex;
    }
    .rent-price>span{
        display: inline-block;
        height: .5rem;
        line-height: .5rem;
    }
    .price-self{
        font-size: .28rem;
        color: #5a5c5d;
    }
    .price-unit{
        font-size: .26rem;
        color: #a3a2a2;
        flex:1;
    }
    .price-confirm{
        font-size: .24rem;
        color: #a3a2a2;
        width: 1.14rem;
        background-color: #f8f8f8;
        border-radius: 2px;
        text-align: center;
    }
    .price-confirm.active{
        color: #fff;
        background-color: #e8323f;
    }
    .range-ruler{
        padding: .45rem .6rem .7rem;
        display: flex;
    }
    .range-ruler>li{
        width: .6rem;
        font-size: .28rem;
        color: #a3a2a2;
        flex: 1;
        text-align: center;
    }
    .house-box{
        background:#fff;
        height:5.4rem;
        font-size: .28rem;
    }
    /**********************************更多板块***********************************/
    .more-box{
        width:100%;
        height:7.5rem;
        background: #fff;
    }
    .more-options{
        height: unset;
        padding: .3rem;
        padding-top: 0;
        box-sizing: border-box;
        font-size: .28rem;
        display: block;
        overflow-y: auto;
    }
    .title-new{
        line-height: .6rem;
        margin-bottom: .3rem;
        color: #5a5c5d;
    }
    .content-new{
        width: 100%;
    }
    .content-new>ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .content-new>ul>li{
        color: #a6a4a5;
        background-color: #f8f8f8;
        width: 1.58rem;
        height: .68rem;
        text-align: center;
        line-height: .68rem;
        margin-bottom: .2rem;
        border-radius: 2px;
    }
    .content-new>ul>li.active{
        background-color: #f0f3f8;
        color: #a4cff3;
    }
    .btns-new{
        font-size: .28rem;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #ececec;
        margin: 0 -.3rem;
        padding: 0 .3rem;
        padding-top: .3rem;
    }
    .btns-new>.btn-new{
        width: 1.6rem;
        height: .68rem;
        line-height: .68rem;
        text-align: center;
        border-radius: 2px;
    }
    .btns-new>.btn-clean{
        color: #5a5c5d;
        background-color: #f8f8f8;
    }
    .btns-new>.btn-confirm{
        color: #fff;
        background-color: #ee3943;
    }
</style>