<template>
  <div class="home">
    <div class="flex justify-center items-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
