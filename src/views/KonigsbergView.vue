<script setup lang="ts">
import { ref } from "vue";
import KonigsbergPuzzle from "../components/konigsberg/KonigsbergPuzzle.vue";

const stage = ref(0);
</script>

<template>
    <main>
        <KonigsbergPuzzle v-if="stage === 0" />
    </main>
</template>

<style scoped>
main {
    display: flex;

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

@media (min-width: 1024px) {
}
</style>
