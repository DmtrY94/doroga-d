<template>
  <div class="main-header__covid">
    <div v-animate-on-scroll class="covid__title">
      <span class="covid__title-bold">covid-19</span>
      <span>{{ $t('covidindex') }}</span>
      <span class="covid__title-bold" style="color: white">
        {{ mountains.todayCases }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    this.mountains = await fetch(
      'https://corona.lmao.ninja/v2/countries/Ukraine',
    ).then(res => res.json());
  },
  data() {
    return {
      mountains: [],
    };
  },
};
</script>
<style lang="stylus">
.main-header__covid
  display: flex
  justify-content: center
  border-top: 2px solid rgba(255, 255, 255, 0.7)
  border-bottom: 2px solid #2BD39F
  padding-top: 24px
  padding-bottom: 24px
.covid__title
  font-family: 'Montserrat-Regular'
  font-size: 14px
  color: #ffffff
  &-bold
    font-family: 'Montserrat-Bold'
    color: #2BD39F
    margin-right: 8px
</style>
