/* global Chart */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// import Angular from "../views/Angular.vue";
// import Ember from "../views/Ember.vue";
// import React from "../views/React.vue";
// import Svelte from "../views/Svelte.vue";
// import VueJS from "../views/VueJS.vue";

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

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Stars", "Watchers", "Forks"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// var ctx = document.getElementById("myChart").getContext("2d");
// var Chart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Stars", "Watchers", "Forks"],
//     datasets: [
//       {
//         label: "Popularity",
//         data: [12, 5, 8],
//         // data: [this.repo.subscriber_count, this.repo.watchers, this.repo.forks],

//         backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
//         borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

export default router;
