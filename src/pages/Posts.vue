<script setup lang="ts">
import { onMounted } from "vue";
import { usePostStore } from "../stores/post";
import PostCard from "../components/PostCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const postStore = usePostStore();
onMounted(() => postStore.fetchAllPosts());

const goToPost = (id: number) => {
  router.push(`/post/${id}`);
};
</script>

<template>
  <div class="main">
    <button
      @click="router.push('/')"
      class="text-blue-600 mb-6 hover:underline"
    >
      Home
    </button>
  </div>
  <div class="max-w-2xl mx-auto flex flex-col gap-6 px-4">
    <PostCard
      v-for="post in postStore.posts"
      :post="post"
      :key="post.id"
      @click="goToPost(post.id)"
    />
  </div>
</template>

<style scoped>
.main {
  padding: 2rem;
}
</style>
