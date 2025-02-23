<script setup lang="ts">
import KonigsbergPhase1 from "@/components/konigsberg/KonigsbergPhase1.vue";
import KonigsbergPhase2 from "@/components/konigsberg/KonigsbergPhase2.vue";
import { ref } from "vue";

enum Phase {
    PHASE_1,
    PHASE_2,
    PHASE_3,
}

const phase = ref(Phase.PHASE_1);

const moveToNextPhase = (): void => {
    ++phase.value;
};
</script>

<template>
    <main>
        <KonigsbergPhase1 v-if="phase === Phase.PHASE_1" :handle-give-up="moveToNextPhase" />
        <KonigsbergPhase2 v-else-if="phase === Phase.PHASE_2" />
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

@media (min-width: 1024px) {
}
</style>
