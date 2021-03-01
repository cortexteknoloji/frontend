<template>
    <div>
        <header-banner></header-banner>
        <header-navigation></header-navigation>
    </div>
</template>
<script>
    import HeaderBanner from './components/header-banner.vue'
    import HeaderNavigation from './components/header-navigation.vue'

    export default {
        name: 'Header',
        components: {HeaderBanner, HeaderNavigation}
    }
</script>
<style lang="scss" scoped></style>
