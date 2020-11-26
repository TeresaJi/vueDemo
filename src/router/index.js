import Vue from 'vue'
import Router from 'vue-router'
import text1 from '@/pages/text1/text1'
import text2 from '@/pages/text2/text2'
import text3 from '@/pages/text3/text3'
import text4 from '@/pages/text4/text4'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/text1',
        name: 'text1',
        component: text1
    }, {
        path: '/text2',
        name: 'text2',
        component: text2
    }, {
        path: '/text3',
        name: 'text3',
        component: text3
    }, {
        path: '/text4',
        name: 'text4',
        component: text4
    }],
    mode: 'history'
})