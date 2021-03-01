<template>
    <section>
        <div class="social-section cage">
            <img class="social-section icons" src="../../../../../assets/icons/header/twitter-icon.svg" alt="twitterIcon">
            <img class="social-section icons" src="../../../../../assets/icons/header/facebook-icon.svg" alt="facebookIcon">
            <img class="social-section icons" src="../../../../../assets/icons/header/instagram-icon.svg" alt="instagramIcon">
            <img class="social-section icons" src="../../../../../assets/icons/header/youtube-icon.svg" alt="youtubeIcon">
        </div>
    </section>
</template>
<script>
    export default {
        name: 'socialSection'
    }
</script>
<style lang="scss" scoped>
    @import "../../../../../assets/style/variables.scss";
    .social-section{
        &.cage{
            background-color: $lighter-blue;
            width: 100%;
            position: absolute;
            left: 0;
            margin-top: 1px;
        }
        &.icons{
            padding: 11px;
            background: $white;
            border: 1px solid $gray;
            margin-right: 16px;
            margin-top: 20%;
            margin-bottom: 20%;
        }
    }
</style>
