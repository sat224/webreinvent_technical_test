<template>
  <div class="p-4 sm:p-6 max-w-4xl mx-auto">
    <button
      @click="router.push('/posts')"
      class="inline-flex items-center gap-2 text-sm sm:text-base bg-blue-100 text-blue-700 hover:bg-blue-200 transition px-4 py-2 rounded-full mb-6"
    >
      ← All Posts
    </button>

    <div
      v-if="post"
      class="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
    >
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4"
      >
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-0">
          {{ post.title }}
        </h1>
        <span class="text-sm text-gray-500"
          >🆔 Post ID:
          <span class="font-medium text-gray-700">{{ post.id }}</span></span
        >
      </div>

      <div
        class="flex flex-wrap items-center text-sm sm:text-base text-gray-600 gap-4 mb-6"
      >
        <span class="flex items-center gap-1">
          👤 <strong class="text-gray-800">Author:</strong> User #{{
            post.userId
          }}
        </span>
        <span class="flex items-center gap-1">
          ❤️
          <strong class="text-gray-800">{{ post.reactions.likes }}</strong>
          Likes
        </span>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
        >
          #{{ tag }}
        </span>
      </div>

      <p
        class="text-base sm:text-lg leading-relaxed text-gray-700 whitespace-pre-line tracking-wide"
      >
        {{ post.body }}
      </p>
    </div>

    <div
      v-else
      class="animate-pulse space-y-4 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
    >
      <div class="h-8 sm:h-10 bg-gray-200 rounded w-3/4"></div>
      <div
        class="flex flex-col sm:flex-row justify-between sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
      >
        <div class="h-4 bg-gray-200 rounded w-40"></div>
        <div class="h-4 bg-gray-200 rounded w-32"></div>
      </div>
      <div class="flex flex-wrap gap-2 mt-4">
        <span class="h-6 w-20 bg-gray-200 rounded-full"></span>
        <span class="h-6 w-24 bg-gray-200 rounded-full"></span>
        <span class="h-6 w-16 bg-gray-200 rounded-full"></span>
      </div>
      <div class="space-y-2 mt-6">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 rounded w-11/12"></div>
        <div class="h-4 bg-gray-200 rounded w-10/12"></div>
        <div class="h-4 bg-gray-200 rounded w-9/12"></div>
      </div>
    </div>
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
