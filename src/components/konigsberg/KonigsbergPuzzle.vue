<script setup lang="ts"></script>

<template>
    <div class="puzzle">
        <h1>Each bridge is one crossing away from tumbling into the river rapids!</h1>

        <div class="box">
            <div class="upper-river"></div>
            <div class="left-river"></div>
            <div class="right-river"></div>
            <div class="lower-river"></div>
        </div>

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
    gap: 1rem;
}

.box {
    position: relative;
    display: block;
    width: 100%;
    height: 300px;
    background: greenyellow;
    border-radius: 20px;

    --mask: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.1) 0,
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 1) 90%,
            rgba(0, 0, 0, 0.1) 100%,
            rgba(0, 0, 0, 0) 0
        )
        100% 50% / 100% 100% repeat-x;

    -webkit-mask: var(--mask);
    mask: var(--mask);
}

.upper-river {
    position: absolute;
    top: 20%;
    left: 20%;

    width: 100%;
    height: 1rem;
    background: cyan;
}

.lower-river {
    position: absolute;
    bottom: 15%;

    width: 100%;
    height: 1rem;
    background: cyan;
}

.left-river {
    position: absolute;
    bottom: 15%;
    left: 20%;

    width: 1rem;
    height: 65%;
    background: cyan;
}

.right-river {
    position: absolute;
    bottom: 15%;
    right: 30%;

    width: 1rem;
    height: 65%;
    background: cyan;
}
</style>
