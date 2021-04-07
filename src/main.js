import Vue from "vue";
import VueRouter from "vue-router";
import AOS from 'aos';
import 'aos/dist/aos.css' 


import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

// views without layouts

import Landing from "@/views/Landing.vue";
import Index from "@/views/Index.vue";
import TAC from "@/views/TAC.vue";
import Privacy from "@/views/Privacy.vue";

// routes

const routes = [
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/terms-and-conditions",
    component: TAC,
  },
  {
    path: "/privacy-policy",
    component: Privacy,
  },
  { path: "*", redirect: "/" },
];

// app config

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
