<script setup lang="ts">
import KonigsbergRiver from "./KonigsbergRiver.vue";
import KonigsbergBridge from "./KonigsbergBridge.vue";
</script>

<template>
    <div class="box">
        <KonigsbergRiver class="upper-river" />
        <KonigsbergRiver class="left-river" />
        <KonigsbergRiver class="right-river" />
        <KonigsbergRiver class="lower-river" />

        <KonigsbergBridge class="bridge-1" />
        <KonigsbergBridge class="bridge-2" />
        <KonigsbergBridge class="bridge-3" />
        <KonigsbergBridge class="bridge-4" />
        <KonigsbergBridge class="bridge-5" />
        <KonigsbergBridge class="bridge-6" />
        <KonigsbergBridge class="bridge-7" />
    </div>
</template>

<style scoped>
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

.upper-river {
    top: 20%;
    left: 20%;

    width: 80%;
    height: 1rem;
}

.lower-river {
    bottom: 15%;

    width: 100%;
    height: 1rem;
}

.left-river {
    bottom: 15%;
    left: 20%;

    width: 1rem;
    height: 65%;
}

.right-river {
    bottom: 15%;
    right: 30%;

    width: 1rem;
    height: 65%;
}

.bridge-1 {
    top: 15%;
    left: 30%;
    transform: rotate(-3deg);
}

.bridge-2 {
    top: 17%;
    right: 20%;
    transform: rotate(5deg);
}

.bridge-3 {
    top: 45%;
    left: 20%;
    transform: rotate(90deg);
}

.bridge-4 {
    top: 47%;
    right: 30%;
    transform: rotate(90deg);
}

.bridge-5 {
    bottom: 10%;
    left: 50%;
    transform: rotate(-1deg);
}

.bridge-6 {
    bottom: 13%;
    left: 25%;
    transform: rotate(5deg);
}

.bridge-7 {
    bottom: 12%;
    right: 17%;
    transform: rotate(-10deg);
}
</style>
