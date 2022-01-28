<script setup lang="ts">import { useStore } from '@/store';
const store = useStore();
</script>
<template>
HOME {{store.doubleCount}}
</template>