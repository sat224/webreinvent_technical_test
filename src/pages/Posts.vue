<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import { usePostStore } from "../stores/post";
import PostCard from "../components/PostCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = usePostStore();

const goToPost = (id: number) => {
  router.push(`/post/${id}`);
};

const handleScroll = () => {
  const nearBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (nearBottom && !store.loading && store.hasMore) {
    store.fetchAllPosts();
  }
};

onMounted(() => {
  store.restoreFromCache();
  if (store.posts.length === 0) store.fetchAllPosts();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
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
      v-for="post in store.posts"
      :post="post"
      :key="post.id"
      @click="goToPost(post.id)"
    />
  </div>
  <div v-if="store.loading" class="text-center py-8">
    <div class="flex justify-center items-center">
      <div
        class="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
      ></div>
    </div>
  </div>

  <div
    v-if="!store.hasMore && store.posts.length"
    class="text-center text-gray-500 py-6"
  >
    No more posts to load.
  </div>
</template>

<style scoped>
.main {
  padding: 2rem;
}
</style>
