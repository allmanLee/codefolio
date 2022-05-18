import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/main.vue";
import projectDetail from "../views/project/ProjectDetail.vue";
import projectCreate from "../views/project/ProjectCreate.vue";
import profileDetail from "../views/profile/ProfileDetail.vue";

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
  {
    path: "/project-create",
    name: "projectCreate",
    component: projectCreate,
  },
  {
    path: "/profile/:id",
    name: "profileDetail",
    component: profileDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
