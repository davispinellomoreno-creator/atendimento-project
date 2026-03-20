<template>
  <div class="card">
    <h3>{{ appointment.date }}</h3>
    <p>Status: {{ appointment.status }}</p>
    <p>{{ appointment.address }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  appointment: Object
})
</script>

<style scoped>
.card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>