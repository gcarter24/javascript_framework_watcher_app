<template>
  <div class="svelte">
    <h3>SvelteJS - {{ this.repo.description }}</h3>
    <div>Stars: {{ this.repo.subscribers_count }}</div>
    <div>Watchers: {{ this.repo.watchers }}</div>
    <div>Forks: {{ this.repo.forks }}</div>
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
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      this.repo = response.data;
    });
  },
  methods: {},
};
</script>
