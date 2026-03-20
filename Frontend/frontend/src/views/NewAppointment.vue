<script setup lang="ts">
import { ref, reactive } from "vue";
import { createAppointment } from "@/services/appointmentService";

const date = ref("");
const cep = ref("");
const weather = ref("");

const API_KEY = import.meta.env.VITE_WEATHER_KEY;


console.log("API KEY:", API_KEY);

const address = reactive({
  street: "",
  city: "",
  state: ""
});


const getCep = async () => {
  if (!cep.value) return;

  const res = await fetch(
    `https://viacep.com.br/ws/${cep.value}/json/`
  );

  const data = await res.json();

  if (data.erro) {
    alert("CEP inválido");
    return;
  }

  address.street = data.logradouro;
  address.city = data.localidade;
  address.state = data.uf;

  // chama clima
  getWeather(data.localidade);
};


const getWeather = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );

  const data = await res.json();

  weather.value = `${data.main.temp}°C - ${data.weather[0].description}`;
};

const create = async () => {
  await createAppointment({
    date: date.value,
    service: "Atendimento",
    cep: cep.value,
    address,
    weather: weather.value
  });

  alert("Agendamento criado 🚀");
};
</script>