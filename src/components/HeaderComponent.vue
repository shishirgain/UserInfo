<template>
    <header class="d-flex align-items-end">
        <div class="bg-primary p-2">
            <img class="" style="height: 100px; height: 100px;" :src="data.avatar" alt="avatar">
        </div>
        <div class="p-2">
            <h1>{{ data.name }}</h1>
            <h4>{{ data.position }} <a :href="data.company.url" target="_blank" class="text-primary h6">@{{ data.company.name }}</a> </h4>
        </div>
    </header>
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