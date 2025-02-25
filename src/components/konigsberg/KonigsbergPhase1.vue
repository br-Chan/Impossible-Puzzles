<script setup lang="ts">
import { getTime } from "@/utils/time";
import KonigsbergMap from "./KonigsbergMap.vue";
import type { Dayjs } from "dayjs";

type KonigsbergPhase1Props = {
    handleGiveUp: (startTime: Dayjs) => void;
};

defineProps<KonigsbergPhase1Props>();

const startTime = getTime();
</script>

<template>
    <div class="phase fade-in">
        <p class="prompt">
            Each bridge is one crossing away from tumbling into the river rapids! Can you cross all
            bridges exactly once?
        </p>

        <KonigsbergMap />

        <button @click="handleGiveUp(startTime)">Give up!</button>
    </div>
</template>

<style scoped>
.phase {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.prompt {
    width: 100%;
    text-align: left;
}
</style>
