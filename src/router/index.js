import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexView from "../views/IndexView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },
  {
    path: "/about",
    name: "about",
    
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
