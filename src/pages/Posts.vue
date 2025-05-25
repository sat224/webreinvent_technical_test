<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import { usePostStore } from "../stores/post";
import PostCard from "../components/PostCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = usePostStore();

const goToPost = (id: number) => {
  sessionStorage.setItem("scrollY", window.scrollY.toString());
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
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-100 pb-16">
    <header class="bg-white shadow-md sticky top-0 z-10">
      <div
        class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold text-gray-800">📚 All Posts</h1>
        <button
          @click="router.push('/')"
          class="text-blue-600 font-medium hover:underline transition"
        >
          Home
        </button>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 mt-8 space-y-6">
      <PostCard
        v-for="post in store.posts"
        :post="post"
        :key="post.id"
        @click="goToPost(post.id)"
      />
    </main>

    <div v-if="store.loading" class="text-center py-12">
      <div class="flex justify-center items-center">
        <div
          class="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
        ></div>
      </div>
      <p class="mt-4 text-sm text-gray-500">Loading more posts...</p>
    </div>

    <div
      v-if="!store.hasMore && store.posts.length"
      class="text-center text-gray-500 mt-10 text-sm"
    >
      🎉 You've reached the end!
    </div>
  </div>
</template>
