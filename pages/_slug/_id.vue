<template>
  <div
    v-if="post"
    v-animate-on-scroll
    class="content__material"
    :class="post.post_cat.contentType"
  >
    <headerBreadCrumbs />
    <div class="container">
      <postType :post="post"></postType>
    </div>
  </div>
</template>
<script>
import postType from '~/components/postType.vue';
import headerBreadCrumbs from '~/components/headerBreadCrumbs.vue';
import post from '~/apollo/queries/post.gql';

export default {
  components: {
    postType,
    headerBreadCrumbs,
  },
  data() {
    return {
      post: '',
      routeParam: this.$route.params.id,
    };
  },
  apollo: {
    post: {
      query: post,
      variables() {
        return {
          post: this.$route.params.id,
        };
      },
      prefetch: ({ route }) => {
        return {
          post: route.params.id,
        };
      },
      update(data) {
        return data.postBy;
      },
    },
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
};
</script>
<style lang="stylus">
.content__material {
  position: relative;
}
</style>
