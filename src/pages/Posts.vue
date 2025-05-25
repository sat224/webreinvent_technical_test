<script setup lang="ts">
import { onMounted } from "vue";
import { usePostStore } from "../store/post";
import PostCard from "../components/PostCard.vue";
const postStore = usePostStore();
onMounted(() => postStore.fetchAllPosts());
</script>

<template>
  <div class="main">
    <RouterLink to="/">Go to Home</RouterLink>
    <h1 class="text-2xl font-bold">Welcome to the Posts Page</h1>
  </div>
  <div class="max-w-2xl mx-auto flex flex-col gap-6 px-4">
    <PostCard v-for="post in postStore.posts" :post="post" :key="post.id" />
  </div>
</template>

<style scoped>
.main {
  padding: 2rem;
}
</style>
