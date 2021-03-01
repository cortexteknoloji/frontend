import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/dashboard.vue'
import UiKit from '../views/ui-kit.vue'

Vue.use(VueRouter);
const routes = [
    {
        path: '*',
        redirect: '/website/create-resume',
    },
    {
        path: '/',
        name: '',
        component: Dashboard,
        meta: {
            title: 'CHP - Anasayfa',
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'CHP - Anasayfa',
        },
    },
    {
        path: '/ui-kit',
        name: 'uiKit',
        component: UiKit,
        meta: {
            title: 'CHP - UI KIT',
        },
    },
];

const index = new VueRouter({
    mode: 'history',
    routes,
});

export default index;
