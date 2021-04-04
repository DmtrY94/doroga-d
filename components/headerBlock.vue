<template>
  <transition>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__main">
            <nuxt-link :to="localePath('/')">
              <div class="header__logo">
                <img
                  src="~assets/img/doroga_logo.png"
                  class="header__logo-doroga-icon"
                />
                <div class="header__logo-doroga-name">До Рога</div>
              </div>
            </nuxt-link>
            <div class="header__nav">
              <nav class="header-nav__list">
                <div
                  v-for="item in menu"
                  :key="item.id"
                  class="header-nav__item"
                >
                  <NuxtLink :to="`${item.url}`">{{ item.label }}</NuxtLink>
                </div>
              </nav>
            </div>
          </div>
          <div class="header__links">
            <headerCheckLang />
            <div class="header__search"><DoSearch /></div>
          </div>
        </div>
      </div>
    </header>
  </transition>
</template>
<script>
import DoSearch from '@/assets/svg/icon_search.svg';
import headerCheckLang from '~/components/headerCheckLang.vue';
import menu from '~/apollo/queries/menu.gql';

export default {
  components: {
    DoSearch,
    headerCheckLang,
  },
  data() {
    return {
      menu: '',
    };
  },
  apollo: {
    menu: {
      prefetch: true,
      query: menu,
      update(data) {
        return data.topMenu.menu[0].items.item;
      },
    },
  },
};
</script>
<style lang="stylus">
.header {
  position: relative;
  z-index: 999;
  transition: 0.5s;
  padding-top: 32px;
}

.header__wrapper {
  background-color: #2BD39F;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  position: relative;
}

.header__main {
  display: flex;
  align-items: center;
}

.header__links {
  display: flex;
  align-items: center;
}

.header__button {
  a {
    font-family: 'MuseoCyrl-medium';
    text-transform: uppercase;
    color: #10C18A;
    padding-right: 14px;
    border-right: 1px solid #F3F4F4;
  }
}

.header__search {
  padding-left: 14px;
}

.header__logo {
  display: flex;
  border-right: 2px solid #25282B;
  line-height: 40px;

  &-doroga-name {
    font-family: 'MuseoCyrl-Bold';
    font-size: 18px;
    color: #25282B;
    margin-left: 90px;
    padding-right: 24px;
  }

  &-doroga-icon {
    position: absolute;
    top: -20px;
  }
}

.header-nav__list {
  display: flex;
  align-items: center;
  padding-left: 24px;
}

.header-nav__item a {
  font-family: 'MuseoCyrl-medium';
  font-size: 18px;
  text-transform: uppercase;
  padding-right: 32px;
  color: #25282B;
}
</style>
