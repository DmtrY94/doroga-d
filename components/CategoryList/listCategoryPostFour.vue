<template>
  <div class="articles__post-type wrapper__type-4 articles__post-light">
    <nuxt-link
      :to="localePath(`/${articles.categories.nodes[0].slug}${articles.uri}`)"
    >
      <div class="articles__post-content">
        <div class="articles__post-second-wrapper-4">
          <div class="articles__post-header">
            <div class="post__header-date-cat">
              <div class="post__header-cat">
                {{ articles.categories.nodes[0].name }}
              </div>
            </div>
            <div class="post__footer-date">
              {{ $dateFns.format(articles.date, 'dd MMMM', { locale: 'ru' }) }}
            </div>
          </div>
          <div class="articles__post-title">
            <h2 class="post__title-h2 articles__title-type-4">
              {{ articles.title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="articles__post-picture">
        <img
          v-if="
            articles.featuredImage && articles.featuredImage.node.mediaItemUrl
          "
          class="post__picture-image-type-3"
          :src="articles.featuredImage.node.mediaItemUrl"
        />
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      type: [Array, String, Object],
      required: true,
      default: null,
    },
  },
};
</script>
<style lang="stylus">
.articles__post {
  &-type_4 {
    width: 100%;
    grid-column-start: span 12;
    grid-column-end: span 12;
    transition-delay: 0.15s;
  }

  &-second-wrapper-4 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .articles__post-title {
      flex: 1;
      align-items: flex-end;
      display: flex;
    }
  }
}

.wrapper__type {
  &-4 {
    position: relative;
    overflow: hidden;
    height: 36.375em;
    border-radius: 14px;

    .articles__post-content {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .articles__post-picture {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      &::before {
        content: '';
        position: absolute;
        background: linear-gradient(0.16deg, #000000 0.21%, rgba(0, 0, 0, 0.73) 0.22%, rgba(0, 0, 0, 0.13) 70.65%, rgba(0, 0, 0, 0.12) 70.65%);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        display: block;
        padding-bottom: 0;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        border-radius: 14px;
      }
    }

    .post__header-cat {
      background: #ffffff !important;
      color: #25282B !important;
    }
  }
}
</style>
