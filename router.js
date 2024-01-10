import Vue from 'vue'
import Router from 'vue-Router'
import count from './component/count.vue'

vue.use(Router)

export default new Router({
    Routers:[
        {
            patn:'/count',component:count
        }
    ]
})