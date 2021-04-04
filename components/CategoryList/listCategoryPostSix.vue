<template>
  <div class="articles__post-type wrapper__type-6">
    <NuxtLink :to="`/${articles.categories.nodes[0].slug}${articles.uri}`">
      <div class="articles__post-content">
        <div class="articles__post-second-wrapper-6">
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
          <div class="articles__post-number">
            {{ articles.post_cat.typePost6MainNumber }}
            <div class="articles__post-description">
              <span>{{ articles.title }}</span>
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
.wrapper__type-6
  height: 30em
.articles__post-type_6
  width: 100%
  grid-column-start: span 4
  grid-column-end: span 4
  transition-delay: .06s
  background: #25282B
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1)
  &:hover
    border-radius: 14px
.articles__post-second-wrapper-6
  text-align: center
  height: 30em
  border-bottom: 2px solid #10C18A
  display: flex
  flex-direction: column
  .articles__post-header
    justify-content: center
  .post__header-date-cat
    display: flex
    flex-direction: column
    align-items: center
  .post__header-cat
    color: #10C18A
    border-radius: 8px
    border: 1px solid rgba(255, 255, 255, 0.1)
    margin-bottom: 8px
  .post__header-date
    color: rgba(255, 255, 255, 0.75)
    font-family: 'Montserrat-Regular'
.articles__post-number
  font-size: 96px
  font-family: 'Montserrat-ExtraBold'
  color: #ffffff
  flex: 1
  justify-content: center
  display: flex
  flex-direction: column
.articles__post-description
  margin-top 48px
  color: #ffffff
  font-size: 16px
  line-height: 140%
  font-family: 'Montserrat-Regular'
</style>
