<template>
    <section>
        <div class="footer cage">
            <div class="footer inner-cage container">
                <div class="footer left-section">
                    <div class="d-flex align-items-center justify-content-between flex-column h-100">
                        <div class="footer info-cage">
                            <img class="footer info-logo" src="../../../assets/images/footer/si-logo.png" alt="footerLogo">
                            <h5 class="footer info-text">Cumhuriyet Halk Partisi Sosyalist Enternasyonal Üyesidir.</h5>
                        </div>
                        <div class="footer privacy-cage">
                            <img class="footer privacy-logo" src="../../../assets/images/footer/chp-net-logo.png"
                                 alt="chpNetLogo">
                            <p class="footer light-text">© 2020 Tüm Hakları Saklıdır.</p>
                        </div>
                    </div>
                    <img class="footer phone-img" src="../../../assets/images/footer/footer-phone.png" alt="footerPhone">
                </div>
                <div class="footer right-section">
                    <p class="footer light-text">CHP Mobil Uygulamalarını indirin.</p>
                    <div class="footer store-cage">
                        <img class="footer store-icon" src="../../../assets/images/footer/appstore.svg" alt="appleStoreIcon">
                        <img class="footer store-icon" src="../../../assets/images/footer/google-play.svg" alt="googlePlayIcon">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Footer'
    }
</script>
<style lang="scss" scoped>
    @import "../../../assets/style/variables.scss";

    .footer {
        &.cage {
            height: 369px;
            background: $blue;
            width: 100%;
            // SİL
            position: absolute;
            bottom: 0;
            left: 0;
            // SİL
        }

        &.inner-cage {
            display: flex;
            height: 100%;
        }

        &.left-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            padding: 42px 0 49px 0;
            height: 100%;

        }

        &.right-section{
            padding: 35px 0 57px 0;
        }

        &.info-cage {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &.info-logo {
            margin-right: 20px;
        }

        &.info-text {
            font-family: Gotham-Medium, sans-serif;
            color: #f8f8f8;
            font-weight: 500;
        }

        &.privacy-cage{
            display: flex;
            align-items: center;
        }

        &.privacy-logo {
            margin-right: 16px;
        }

        &.light-text {
            font-size: 13px;
            font-family: Gotham-Light, sans-serif;
            color: $white;
        }

        &.phone-img{
            margin-left: 5px;
        }

        &.store-cage{
            display: flex;
            align-items: center;
            max-width: 343px;
            width: 100%;
            justify-content: space-between;
        }
    }
</style>
