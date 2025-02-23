<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="sidebar">
        <div class="wrapper">
            <h1 class="green">I dare you...</h1>

            <nav>
                <RouterLink to="/konigsberg">to cross some bridges</RouterLink>
                <RouterLink to="/">to colour in a map</RouterLink>
                <RouterLink to="/">to turn some cups around</RouterLink>
                <RouterLink to="/">to move a chess piece</RouterLink>
                <RouterLink to="/">to solve a sliding puzzle</RouterLink>
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </div>
    <div class="content">
        <RouterView />
    </div>
</template>

<style scoped>
.sidebar {
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
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
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

.content {
    min-height: 100vh;
}

@media (min-width: 1024px) {
    .sidebar {
        float: left;
        width: var(--sidebar-width);
        margin-left: calc(var(--sidebar-width) * -1);
        place-items: start;
        padding: 2rem;
        padding-bottom: 0rem;
        border-right: 1px solid var(--color-border);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    .sidebar .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
    }

    .content {
        float: right;
        width: calc(100vw - var(--sidebar-width));
        padding: 2rem;
        padding-bottom: 0rem;
    }
}
</style>
