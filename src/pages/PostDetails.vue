<template>
  <div class="p-4 sm:p-6 max-w-3xl mx-auto">
    <button
      @click="router.push('/posts')"
      class="text-blue-600 mb-6 hover:underline"
    >
      All Posts
    </button>

    <div v-if="post" class="bg-white p-6 rounded-2xl shadow-md">
      <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ post.title }}</h1>
      <div class="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
        <span>👤 Author: User #{{ post.userId }}</span>
        <span>❤️ {{ post.reactions.likes }}</span>
      </div>
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs"
        >
          #{{ tag }}
        </span>
      </div>
      <p class="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
        {{ post.body }}
      </p>
    </div>
    <div v-else class="text-center text-gray-500 py-10">Loading post...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { usePostStore } from "../stores/post";

const route = useRoute();
const router = useRouter();
const store = usePostStore();
const post = ref<any | null>(null);

const loadPost = async (id: string) => {
  try {
    post.value = await store.getPostById(id);
  } catch (err) {
    router.replace("/not-found");
  }
};

onBeforeMount(() => {
  loadPost(route.params.id as string);
});

onBeforeRouteUpdate((to) => {
  loadPost(to.params.id as string);
});
</script>
