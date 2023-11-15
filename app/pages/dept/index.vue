<template>
  <h1>부서 관리</h1>
  <Loading v-if="pending" />
  <div v-else>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>생성일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in data" :key="dept.id">
          <td>{{ dept.id }}</td>
          <td>{{ dept.name }}</td>
          <td>{{ formatTime(dept.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const { $client } = useNuxtApp()
const { data, pending } = await $client.dept.all.useQuery()
</script>
