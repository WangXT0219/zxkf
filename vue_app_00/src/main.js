import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import '../public/reset.css'
//引入第三方组件库 mint ui
//1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//2:单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui注册vue实例中
Vue.use(MintUI)
//5:引入axios
import axios from "axios"
//6:配置axios的基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//7.配置axios保存session信息
axios.defaults.withCredentials=true
//8.将axios注册vue 实例中
//由于axios不支持use 将实例添加vue原型
Vue.prototype.axios=axios;
//main.js
//9.引入vuex第三方模块
import Vuex from "vuex";
//11.注册Vuex
Vue.use(Vuex);
//10.创建Vuex存储对象
var store=new Vuex.Store({
  state:{cartCount:0},     //共享数据
  mutations:{//添加修改数据函数
    increment(state){//购物车数量加1
      state.cartCount++;
    },  
    clear(state){//清空购物车
      state.cartCount=0;
    }
  }, 
  getters:{
    getCartCount(state){
      return state.cartCount;
    }
  },   //添加获取数据函数
  actions:{}    //添加异步操作数据函数
});

//12.将实例对象添加Vue中
new Vue({
  router,
  render:h=>h(App),
  store
}).$mount('#app')

Vue.config.productionTip = false

