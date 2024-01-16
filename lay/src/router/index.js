import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    component: () => import('@/views/page1')
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('@/views/page2')
                },
                {
                    path: '/page3',
                    name: 'page3',
                    component: () => import('@/views/page3')
                },
                {
                    path: '/page4',
                    name: 'page4',
                    component: () => import('@/views/page4')
                }
            ]
        }
    ]
})
export default router
// import Vue from 'vue'
// import Router from 'vue-router'
// import home from '@/views/home';

// Vue.use(Router)

// const router = new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: '/page3' // 重定向到 /page3
//         },
//         {
//             path: '',
//             name: 'home',
//             component: home,
//             children: [
//                 {
//                     path: '/page3',
//                     name: 'page3',
//                     component: () => import('@/views/page3')
//                 }
//             ]
//         }
//     ]
// })
// export default router
