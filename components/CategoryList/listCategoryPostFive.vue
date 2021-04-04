<template>
  <div class="articles__post-type wrapper__type-5">
    <nuxt-link
      :to="localePath(`/${articles.categories.nodes[0].slug}${articles.uri}`)"
    >
      <div class="articles__post-content">
        <div class="articles__post-picture-circle">
          <img
            v-if="
              articles.featuredImage && articles.featuredImage.node.mediaItemUrl
            "
            class="post__picture-image-type-2"
            :src="articles.featuredImage.node.mediaItemUrl"
          />
        </div>
        <div class="articles__post-second-wrapper-5">
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
          <div class="articles__post-title">
            <h2 class="post__title-h2">{{ articles.title }}</h2>
          </div>
        </div>
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
.articles__post-type_5
  width: 100%
  grid-column-start: span 4
  grid-column-end: span 4
  transition-delay: .15s
  background: #fff
  border-radius: 14px
  &:hover
    .articles__post-picture-circle
      border-radius: 45px
    .post__title-h2
      color: #0A825C
.articles__post-picture-circle
  position: relative
  overflow: hidden
  height: 286px
  border-radius: 100%
  transition: 0.35s all
  &::before
    content: ''
    padding-bottom: 66.66%
    display: table
.articles__post-second-wrapper-5
  margin-top: 48px
  .articles__post-title
    margin-top: 24px
  .post__title-h2
    font-size: 20px
    line-height: 24px
  .post__header-cat
    background: #2BD39F
    color: #25282B
  .post__header-date
    color: #25282B
    margin-left: 16px
    font-family: 'Montserrat-Regular'
</style>
