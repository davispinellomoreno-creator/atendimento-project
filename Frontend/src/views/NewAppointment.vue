<template>
  <div>
    <h1>Novo Agendamento</h1>

    <input v-model="date" type="date" />
    <input v-model="service" placeholder="Serviço" />
    <input v-model="cep" placeholder="CEP" @blur="getCep" />

    <p>{{ address.street }}</p>
    <p>{{ address.city }} - {{ address.state }}</p>

    <button @click="create">Criar</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { createAppointment } from "../services/appointmentService";

const router = useRouter();

const date = ref("");
const service = ref("");
const cep = ref("");

const address = reactive({
  street: "",
  city: "",
  state: ""
});

const getCep = async () => {
  if (!cep.value) return;

  const res = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
  const data = await res.json();

  if (data.erro) {
    alert("CEP inválido");
    return;
  }

  address.street = data.logradouro;
  address.city = data.localidade;
  address.state = data.uf;
};

const create = async () => {
  try {
    await createAppointment({
      date: date.value,
      service: service.value,
      cep: cep.value,
      address
    });

    alert("Agendamento criado!");
    router.push("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Erro ao criar");
  }
};
</script>