<template>
  <div class="text-center py-20">
    <h1 class="text-4xl font-bold text-gray-700 mb-4">404 - Not Found</h1>
    <p class="text-gray-500 mb-6">
      The page you are looking for does not exist.
    </p>
    <RouterLink to="/">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Go Home</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onBeforeMount(() => router.push("not-found"));
</script>
