<template>
  <div
    class="switch__lang"
    :class="{ active: active }"
    @click="active = !active"
  >
    <div class="btn-circle absolute rounded-full bg-white shadow w-8 h-8"></div>
    <div class="switch__lang-name">
      <nuxt-link
        v-for="(locale, i) in showLocales"
        :key="i"
        :to="switchLocalePath(locale.code)"
        class="switch__name"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  computed: {
    showLocales() {
      return this.$i18n.locales;
    },
  },
};
</script>

<style lang="stylus">
.switch__lang {
  transition: 0.3s;
  background: #25282B;
  width: 62px;
  height: 32px;
  border-radius: 50px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &-name {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

.switch__lang.active .switch__lang-name .switch__name:first-child {
  color: #fff;
}

.switch__lang.active .switch__lang-name .switch__name:last-child {
  color: #25282B;
}

.switch__lang-name .switch__name:last-child {
  color: #fff;
}

.btn-circle {
  transition: 0.3s;
  position: absolute;
  left: 2px;
  background: #ffffff;
  width: 28px;
  height: 28px;
  border-radius: 28px;
}

.switch__lang.active .btn-circle {
  left: 32px;
  position: absolute;
}

.switch__name {
  transition: 0.3s;
  padding: 6px 12px;
  font-family: 'MuseoCyrl-Medium';
}

.switch__name.header-nav__item-active {
  color: #25282B;
}
</style>
