import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import PostDetails from "./pages/PostDetails.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/posts", component: Posts, name: "Posts" },
  { path: "/post/:id", component: PostDetails, name: "PostDetail" },
  { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.name === "Posts" && from.name === "PostDetail") {
      const y = sessionStorage.getItem("scrollY");
      return { top: y ? parseInt(y) : 0 };
    }
    return { top: 0 };
  },
});

export default router;
