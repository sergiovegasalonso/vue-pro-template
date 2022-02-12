import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/Home.vue";
import NotFound from "@/views/not-found/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    {
        path: "/about",
        name: "About",
        component: () =>
            import("@/views/about/About.vue"),
        meta: {
            first: "first",
            second: "second",
        }
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
})

export default router;
