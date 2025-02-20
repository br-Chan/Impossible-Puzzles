<script setup lang="ts">
import { ref } from "vue";
import KonigsbergPuzzle from "../components/konigsberg/KonigsbergPuzzle.vue";

const stage = ref(0);
</script>

<template>
    <div class="konigsberg">
        <KonigsbergPuzzle />
    </div>
</template>

<style>
h1 {
    text-align: center;
}

@media (min-width: 1024px) {
    .konigsberg {
        min-height: 100vh;
        display: flex;
    }
}
</style>
