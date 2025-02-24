<script setup lang="ts">
type KonigsbergPhase2Props = {
    timeTaken: string;
};

const props = defineProps<KonigsbergPhase2Props>();
</script>

<template>
    <div class="fade-in">
        <h2>It took you {{ timeTaken }} to give up.</h2>
        You got cheated a little, that puzzle was impossible. No matter how long you tried, you
        never could have crossed each bridge exactly once. But how can we know for sure?
    </div>
</template>

<style scoped></style>
