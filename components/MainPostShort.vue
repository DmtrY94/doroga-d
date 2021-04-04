<template>
  <div class="main-header__container">
    <div
      v-for="postMains in postMain"
      :key="postMains.id"
      class="main-header__post"
    >
      <div v-if="postMains.categories" style="color: white">
        <NuxtLink
          :to="`/${postMains.categories.nodes[0].slug}/${postMains.slug}`"
        >
          <div
            v-for="postMainCategories in postMains.categories.nodes.slice(1)"
            :key="postMainCategories.id"
            class="main-header__post-cat"
          >
            {{ postMainCategories.name }}
          </div>
          <div v-animate-on-scroll class="main-header__post-title">
            {{ postMains.title }}
          </div>
          <div class="main-header__post-date">
            {{ $dateFns.format(postMains.date, 'dd MMMM', { locale: 'ru' }) }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import postMain from '~/apollo/queries/main-post-header.gql';
export default {
  data() {
    return {
      postMain: '',
    };
  },
  apollo: {
    postMain: {
      query: postMain,
      variables() {
        return {
          postMain: 'Main',
        };
      },
      update(data) {
        return data.posts.nodes;
      },
    },
  },
};
</script>
<style lang="stylus">

.main-header
  &__container
    margin-top: 8px
  &__post
    display: block
    border-top: 2px solid rgba(255, 255, 255, 0.7)
    &-cat
      padding-top: 16px
      font-size: 12px
      text-transform: uppercase
      color: #2BD39F
      font-family: 'MuseoCyrl-medium'
    &-title
      font-family: 'Montserrat-Bold'
      color: #ffffff
      font-size: 24px
      padding-top: 16px
      padding-bottom: 16px
    &-date
      font-family: 'Montserrat-Regular'
      font-size: 14px
      color: rgba(255, 255, 255, 0.7)
      padding-bottom: 16px
</style>
