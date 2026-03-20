<template>
  <div>
    <h1>Agendamentos</h1>

    <div v-for="a in appointments" :key="a._id">
      <p>{{ a.date }}</p>
      <p>{{ a.status }}</p>

      <button @click="remove(a._id)">Cancelar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import {
  getAppointments,
  deleteAppointment
} from "@/services/appointmentService"

const appointments = ref([])

const load = async () => {
  const res = await getAppointments()
  appointments.value = res.data
}

const remove = async (id: string) => {
  await deleteAppointment(id)
  load()
}

onMounted(load)
</script>