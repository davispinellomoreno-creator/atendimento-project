import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import NewAppointment from "../views/NewAppointment.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard", component: Dashboard },
  { path: "/new", component: NewAppointment }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;