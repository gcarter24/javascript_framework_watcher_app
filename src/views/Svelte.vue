<template>
  <div class="svelte">
    <!-- <h3>SvelteJS - {{ this.repo.description }}</h3>
    <div>Stars - {{ this.stars }}</div>
    <div>Watchers - {{ this.watchers }}</div>
    <div>Forks - {{ this.forks }}</div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      repo: {},
    };
  },
  created: function () {
    axios
      .get("https://api.github.com/repos/sveltejs/svelte")
      .then((response) => {
        this.repo = response.data;
        console.log(response.data.subscribers_count, response.data.watchers, response.data.forks, response.data);
        this.forks = response.data.forks;
        this.watchers = response.data.watchers;
        this.stars = response.data.subscribers_count;
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Stars", "Watchers", "Forks"],
            datasets: [
              {
                label: "Svelte",
                data: [this.stars, this.watchers, this.forks],
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
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
  methods: {},
};
</script>
