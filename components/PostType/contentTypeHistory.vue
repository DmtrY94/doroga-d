<template>
  <div :class="post.post_cat.contentType">
    <div class="material-all__header material-history__header">
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
          class="post__title-h1 material-header-all__title material-history__title"
        >
          {{ post.title }}
        </h1>
      </div>
      <div v-animate-on-scroll class="material-header-all__inf">
        <div class="material-header-all__inf-container">
          <div class="header__razbor-author">1</div>
          <shareButtons
            v-animate-on-scroll
            :post="post"
            :routeParam="routeParam"
          ></shareButtons>
        </div>
      </div>
    </div>
    <div class="material-excerpt-history">
      <div class="material-excerpt-history__text" v-html="post.excerpt"></div>
    </div>
    <div
      v-animate-on-scroll
      class="material-history__content material-content-all"
    >
      <div class="material-content-all__article" v-html="post.content"></div>
    </div>
    <div class="material-footer-all__inf">
      <div class="material-footer-all__author"></div>
      <shareButtons v-animate-on-scroll :post="post" :routeParam="routeParam">
      </shareButtons>
    </div>
  </div>
</template>
<script>
import shareButtons from '~/components/shareButtons.vue';

export default {
  components: {
    shareButtons,
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
.material-history {
  &__header {
    margin-top: 24px;
    min-height: 320px;
    justify-content: space-between;
  }

  &__title {
    margin-top: 36px;
  }

  &__content {
    background: #fff;
    border-radius: 14px;
    max-width: 100%;
    padding-top: 48px;
    padding-bottom: 48px;

    .material-content-all__article {
      margin: 0 auto;
      max-width: 782px;
      position: relative;
    }
  }
}

.material-excerpt-history {
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 0 auto;
  max-width: 782px;
  position: relative;

  &__text {
    font-size: 20px;
    line-height: 28px;
    font-family: 'MuseoCyrl-medium';
  }
}
</style>
