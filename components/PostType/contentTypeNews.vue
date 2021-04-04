<template>
  <div :class="post.post_cat.contentType">
    <div class="material-news__header">
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
          class="post__title-h1 material-header-all__title material-news__title"
        >
          {{ post.title }}
        </h1>
      </div>
    </div>
    <div
      v-animate-on-scroll
      class="material-news__content material-content-all"
    >
      <div class="material-content-all__article" v-html="post.content"></div>
    </div>
    <div
      v-animate-on-scroll
      class="material-footer-all__inf material-footer-news"
    >
      <div class="material-footer-all__author"></div>
      <shareButtons :post="post" :routeParam="routeParam"> </shareButtons>
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
.content-type-news {
  background: #25282b;
  min-height: 100vh;
}

.material-news {
  &__header {
    margin-top: 24px;
  }

  &__title {
    margin-top: 32px;
  }

  &__content {
    margin-top: 48px;

    .material-content-all__article p {
      color: rgba(255, 255, 255, 0.75);
    }
  }
}

.material-footer-news {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  justify-content: center;
  border-bottom: 2px solid #fff;
}
</style>
