<template>
  <nav class="navbar">
    <img src="@/assets/logo.svg" class="logo" />

    <div class="links">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/new">Novo Agendamento</router-link>
      <button @click="logout">Sair</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

const logout = () => {
  localStorage.removeItem("token")
  router.push("/")
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.logo {
  height: 40px;
}

.links {
  display: flex;
  gap: 10px;
}
</style>