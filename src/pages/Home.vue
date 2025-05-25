<template>
  <div class="home">
    <h1 class="text-2xl font-bold">Welcome to the Home Page</h1>
    <RouterLink to="/posts">
      <button class="text-blue-600 mb-6 hover:underline">Posts</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  padding: 2rem;
}
</style>
