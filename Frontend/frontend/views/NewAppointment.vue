<template>
  <div class="container">
    <h1>Novo Agendamento</h1>

    <input v-model="cep" placeholder="Digite o CEP" @blur="getCep" />

    <input v-model="address.street" placeholder="Rua" />
    <input v-model="address.city" placeholder="Cidade" />
    <input v-model="address.state" placeholder="Estado" />

    <input v-model="date" type="date" />

    <button @click="create">Criar Agendamento</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { createAppointment } from "@/services/appointmentService"

const cep = ref("")
const date = ref("")


const address = reactive({
  street: "",
  city: "",
  state: ""
})

const getCep = async () => {
  if (!cep.value) return

  const res = await fetch(
    `https://viacep.com.br/ws/${cep.value}/json/`
  )

  const data = await res.json()

  if (data.erro) {
    alert("CEP inválido")
    return
  }

  address.street = data.logradouro
  address.city = data.localidade
  address.state = data.uf
}

const create = async () => {
  await createAppointment({
    date: date.value,
    cep: cep.value,
    address: {
      street: address.street,
      city: address.city,
      state: address.state
    }
  })

  alert("Agendamento criado com sucesso!")
}
</script>