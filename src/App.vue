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

  <!-- <footer class="flex align-center justify-center">Keep Up The Good Work!! Chicken Tenders Are Forever.</footer> -->
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App',
}
</script>