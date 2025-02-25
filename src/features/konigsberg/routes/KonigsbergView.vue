<script setup lang="ts">
import { calculateDurationUntilNow } from "@/utils/time";
import type { Dayjs } from "dayjs";
import { ref } from "vue";
import KonigsbergPhase1 from "../components/KonigsbergPhase1.vue";
import KonigsbergPhase2 from "../components/KonigsbergPhase2.vue";

enum Phase {
    PHASE_1,
    PHASE_2,
    PHASE_3,
}

const phase = ref(Phase.PHASE_1);

const timeTaken = ref("");

const moveToNextPhase = (): void => {
    ++phase.value;
};

const handleGiveUp = (startTime: Dayjs) => {
    timeTaken.value = calculateDurationUntilNow(startTime);
    moveToNextPhase();
};
</script>

<template>
    <main>
        <h1 class="green">...to cross some bridges</h1>
        <div class="phase-container">
            <KonigsbergPhase1 v-if="phase === Phase.PHASE_1" :handle-give-up="handleGiveUp" />
            <KonigsbergPhase2 v-else-if="phase === Phase.PHASE_2" :time-taken="timeTaken" />
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
    padding: 20px;
}
</style>
