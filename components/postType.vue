<template>
  <div class="article__post">
    <contentTypeRazbor
      v-if="post.post_cat.contentType === 'content-type-razbor'"
      :post="post"
    >
    </contentTypeRazbor>
    <contentTypeHistory
      v-else-if="post.post_cat.contentType === 'content-type-history'"
      :post="post"
    ></contentTypeHistory>
    <contentTypeNews v-else :post="post"></contentTypeNews>
  </div>
</template>
<script>
import contentTypeRazbor from '~/components/PostType/contentTypeRazbor.vue';
import contentTypeHistory from '~/components/PostType/contentTypeHistory.vue';
import contentTypeNews from '~/components/PostType/contentTypeNews.vue';

export default {
  components: {
    contentTypeRazbor,
    contentTypeHistory,
    contentTypeNews,
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
.material__header {
  max-width: 748px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-cat {
    background: rgba(37, 40, 43, 0.05);
    border-radius: 4px;
    color: #0DA877;
    padding: 0 8px;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    transition-delay: 0.25s;
  }

  &-title--type-h {
    text-align: center;
    margin-top: 8px;
  }

  &-title--type-n {
    text-align: left;
    font-size: 28px;
  }

  &-excerpt {
    max-width: 664px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-bottom: 16px;

    p {
      font-size: 20px;
      margin: 0;
    }
  }

  &-news {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.material__content {
  p {
    max-width: 524px;
    margin-right: auto;
    margin-left: auto;
  }

  &-news {
    .material__image-wrap {
      max-width: 500px;
    }

    p {
      max-width: 500px;
    }
  }

  &-heading-h3 {
    max-width: 524px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'MuseoCyrl-medium';
    font-size: 20px;
    line-height: 28px;
  }

  &-gallery {
    ul {
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;

      li {
        list-style: none;
        display: flex;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          overflow: hidden;
          border-radius: 14px;
        }
      }
    }

    figcaption {
      color: #C6CACC;
      border-top: 1px solid #C6CACC;
      margin-top: 8px;
      padding-top: 4px;
    }
  }
}

.material__image {
  &-wrap {
    margin-top: 32px;
    margin-bottom: 32px;

    figure {
      margin: 0;
      max-width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 14px;
      }
    }

    figcaption {
      background: #c6cacc;
      margin-top: -16px;
      padding-top: 22px;
      padding-bottom: 8px;
      border-bottom-left-radius: 14px;
      border-bottom-right-radius: 14px;
      color: #ffffff;
      text-align: center;
    }
  }
}

.module__cat-date {
  display: flex;
  align-items: center;
  margin-top: 16px;

  .post__footer-date {
    margin-left: 16px;
  }
}
</style>
