<script setup lang="ts">
type KonigsbergPhase2Props = {
    timeTaken: string;
};

const props = defineProps<KonigsbergPhase2Props>();
</script>

<template>
    <div class="fade-in">
        <section>
            <h2>It took you {{ timeTaken }} to give up.</h2>
            <p>
                In fact, that puzzle was impossible. No matter where you start and in what order you
                cross those bridges, you never could have crossed each bridge exactly once.
            </p>
        </section>
        <section>
            <h2>Euler</h2>
            <p>This impossible puzzle is based on the Seven Bridges of Königsberg</p>
        </section>
    </div>
</template>

<style scoped>
</style>
