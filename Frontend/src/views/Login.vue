<script setup lang="ts">
import { ref } from "vue"
import { login } from "@/services/authService"

const email = ref("")
const password = ref("")

const handleLogin = async () => {
  const res = await login({
    email: email.value,
    password: password.value
  })

  localStorage.setItem("token", res.data.token)

  alert("Login feito ")
}
</script>