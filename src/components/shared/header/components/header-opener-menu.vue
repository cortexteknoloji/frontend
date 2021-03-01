<template>
    <section>
        <div class="opener-menu cage">
            <div class="container">
                <div class="opener-menu search-section">
                    <div class="input-container">
                        <img src="../../../../assets/icons/header/search-icon.svg" alt="searchIcon">
                        <input class="primary-input search-input" placeholder="Arama Yapın">
                    </div>
                </div>
                <div class="opener-menu hr"/>
                <div v-for="(link,i) in linkList" :key="i">
                    <link-section :linkText="link.text"></link-section>
                </div>
                <social-section></social-section>
            </div>
        </div>
    </section>
</template>
<script>
    import linkSection from './opener-menu/link-section.vue';
    import socialSection from './opener-menu/social-section.vue';

    export default {
        name: 'headerOpenerMenu',
        data() {
            return {
                linkList: [
                    {text: 'CHP', link: 'www.google.com'},
                    {text: 'GÜNDEM', link: 'www.google.com'},
                    {text: 'YAYINLAR', link: 'www.google.com'},
                    {text: 'CHP TV', link: 'www.google.com'},
                    {text: 'İLETİŞİM', link: 'www.google.com'},
                    ]
            }
        },
        components: {linkSection,socialSection}
    }
</script>
<style lang="scss" scoped>
    @import "../../../../assets/style/variables.scss";

    .opener-menu {
        &.cage {
            height: calc(100vh - 120px);
            background-color: $lighter-blue;
            @media screen and (max-width: 520px) {
                height: calc(100vh - 120px);
            }
        }

        &.search-section {
            padding: 20px 0;
            left: 0;
            position: relative;
        }

        &.link-section {
            padding: 20px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    .input-container {
        border: 1px solid $gray;
        display: flex;
        background: $white;
        padding-left: 16px;
    }

    .search-input {
        border: none !important;
    }
</style>
