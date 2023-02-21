import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../features/Home/HomeView/HomeView.vue";
import ProjectsView from '../features/Projects/ProjectsView/ProjectsView.vue'
import ProjectCardView from '../features/ProjectCard/ProjectCardView/ProjectCardView.vue'

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
