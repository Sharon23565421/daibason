import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import LoginView from "@/views/LoginView.vue";
// import storeView from "@/views/storeView.vue";
// import NotFound from "@/views/NotFoundView.vue";

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
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/LoginView.vue"),
  },
  {
    path: "/RegisterView",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@/views/RegisterView.vue"),
  },
  {
    path: "/RegSuccess",
    name: "RegSuccess",
    component: () =>
      import(/* webpackChunkName: "RegSuccess" */ "@/views/RegSuccess.vue"),
  },
  {
    path: "/store",
    name: "/store",
    component: () =>
      import(/* webpackChunkName: "store" */ "@/views/storeView.vue"),
  },
  {
    path: "/mrt",
    name: "/mrt",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "mrt" */ "@/views/mrtView.vue"),
  },
  {
    path: "/game",
    name: "/game",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "game" */ "@/views/gameView.vue"),
  },
  {
    path: "/contribute",
    name: "/contribute",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "contribute" */ "@/views/contributeView.vue"),
  },
  {
    path: "/newView",
    name: "/newView",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "newView" */ "@/views/newView.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "/NotFound",
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
