<template>
  <div class="container">
    <headerBreadCrumbs></headerBreadCrumbs>
    <div class="page__header">
      <h1 class="page__title-h1">
        {{ materials.name }}
      </h1>
    </div>
    <div v-if="materials">
      <listCategory :materials="materials.posts.nodes"></listCategory>
      <div>
        {{ localesss }}
        {{ materials.language.slug }}
        test
        {{ (localesss = materials.language.code === 'ru' ? '' : 'ua') }}
      </div>
      <button @click="loadMorePosts">
        {{ 'Show more' }}
      </button>
    </div>
  </div>
</template>
<script>
import listCategory from '~/components/listCategory.vue';
import headerBreadCrumbs from '~/components/headerBreadCrumbs.vue';
import materials from '~/apollo/queries/materials.gql';

const POSTS_PER_PAGE = 4;

export default {
  components: {
    listCategory,
    headerBreadCrumbs,
  },
  data() {
    return {
      materials: '',
      routeParam: this.$route.params.slug,
      localesss: this.$i18n.newLocale,
    };
  },
  apollo: {
    materials: {
      query: materials,
      prefetch: true,
      variables() {
        return {
          materials: this.$route.params.slug,
          first: POSTS_PER_PAGE,
          locale: this.$i18n.locale,
        };
      },
    },
  },
  methods: {
    loadMorePosts() {
      this.$apollo.queries.materials.fetchMore({
        variables: {
          first: this.materials.posts.nodes.length + 10,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          // No new feed posts
          if (!fetchMoreResult) return previousResult;

          // Concat previous feed with new feed posts
          return {
            ...previousResult,
            materials: {
              ...previousResult.materials,
              ...fetchMoreResult.materials,
            },
          };
        },
      });
    },
  },
};
</script>
