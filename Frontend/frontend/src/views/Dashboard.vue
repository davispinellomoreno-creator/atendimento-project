<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  getAppointments,
  deleteAppointment
} from "@/services/appointmentService";

const appointments = ref([]);

const load = async () => {
  const res = await getAppointments();
  appointments.value = res.data;
};

const remove = async (id: number) => {
  await deleteAppointment(id);
  load();
};

onMounted(load);
</script>

<template>
  <div>
    <h1>Agendamentos</h1>

    <div v-for="a in appointments" :key="a.id">
      <p><strong>Data:</strong> {{ a.date }}</p>
      <p><strong>Serviço:</strong> {{ a.service }}</p>

      <p><strong>CEP:</strong> {{ a.cep }}</p>

      <p>
        <strong>Endereço:</strong>
        {{ a.address?.street }},
        {{ a.address?.city }} -
        {{ a.address?.state }}
      </p>

      <p><strong>Clima:</strong> {{ a.weather }}</p>

      <button @click="remove(a.id)">Cancelar</button>
      <hr />
    </div>
  </div>
</template>