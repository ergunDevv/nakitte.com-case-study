import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProjectsView from '../views/ProjectsView.vue'
import ProjectCardView from '../views/ProjectCardView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/projects/card",
      name: "projectCard",
      component: ProjectCardView,
    },

  ],
});
export default router;
