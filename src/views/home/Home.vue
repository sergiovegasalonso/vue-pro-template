<script setup lang="ts">
import HelloWorld from "@/components/hello-world/HelloWorld.vue";
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  <HelloWorld msg="MESSAGE" />
  HOME {{ store.doubleCount }}
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
