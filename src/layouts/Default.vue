<template>
    <div class="d-flex flex-column">
        <div>
            <div class="container py-4">
                <HeaderComponent :data="page.user"/>
            </div>
            <div class="bg-primary navbar-dark">
                <Navigator class="container" :list="page.header.nav"/>
            </div>
        </div>
        <div class="flex-fill">
            <div class="container">
                <router-view class="h-100" />
            </div>
        </div>
        <div class="bg-primary">
            <div class="container py-4">
                <FooterComponent :data="page.footer"/>
            </div>
        </div>
    </div>
</template>

<script>
import Navigator from '@/components/Navigator.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { mapGetters } from 'vuex';
export default {
    name: "Default",
    components: {Navigator, HeaderComponent, FooterComponent},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            page: 'page'
        })
    }
}
</script>

<style scoped>

</style>