<template>
  <div class="articles__post-type wrapper__type-2 articles__post-light">
    <NuxtLink :to="`/${articles.categories.nodes[0].slug}${articles.uri}`">
      <div class="articles__post-content">
        <div class="articles__post-second-wrapper-2">
          <div class="articles__post-title">
            <h2 class="post__title-h2">{{ articles.title }}</h2>
          </div>
          <div class="articles__post-header">
            <div class="post__header-date-cat">
              <div class="post__header-cat">
                {{ articles.categories.nodes[0].name }}
              </div>
              <div class="post__header-date">
                {{
                  $dateFns.format(articles.date, 'dd MMMM', {
                    locale: 'ru',
                  })
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="articles__post-picture">
        <img
          v-if="
            articles.featuredImage && articles.featuredImage.node.mediaItemUrl
          "
          class="post__picture-image-type-2"
          :src="articles.featuredImage.node.mediaItemUrl"
        />
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
.articles__post-type_2
  width: 100%
  min-height: 30em
  grid-column-start: span 6
  grid-column-end: span 6
  transition-delay: .18s
.articles__post-second-wrapper-2
  display: flex
  flex-direction: column
  justify-content: flex-end
  height: 100%
  .articles__post-header
    margin-top: 32px
.wrapper__type-2
  display: flex
  flex-direction: column
  overflow: hidden
  position: relative
  height: 36.375em
  border-radius: 14px
  .articles__post-content
    position: absolute
    z-index: 2
    top: 0
    left: 0
    right: 0
    bottom: 0
  .post__header-cat
    margin-right 16px
  .articles__post-picture
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    &::before
      content: ''
      position: absolute
      background: linear-gradient(0.16deg, #000 0.21%, rgba(0,0,0,0.73) 0.22%, rgba(0,0,0,0.13) 70.65%, rgba(0,0,0,0.12) 70.65%)
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      display: block
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1)
      border-radius: 14px
</style>
