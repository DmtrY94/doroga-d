<template>
  <div class="material-razbor__container">
    <div v-animate-on-scroll class="material-razbor__aside">
      <div class="material-razbor__nav">
        <h4
          v-animate-on-scroll
          class="material-razbor__nav-title title-style-all"
        >
          ~ Содержание ~
        </h4>
        <ul class="material-razbor__list">
          <li
            v-for="contentRazbor in asidename"
            :key="contentRazbor.fieldGroupName"
            v-scroll-to="
              '#' + 'material-razbor-block--' + contentRazbor.numberPlan
            "
            v-animate-on-scroll
            class="material-razbor__item"
          >
            <span class="material-razbor__item-number">
              {{ contentRazbor.numberPlan }}.
            </span>
            {{ contentRazbor.namePlan }}
          </li>
        </ul>
      </div>
    </div>
    <div class="material-razbor__main">
      <div
        v-for="contentMain in asidename"
        :id="'material-razbor-block--' + contentMain.numberPlan"
        :key="contentMain.numberPlan"
        v-animate-on-scroll
        class="material-razbor__main-block"
      >
        <h3
          v-animate-on-scroll
          class="material-razbor__main-title title-style-all"
        >
          <span class="material-razbor__main-number"
            >~{{ contentMain.numberPlan }}~</span
          >
          <span class="material-razbor__main-titl-c">{{
            contentMain.namePlan
          }}</span>
        </h3>
        <div v-animate-on-scroll v-html="contentMain.textRazborBlock"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    asidename: {
      type: [Array, String, Object],
      required: true,
      default: null,
    },
  },
};
</script>
<style lang="stylus">
.material-razbor {
  &__container {
    margin-top: 40px;
    display: flex;
    flex-flow: row nowrap;
  }

  &__aside {
    width: 381px;
    flex-shrink: 0;
    margin-right: 20px;
  }

  &__nav {
    padding: 32px;
    background: #FFFFFF;
    border-radius: 14px;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;

    &-title {
      text-align: center;
      font-size: 22px;
    }
  }

  &__list {
    padding: 0;
  }

  &__item {
    display: flex;
    padding-top: 24px;
    padding-bottom: 24px;
    font-family: 'MuseoCyrl-regular';
    font-size: 18px;
    color: #000;
    border-bottom: 2px solid #25282B;
    cursor: pointer;

    &:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    &-number {
      color: #10C18A;
      padding-right: 8px;
    }
  }

  &__main {
    position: relative;

    &-block {
      background: #FFFFFF;
      border-radius: 14px;
      margin-bottom: 16px;
      padding-top: 48px;
      padding-bottom: 48px;
      padding-left: 80px;
      padding-right: 80px;
    }

    &-title {
      font-size: 28px;
      display: flex;
      align-items: flex-start;

      &-c {
        display: block;
      }
    }

    &-number {
      font-family: 'MuseoCyrl-medium';
      color: #10C18A;
      border-right: 2px solid #25282B;
      padding-right: 16px;
      margin-right: 16px;
    }
  }
}
</style>
