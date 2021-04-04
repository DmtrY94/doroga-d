<template>
  <div class="layout">
    <headerBlock />
    <nuxt />
  </div>
</template>
<script>
import headerBlock from '~/components/headerBlock.vue';
export default {
  components: {
    headerBlock,
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$route.name + '-template-page',
      },
    };
  },
};
</script>
<style lang="stylus">
.layout {
  position: relative;
  background: #E2F8F1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}
.slug___ru-template-page .layout,
.slug___ua-template-page .layout
{
  &::before {
    content: '';
    display: block;
    height: 335px;
    background: #25282B;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transition: 0.3s all;
  }
}
.index___ru-template-page .layout,
.index___ua-template-page .layout
{
  &::before {
    content: '';
    display: block;
    height: 639px;
    background: #25282B;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transition: 0.3s all;
  }
}
.slug-id___ru-template-page .layout,
.slug-id___ua-template-page .layout
{
  &::before {
    content: '';
    display: block;
    height: 506px;
    background: #25282B;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transition: 0.3s all;
  }
}
</style>
