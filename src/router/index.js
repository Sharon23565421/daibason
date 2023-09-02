import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import storeView from "@/views/storeView.vue";

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
    path: "/store",
    name: "/store",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/storeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
