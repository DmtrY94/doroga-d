<template>
  <div :class="post.post_cat.contentType">
    <div v-animate-on-scroll class="material-razbor__cover">
      <picture class="cover__razbor-container">
        <source
          v-if="
            post.post_cat.contentRazborImage &&
            post.post_cat.contentRazborImage.sourceUrl
          "
          :data-srcset="`${post.post_cat.contentRazborImage.sourceUrl}?webp`"
          type="image/webp"
        />
        <source
          v-if="
            post.post_cat.contentRazborImage &&
            post.post_cat.contentRazborImage.sourceUrl
          "
          :data-srcset="post.post_cat.contentRazborImage.sourceUrl"
          type="image/png"
        />
        <img
          v-if="
            post.post_cat.contentRazborImage &&
            post.post_cat.contentRazborImage.sourceUrl
          "
          :data-src="post.post_cat.contentRazborImage.sourceUrl"
          class="lazyload post__picture-image-type-2"
          alt="Alternate text for the image"
        />
      </picture>
    </div>
    <div class="material-all__header material-razbor__header">
      <div class="material-all__container">
        <div v-animate-on-scroll class="material-all__tags">
          <div class="material-header-all__cat">
            {{ post.categories.nodes[0].name }}
          </div>
          <div class="material-header-all__date">
            {{ $dateFns.format(post.date, 'dd MMMM', { locale: 'ru' }) }}
          </div>
        </div>
        <h1
          v-animate-on-scroll
          class="post__title-h1 material-header-all__title"
        >
          {{ post.title }}
        </h1>
      </div>
      <div v-animate-on-scroll class="header__razbor-inf">
        <div class="header__razbor-author">
          <shareButtons
            v-animate-on-scroll
            :post="post"
            :routeParam="routeParam"
          ></shareButtons>
        </div>
      </div>
    </div>
    <asidePlan :asidename="post.post_cat.contentRazborContent"></asidePlan>
    <div class="material-footer-all__inf">
      <div class="material-footer-all__author"></div>
      <shareButtons v-animate-on-scroll :post="post" :routeParam="routeParam">
      </shareButtons>
    </div>
  </div>
</template>
<script>
import asidePlan from '~/components/PostType/asidePlan.vue';
import shareButtons from '~/components/shareButtons.vue';

export default {
  components: {
    shareButtons,
    asidePlan,
  },
  props: {
    post: {
      type: [Array, String, Object],
      required: true,
      default: null,
    },
  },
  data() {
    return {
      routeParam: this.$route.params.slug,
    };
  },
};
</script>
<style lang="stylus">
.material-razbor {
  &__cover {
    position: absolute;
    top: -128px;
    left: 0;
    right: 0;
    bottom: 0;
    max-height: 704px;
    height: 100%;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      display: block;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
  }

  &__header {
    min-height: 528px;
  }

  &__container {
    display: flex;
    flex-flow: row nowrap;
  }

  &__aside {
    width: 381px;
    flex-shrink: 0;
    margin-right: 20px;
  }

  &__nav {
    background: #FFFFFF;
    border-radius: 14px;
  }
}

.header__razbor {
  &-tags {
    display: flex;
    align-items: center;
  }

  &-inf {
    position: relative;
    margin-top: 32px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 2;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    margin-bottom: 24px;
  }

  &-author {
    margin: 0 auto;
    max-width: 782px;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

.cover__razbor-container {
  width: 100%;
  height: 704px;
}
</style>
