import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/IndexView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "学子商城首页",
    },
    component: IndexView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
    },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/productDetail",
    name: "productDetail",
    meta: {
      title: "学子商城-商品详情",
    },
    component: () => import("../views/ProdutsDetails.vue"),
  },
  {
    path: "/productList/:kw?",
    props: true,
    name: "productList",
    meta: {
      title: "学子商城-商品列表",
    },
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      hideHeader: true,
      title: "学子注册页面",
    },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      hideHeader: true,
      title: "学子商城登录页面",
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "404页面",
    },
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
