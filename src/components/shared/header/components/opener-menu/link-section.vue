<template>
    <section>
        <div class="link-section cage">
            <h5 class="link-section link-text">{{linkText}}</h5>
            <img src="../../../../../assets/icons/header/more-icon.svg" alt="moreIcon">
        </div>
        <div class="link-section hr"/>
    </section>
</template>
<script>
    export default {
        name: 'linkSection',
        props: ['linkText'],
    }
</script>
<style lang="scss" scoped>
    @import "../../../../../assets/style/variables.scss";

    .link-section {
        &.cage {
            padding: 20px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &.link-text {
            color: $blue;
            text-align: start;
        }

        &.hr {
            border-bottom: 1px solid $gray;
            position: absolute;
            left: 0;
            width: 100%;
        }
    }
</style>
