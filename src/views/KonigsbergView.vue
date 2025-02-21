<script setup lang="ts">
import { ref } from "vue";
import KonigsbergPuzzle from "../components/konigsberg/KonigsbergPuzzle.vue";

const stage = ref(0);
</script>

<template>
    <div class="konigsberg">
        <KonigsbergPuzzle v-if="stage === 0" />
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .konigsberg {
        
        display: flex;
    }
}
</style>
