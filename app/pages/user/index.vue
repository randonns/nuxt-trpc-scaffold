<template>
  <h1>사용자 관리</h1>
  <Loading v-if="pending" />
  <div v-else>
    <div class="row">
      <div class="col text-end"></div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
          <th>부서</th>
          <th>생성일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.dept?.name }}</td>
          <td>{{ formatTime(user.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const { $client } = useNuxtApp()
const { data, pending } = await $client.user.all.useQuery()
</script>
