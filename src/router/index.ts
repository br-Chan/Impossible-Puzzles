const KonigsbergView = () => import("@/features/konigsberg/routes/KonigsbergView.vue");
const AboutView = () => import("@/features/about/routes/AboutView.vue");
const HomeView = () => import("@/features/home_redundant/routes/HomeView.vue");
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/konigsberg",
            name: "Königsberg bridge problem",
            component: KonigsbergView,
        },
        {
            path: "/home",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView,
        },
        {
            path: "/",
            redirect: "/konigsberg",
        },
    ],
});

export default router;
