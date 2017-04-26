import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/home';
import Page from '@/components/page/page';

import Config from '../config';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/page',
            name: 'Page',
            component: Page,
            meta: {
                title: 'Página',
            },
        },
    ],
});

router.afterEach((to) => {
    document.title = to.meta.title ? `${to.meta.title} ${Config.separator} ${Config.title}` : Config.title;
});

export default router;
