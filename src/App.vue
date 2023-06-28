<template>
  <header class="flex">
    <h1>2023 Day Planner</h1>
    <nav class="flex">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/notes">Notes</RouterLink>
      <RouterLink to="/resources">Resources</RouterLink>
      <RouterLink to="/archive">Archive</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
