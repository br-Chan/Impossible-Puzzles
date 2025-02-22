<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
    <main>
        <TheWelcome />
    </main>
</template>

<style scoped>
main {
    opacity: 1;
    animation: fade 0.5s linear;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
