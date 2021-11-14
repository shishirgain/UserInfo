<template>
    <nav class="navbar navbar-expand-lg p-0">
        <ul class="navbar-nav">
            <li class="nav-item" v-for="(nav, index) in list" :key="`nav-${index}`">
                <router-link :class="activeRoute==nav.url ? 'nav-link active text-capitalize bg-secondary': 'nav-link text-capitalize'" :to="nav.url">{{ nav.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navigator',
    props: {
        list: {
            required: true,
            default: []
        }
    },
    computed: {
        activeRoute(){
            return this.$route.fullPath;
        }
    }
}
</script>

<style scoped>

</style>