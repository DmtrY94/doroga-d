<template>
  <div class="module__goback">
    <button class="module__goback-button" @click="goBack"><Back /></button>
  </div>
</template>
<script>
import Back from '@/assets/svg/back.svg';

export default {
  components: {
    Back,
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style lang="stylus">
.module__goback
  position: absolute
  left: 0
  top: 0
  &-button
    cursor: pointer
    border: 1px solid #F3F4F4
    background: #ffffff
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    width: 40px
    height: 40px
    border-radius: 14px
    outline: none
    transition: 0.3s all
    &:hover
      background: #10c18a
</style>
