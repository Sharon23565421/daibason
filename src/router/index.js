import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import storeView from "@/views/storeView.vue";
import NotFound from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Login",
    name: "/Login",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/LoginView.vue"),
  },
  {
    path: "/RegisterView",
    name: "/RegisterView",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "RegisterView" */ "@/views/RegisterView.vue"),
  },
  {
    path: "/store",
    name: "/store",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "store" */ "@/views/storeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "/NotFound",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "err" */ "@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
