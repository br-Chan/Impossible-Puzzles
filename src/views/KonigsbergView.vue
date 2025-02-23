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
        <h1 class="green">...to cross some bridges</h1>
        <div class="phase-container">
            <KonigsbergPhase1 v-if="phase === Phase.PHASE_1" :handle-give-up="moveToNextPhase" />
            <KonigsbergPhase2 v-else-if="phase === Phase.PHASE_2" />
        </div>
    </main>
</template>

<style scoped>
h1 {
    width: 100%;
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    text-align: left;
    top: -10px;
}

.phase-container {
    min-height: 80vh;
    border: 4px solid rgb(0, 180, 0);
    border-radius: 20px;
    padding: 1rem;
}
</style>
