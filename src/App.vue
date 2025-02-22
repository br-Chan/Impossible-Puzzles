<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

        <div class="wrapper">
            <h1 class="green">I dare you to...</h1>

            <nav>
                <RouterLink to="/konigsberg">cross some bridges</RouterLink>
                <RouterLink to="/">colour in a map</RouterLink>
                <RouterLink to="/">turn some cups around</RouterLink>
                <RouterLink to="/">move a chess piece</RouterLink>
                <RouterLink to="/">solve a sliding puzzle</RouterLink>
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
    <div class="view">
        <RouterView />
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
    border-bottom: 1px solid var(--color-border);
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
    font-size: 2rem;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: flex;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    border-top-right-radius: calc(infinity * 1px);
    border-bottom-right-radius: calc(infinity * 1px);
}

.view {
    display: flex;
    min-height: 100vh;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        flex: 1;
        place-items: center;
        padding: 2rem;
        padding-bottom: 0rem;
        border-right: 1px solid var(--color-border);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        margin-top: 1rem;
    }

    .view {
        flex: 2;
        padding: 2rem;
        padding-bottom: 0rem;
    }
}
</style>
