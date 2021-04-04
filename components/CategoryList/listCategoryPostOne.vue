<template>
  <div class="articles__post-type wrapper__type-1 articles__post-dark">
    <NuxtLink :to="`/${articles.categories.nodes[0].slug}${articles.uri}`">
      <div class="articles__post-content">
        <div class="articles__post-title">
          <h2 class="post__title-h2">{{ articles.title }}</h2>
        </div>
        <div class="articles__post-footer">
          <div class="post__header-date-cat">
            <div class="post__header-cat">
              {{ articles.categories.nodes[0].name }}
            </div>
            <div class="post__header-date">
              {{ $dateFns.format(articles.date, 'dd MMMM', { locale: 'ru' }) }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
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
.articles__post-type_1
  width: 100%
  grid-column-start: span 6
  grid-column-end: span 6
  transition-delay: .06s
  background: #ffffff
  &:hover
    border-radius: 14px
    .post__title-h2
      color: #0A825C
.wrapper__type
  &-1
    display: flex
    flex-direction: column
    overflow: hidden
    height: 36.375em
    border-radius: 0
    .articles__post-content
      position: absolute
      z-index: 2
      top: 0
      left: 0
      right: 0
      bottom: 0
      display: flex
      flex-direction: column
    .post__header-cat
      background: #25282b
      color: #ffffff
    .articles__post-title
      align-items: flex-start
      flex: 1
      display: flex
</style>
