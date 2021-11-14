<template>
    <headr>
        Header
        <hr>
        {{ data }}
    </headr>
</template>

<script>
export default {
    name: 'Header',
    props: {
        data: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>