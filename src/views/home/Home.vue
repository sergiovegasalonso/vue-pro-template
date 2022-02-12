<script setup lang="ts">
import { useStore } from "@/store";
const store = useStore();
</script>

<template>
  HOME {{ store.doubleCount }}
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
