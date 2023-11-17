<template>
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Scaffold</span>
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink :to="{ path: '/user' }" class="nav-link" :class="{ active: route.path === '/user' }"
            >사용자 관리</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink :to="{ path: '/dept' }" class="nav-link" :class="{ active: route.path === '/dept' }"
            >부서 관리</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.container {
  margin-top: 80px;
}
</style>
