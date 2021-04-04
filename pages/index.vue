<template>
  <div>
    <div class="main__header">
      <div class="container">
        <div v-animate-on-scroll class="main__header-header">
          <div class="main__header-title">{{ $t('tittleindex') }}</div>
          <div class="main__header-icon">
            <img src="~assets/img/L-city_doroga.png" />
          </div>
        </div>
        <MainPostShort v-animate-on-scroll />
        <MainCovid v-animate-on-scroll />
      </div>
    </div>
    <div class="container">
      <listCategory :materials="mainList"></listCategory>
    </div>
  </div>
</template>
<script>
import MainPostShort from '~/components/MainPostShort.vue';
import MainCovid from '~/components/MainCovid.vue';
import listCategory from '~/components/listCategory.vue';
import mainList from '~/apollo/queries/main-list.gql';
export default {
  components: {
    MainPostShort,
    MainCovid,
    listCategory,
  },
  data() {
    return {
      mainList: '',
    };
  },
  apollo: {
    mainList: {
      prefetch: true,
      query: mainList,
      update(data) {
        return data.page.main_page.postList;
      },
    },
  },
  head() {
    return {
      title: 'doroga',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
};
</script>
<style lang="stylus">
.main__header
  background: #25282B
  padding-top: 32px
  padding-bottom: 48px
  &-header
    position: relative
    z-index: 2
  &-title
    font-family: 'Montserrat-ExtraBold'
    color: #ffffff
    font-size: 48px
  &-icon
    position: absolute
    right: 0
    top: -25px
</style>
