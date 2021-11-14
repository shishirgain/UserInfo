<template>
    <nav>
        <ul class="t">
            <li v-for="(nav, index) in list" :key="`nav-${index}`"><a :href="Nav.url">{{ Nav.title }}</a> </li>
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
    }
}
</script>

<style scoped>

</style>