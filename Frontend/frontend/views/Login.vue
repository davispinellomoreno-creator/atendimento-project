<template>
  <div class="container">
    <h1>Login</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />

    <button @click="handleLogin">Entrar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { login } from "@/services/authService"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()

const handleLogin = async () => {
  const res = await login({
    email: email.value,
    password: password.value
  })

  localStorage.setItem("token", res.data.token)
  router.push("/dashboard")
}
</script>