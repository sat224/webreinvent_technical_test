import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import PostDetails from "./pages/PostDetails.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/posts", component: Posts },
  { path: "/post/:id", component: PostDetails },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
