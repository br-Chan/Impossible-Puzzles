<script setup lang="ts"></script>

<template>
    <div class="puzzle">
        <h1>Each bridge is one crossing away from tumbling into the river rapids!</h1>
        <div class="box"></div>
        <div class="prompt">
            <h3>Can you cross all bridges once (and only once)? Or will you...</h3>
            <button>Give up!</button>
        </div>
    </div>
</template>

<style scoped>
.puzzle {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.box {
    position: relative;
    display: block;
    width:100%;
    height: 300px;
    background: greenyellow;
}
</style>
