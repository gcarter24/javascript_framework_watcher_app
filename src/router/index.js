import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/angular",
    name: "Angular",
    component: () => import(/* webpackChunkName: "about" */ "../views/Angular.vue"),
  },
  {
    path: "/react",
    name: "React",
    component: () => import(/* webpackChunkName: "about" */ "../views/React.vue"),
  },
  {
    path: "/vuejs",
    name: "VueJS",
    component: () => import(/* webpackChunkName: "about" */ "../views/VueJS.vue"),
  },
  {
    path: "/ember",
    name: "Ember",
    component: () => import(/* webpackChunkName: "about" */ "../views/Ember.vue"),
  },
  {
    path: "/svelte",
    name: "Svelte",
    component: () => import(/* webpackChunkName: "about" */ "../views/Svelte.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
