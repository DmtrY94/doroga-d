<template>
  <div class="wrapper__type-3 articles__post-dark">
    <NuxtLink :to="`/${articles.categories.nodes[0].slug}${articles.uri}`">
      <div class="articles__post-content">
        <div class="articles__post-second-wrapper-3">
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
              <span>{{ articles.title }} ~</span>
              <span class="articles__title-second-3" v-html="articles.excerpt">
              </span>
            </h2>
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
.articles__post
  &-type_3
    width: 100%
    grid-column-start: span 12
    grid-column-end: span 12
    transition-delay: .2s
  &-second-wrapper-3
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
.wrapper__type
  &-3
    position: relative
    overflow: hidden
    height: 21.438em
    border-top: 2px solid #25282b
    border-bottom: 2px solid #25282b
    .articles__post-content
      position: absolute
      z-index: 2
      top: 0
      left: 0
      right: 0
      bottom: 0
      padding-left: 0
      padding-right: 0
      padding-top: 32px
    .articles__post-picture
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      &::before
        content: ''
        position: absolute
        background: linear-gradient(0.16deg, #000000 0.21%, rgba(0, 0, 0, 0.73) 0.22%, rgba(0, 0, 0, 0.13) 70.65%, rgba(0, 0, 0, 0.12) 70.65%)
        top: 0
        left: 0
        right: 0
        bottom: 0
        z-index: 1
        display: block
        padding-bottom: 0
</style>
