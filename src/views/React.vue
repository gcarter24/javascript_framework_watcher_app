<template>
  <div class="react">
    <h3>React - {{ this.repo.description }}</h3>
    <div>Stars - {{ this.repo.subscribers_count }}</div>
    <div>Watchers - {{ this.repo.watchers }}</div>
    <div>Forks - {{ this.repo.forks }}</div>
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
      .get("https://api.github.com/repos/facebook/react")
      .then((response) => {
        this.repo = response.data;
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
