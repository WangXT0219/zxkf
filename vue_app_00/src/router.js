import Vue from 'vue'
import Router from 'vue-router'

import Zhengzu from './components/blt/Zhengzu.vue'
import Details from './components/blt/Details.vue'

Vue.use(Router)
export default new Router({
    routes: [
        { path: "/Zhengzu", component: Zhengzu },
        { path: "/Details", component: Details }
    ]
})