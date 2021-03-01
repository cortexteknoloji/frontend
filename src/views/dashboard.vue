<template>
    <section>
        <Header/>
        <div class="container">

        </div>
        <Footer />
    </section>
</template>
<script>
    import Header from '../components/shared/header/header.vue'
    import Footer from '../components/shared/footer/footer.vue'

    export default {
        name: 'dashboardPage',
        components: {Header, Footer}
    }
</script>
<style></style>
