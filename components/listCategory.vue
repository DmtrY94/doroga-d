<template>
  <div class="articles-list__type">
    <div
      v-for="articles in materials"
      :key="articles.id"
      v-animate-on-scroll
      :class="articles.post_cat.typePost"
      class="articles__post"
    >
      <listCategoryPostOne
        v-if="articles.post_cat.typePost === 'articles__post-type_1'"
        :articles="articles"
      >
      </listCategoryPostOne>
      <listCategoryPostTwo
        v-else-if="articles.post_cat.typePost === 'articles__post-type_2'"
        :articles="articles"
      >
      </listCategoryPostTwo>
      <listCategoryPostTree
        v-else-if="articles.post_cat.typePost === 'articles__post-type_3'"
        :articles="articles"
      >
      </listCategoryPostTree>
      <listCategoryPostFour
        v-else-if="articles.post_cat.typePost === 'articles__post-type_4'"
        :articles="articles"
      >
      </listCategoryPostFour>
      <listCategoryPostFive
        v-else-if="articles.post_cat.typePost === 'articles__post-type_5'"
        :articles="articles"
      >
      </listCategoryPostFive>
      <listCategoryPostSix v-else :articles="articles"></listCategoryPostSix>
    </div>
  </div>
</template>
<script>
import listCategoryPostOne from '~/components/CategoryList/listCategoryPostOne.vue';
import listCategoryPostTwo from '~/components/CategoryList/listCategoryPostTwo.vue';
import listCategoryPostTree from '~/components/CategoryList/listCategoryPostTree.vue';
import listCategoryPostFour from '~/components/CategoryList/listCategoryPostFour.vue';
import listCategoryPostFive from '~/components/CategoryList/listCategoryPostFive.vue';
import listCategoryPostSix from '~/components/CategoryList/listCategoryPostSix.vue';

export default {
  components: {
    listCategoryPostOne,
    listCategoryPostTwo,
    listCategoryPostTree,
    listCategoryPostFour,
    listCategoryPostFive,
    listCategoryPostSix,
  },
  props: {
    materials: {
      type: [Array, String, Object],
      required: true,
      default: null,
    },
  },
};
</script>
<style lang="stylus">
.articles-list__type
  grid-gap: 16px
  display: grid
  grid-template-columns: repeat(12, 1fr)
  grid-template-rows: auto
  &-post
    width: 50%
.articles__post
  &-picture
    position: relative
    &::before
      content: ''
      padding-bottom: 66.66%
      display: table
  &-content
    position: relative
    padding: 48px
    z-index: 2
  &-header
    display: flex
    align-items: center
  &-excerpt p
    font-size: 16px
    line-height: 24px
    color #25282B
    margin-top: 16px
    margin-bottom: 0
  &-light
    .post__title-h2
      color: #ffffff
    .post__header-cat
      background: #2BD39F
      color: #25282B
    .post__header-date
      color: #ffffff
      font-family: 'Montserrat-Regular'
    .post__footer-date
      color: rgb(255, 255, 255, 0.5)
      font-family: 'Montserrat-Regular'
  &-dark
    .post__title-h2
      color: #25282B
    .post__header-cat
      background: #25282B
      color: #ffffff
    .post__footer-date, .post__header-date
      color: #25282B
      font-family: 'Montserrat-Regular'
      margin-left: 16px
  &-footer
    display: flex
    align-items: center
.post__picture-image
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: block
  min-width: 100%
  height: 100%
  object-fit: cover
  object-position: center top
  transition: 0.35s all
  &-type-2
    position: absolute
    top: 0
    left: 50%
    display: block
    min-width: 100%
    height: 100%
    -o-object-fit: cover
    object-fit: cover
    -o-object-position: center top
    object-position: center top
    transform: translateX(-50%)
    transition: 0.35s all
  &-type-3
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    display: block
    min-width: 100%
    height: 100%
    object-fit: cover
    transition: 0.35s all
.post__header
  &-date-cat
    display: flex
    flex-direction: row
    align-items: center
    margin-right: 16px
  &-cat
    padding-top: 5px
    padding-bottom: 4px
    padding-left: 8px
    padding-right: 8px
    text-transform: uppercase
    font-size: 16px
    line-height: 16px
    letter-spacing: 1.5px
    font-family: 'MuseoCyrl-medium'
    border-top-right-radius: 8px
    border-bottom-right-radius: 8px
  &-date
    font-size: 14px
  &-icons
    display: flex
.post__footer
  &-date
    color: #5E6366
    font-size: 14px
</style>
