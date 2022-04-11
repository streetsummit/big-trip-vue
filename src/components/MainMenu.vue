<template>
    <nav class="navigation">
        <router-link
            v-for="tab in tabs"
            :key="tab.name"
            :to="{ name: tab.name }"
            class="navigation__link"
            :class="!'navigation__link--current'"
        >
            {{ tab.label }}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu',
    data() {
        return {
            tabs: [
                { name: 'TableView', label: 'Table' },
                { name: 'StatsView', label: 'Stats' },
                { name: 'WhereToGo', label: 'WhereToGo?' },
            ],
        };
    },
};
</script>

<style>
.navigation {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.navigation__link {
    display: block;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    text-decoration: none;
    user-select: none;
    color: inherit;
    opacity: 0.8;
    transition: opacity 0.2s;
}
.navigation__link:not(:last-of-type) {
    margin-right: 26px;
}
.navigation__link:hover {
    opacity: 1;
}
.navigation__link:active {
    opacity: 0.6;
}
.navigation__link--current,
.navigation__link--current:hover,
.navigation__link--current:active {
    opacity: 1;
    cursor: default;
}
</style>
