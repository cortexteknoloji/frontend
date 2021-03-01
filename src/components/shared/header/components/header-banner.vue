<template>
    <div class="banner-cage">
        <div class="container d-flex justify-content-end align-items-center">
            <p class="banner-text hide-mobile">“Benim iki büyük eserim var; biri Türkiye Cumhuriyet’i diğeri Cumhuriyet
                Halk
                Partisi.”</p>
            <img class="banner-image" src="../../../../assets/images/header/header-banner-img-3.png"
                 alt="headerTopBannerImage">
        </div>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
    @import "../../../../assets/style/variables.scss";

    .banner-cage {
        background: $blue;
        height: 52px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 520px) {
            > div {
                justify-content: center !important;
            }
        }
    }

    .banner-image {
        height: 52px;
    }

    .banner-text {
        font-family: Gotham-Light,sans-serif;
        color: $white;
        font-size: 11px;
    }
</style>
