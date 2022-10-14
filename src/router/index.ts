import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
// import Who from "../views/footerPages/Who.vue"
// import Usage from "../views/footerPages/Usage.vue"
// import Privacy from "../views/footerPages/Privacy.vue"
import post from "../views/post.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/post/:id",
    name: "post",
    component: post,
  },
  // {
  //   path: "/who",
  //   name: "who",
  //   component: Who,
  // },
  // {
  //   path: "/usage",
  //   name: "usage",
  //   component: Usage,
  // },
  // {
  //   path: "/privacy",
  //   name: "privacy",
  //   component: Privacy,
  // },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
