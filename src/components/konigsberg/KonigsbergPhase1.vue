<script setup lang="ts">
import KonigsbergMap from "./KonigsbergMap.vue";

type KonigsbergPhase1Props = {
    handleGiveUp: () => void;
};

defineProps<KonigsbergPhase1Props>();
</script>

<template>
    <div class="puzzle fade-in">
        <p class="prompt">
            Each bridge is one crossing away from tumbling into the river rapids! Can you cross all
            bridges once (and only once)?
        </p>

        <KonigsbergMap />

        <button @click="handleGiveUp">Give up!</button>
    </div>
</template>

<style scoped>
.puzzle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-inline: 3rem;
}

.prompt {
    width: 100%;
    text-align: left;
}
</style>
