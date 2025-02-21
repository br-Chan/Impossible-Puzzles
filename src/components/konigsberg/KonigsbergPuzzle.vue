<script setup lang="ts"></script>

<template>
    <div class="puzzle">
        <h1>Each bridge is one crossing away from tumbling into the river rapids!</h1>

        <div class="box">
            <div class="river upper-river"></div>
            <div class="river left-river"></div>
            <div class="river right-river"></div>
            <div class="river lower-river"></div>

            <div class="bridge bridge-1"></div>
            <div class="bridge bridge-2"></div>
            <div class="bridge bridge-3"></div>
            <div class="bridge bridge-4"></div>
            <div class="bridge bridge-5"></div>
            <div class="bridge bridge-6"></div>
            <div class="bridge bridge-7"></div>
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
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 1) 90%,
            rgba(0, 0, 0, 0) 100%,
            rgba(0, 0, 0, 0) 0
        )
        100% 50% / 100% 100% repeat-x;

    -webkit-mask: var(--mask);
    mask: var(--mask);
}

.river {
    background: cyan;
}

.upper-river {
    position: absolute;
    top: 20%;
    left: 20%;

    width: 80%;
    height: 1rem;
}

.lower-river {
    position: absolute;
    bottom: 15%;

    width: 100%;
    height: 1rem;
}

.left-river {
    position: absolute;
    bottom: 15%;
    left: 20%;

    width: 1rem;
    height: 65%;
}

.right-river {
    position: absolute;
    bottom: 15%;
    right: 30%;

    width: 1rem;
    height: 65%;
}

.bridge {
    width: 1rem;
    height: 2.5rem;
    background-color: greenyellow;
    border-left: 3px solid brown;
    border-right: 3px solid brown;
}

.bridge-1 {
    position: absolute;
    top: 15%;
    left: 30%;
    transform: rotate(-3deg);
}

.bridge-2 {
    position: absolute;
    top: 17%;
    right: 20%;
    transform: rotate(5deg);
}

.bridge-3 {
    position: absolute;
    top: 45%;
    left: 20%;
    transform: rotate(90deg);
}

.bridge-4 {
    position: absolute;
    top: 47%;
    right: 30%;
    transform: rotate(90deg);
}

.bridge-5 {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: rotate(-1deg);
}

.bridge-6 {
    position: absolute;
    bottom: 13%;
    left: 25%;
    transform: rotate(5deg);
}

.bridge-7 {
    position: absolute;
    bottom: 12%;
    right: 17%;
    transform: rotate(-10deg);
}
</style>
