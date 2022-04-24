import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/main.vue";
import projectDetail from "../views/project/ProjectDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Home,
  },
  {
    path: "/project-detail/:id",
    name: "projectDetail",
    component: projectDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
