<template>
  <div class="module__share-buttons">
    <ShareNetwork
      network="facebook"
      :url="`http://localhost:3000/${routeParam}/${post.slug}`"
      :title="post.title"
      :description="post.excerpt"
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      <div class="module__share-button">
        <facebook />
      </div>
    </ShareNetwork>
    <ShareNetwork
      network="Telegram"
      :url="`http://localhost:3000/${routeParam}/${post.slug}`"
      :title="post.title"
      :description="post.excerpt"
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      <div class="module__share-button">
        <telegram />
      </div>
    </ShareNetwork>
  </div>
</template>
<script>
import facebook from '@/assets/svg/facebook.svg';
import telegram from '@/assets/svg/telegram.svg';

export default {
  components: {
    facebook,
    telegram,
  },
  props: {
    post: {
      type: [Array, String, Object],
      required: true,
      default: null,
    },
    routeParam: {
      type: [Array, String, Object],
      required: true,
      default: null,
    },
  },
};
</script>
<style lang="stylus">
.module__share
  &-buttons
    display: flex
    position: relative
    flex-direction: row
    align-items: center
  &-button
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid rgba(255, 255, 255, 0.15)
    border-radius: 100%
    width: 44px
    height: 44px
    margin-left: 4px
    margin-right: 4px
</style>
