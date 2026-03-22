<template>
  <div>
    <h1>Agendamentos</h1>

    <button @click="goToNew">Novo Agendamento</button>

    <div v-for="a in appointments" :key="a._id" style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
      <p><strong>Data:</strong> {{ a.date }}</p>
      <p><strong>Serviço:</strong> {{ a.service }}</p>
      <p><strong>Status:</strong> {{ a.status || "Pendente" }}</p>

      <p><strong>Endereço:</strong> 
        {{ a.address?.street }} - {{ a.address?.city }} / {{ a.address?.state }}
      </p>

      <p v-if="a.weather">
        🌤 {{ a.weather.temp }}°C - {{ a.weather.description }}
      </p>

      <button @click="remove(a._id)">Cancelar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";


import {
  getAppointments,
  deleteAppointment
} from "../services/appointmentService";

const router = useRouter();
const appointments = ref<any[]>([]);

const load = async () => {
  try {
    const res = await getAppointments();
    appointments.value = res.data;
  } catch (error) {
    console.error("Erro ao buscar agendamentos", error);
  }
};


const remove = async (id: string) => {
  await deleteAppointment(id);
  load();
};

// ➕ ir para tela de criação
const goToNew = () => {
  router.push("/new");
};


onMounted(load);
</script>