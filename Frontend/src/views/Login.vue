<template>
  <div class="container">
    <div class="card">
      <h1>Login</h1>

      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />

      <button @click="handleLogin">Entrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../services/authService";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    const res = await login({
      email: email.value,
      password: password.value
    });

    localStorage.setItem("token", res.data.token);

    router.push("/dashboard");
  } catch {
    alert("Erro no login");
  }
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}
</style>