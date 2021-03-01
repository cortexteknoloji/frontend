<template>
    <section>
        <div class="navigation cage hide-mobile-device">
            <div class="navigation inner-cage container">
                <img class="navigation-icon" src="../../../../assets/images/header/CHP-Dikey-Logo-2.png"
                     alt="headerNavigationIcon">
                <div class="navigation button-group">
                    <a class="navigation link-button text">CHP</a>
                    <a class="navigation link-button text">GÜNDEM</a>
                    <a class="navigation link-button text">YAYINLAR</a>
                    <a class="navigation link-button text">CHP TV</a>
                    <a class="navigation link-button text">İLETİŞİM</a>
                    <a class="navigation link-button icon">
                        <img src="../../../../assets/icons/header/search-icon.svg" alt="searchIcon">
                    </a>
                    <a class="navigation link-button icon">
                        <img src="../../../../assets/icons/header/twitter-icon.svg" alt="twitterIcon">
                    </a>
                    <a class="navigation link-button icon">
                        <img src="../../../../assets/icons/header/facebook-icon.svg" alt="facebookIcon">
                    </a>
                    <a class="navigation link-button icon">
                        <img src="../../../../assets/icons/header/instagram-icon.svg" alt="instagramIcon">
                    </a>
                    <a class="navigation link-button icon">
                        <img src="../../../../assets/icons/header/youtube-icon.svg" alt="youtubeIcon">
                    </a>
                </div>
            </div>
        </div>
        <div class="navigation cage show-mobile-device">
            <div class="navigation inner-cage container">
                <img class="navigation-icon-mobile" src="../../../../assets/images/header/chp-yatay-logo-2.png"
                     alt="headerNavigationIcon">
                <div class="navigation button-group">
                    <a class="navigation link-button icon hide-mobile" @click="showOpenerMenu = !showOpenerMenu">
                        <img src="../../../../assets/icons/header/search-icon.svg" alt="searchIcon">
                    </a>
                    <a class="navigation link-button text r-border" v-if="!showOpenerMenu"
                       @click="showOpenerMenu = !showOpenerMenu">
                        <img src="../../../../assets/icons/header/mobile-menu-icon.svg" alt="mobileMenuIcon">
                        <span class="hide-mobile">MENU</span>
                    </a>
                    <a class="navigation link-button text r-border active"  @click="showOpenerMenu = !showOpenerMenu" v-else>
                        <img src="../../../../assets/icons/header/close-icon.svg" alt="closeIcon">
                        <h6 class="close-text hide-mobile">KAPAT</h6>
                    </a>
                </div>
            </div>
        </div>
        <opener-menu v-if="showOpenerMenu"></opener-menu>
    </section>
</template>
<script>
    import openerMenu from './header-opener-menu.vue'

    export default {
        name: 'HeaderNavigation',
        data() {
            return {
                showOpenerMenu: false
            }
        },
        components: {openerMenu},
    }
</script>
<style lang="scss" scoped>
    @import '../../../../assets/style/variables.scss';

    .navigation {
        &.cage {
            display: flex;
            align-items: center;
            position: relative;
            justify-content: space-between;
            height: 70px;
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
        }

        &.inner-cage {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
        }

        &.button-group {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            flex: auto;
            height: 70px;
        }

        &.link-button {
            text-decoration: none;
            cursor: pointer;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-left: 1px solid $gray;
            &:hover{
                background: $lighter-blue;
            }

            @media screen and (max-width: 520px) {
                width: 64px !important;
            }

            &.text {
                max-width: 130px;
                width: 100%;
                padding-left: 16px;
                color: $black;
                font-family: Gotham, sans-serif;
                font-weight: 600;
                font-size: 13px;
                line-height: 1.46;

                > img {
                    margin-right: 16px;
                }
            }

            > span {
                padding-right: 16px;
            }

            &.icon {
                max-width: 64px;
                width: 100%;
                display: flex;
                justify-content: center;

                &:last-child {
                    border-right: 1px solid $gray;
                }
            }

            &.r-border {
                border-right: 1px solid $gray;
            }
        }

        &.active {
            background: $lighter-blue;
            height: 75px;
        }
    }

    .navigation-icon {
        height: 150px;
    }

    .close-text {
        color: $red;
    }

    .navigation-icon-mobile {
        height: 12vw;
        max-height: 69px;
    }

    .show-mobile-device {
        @media screen and (max-width: 992px) {
            padding: 0 2vw;
        }
    }
</style>
