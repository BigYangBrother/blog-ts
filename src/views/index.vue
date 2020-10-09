<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-main">
        <article-item
        v-for="item in articleList"
        :articleData="item"
        :key="item.articleId"></article-item>
      </div>
    </div>
    <div class="index-right">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ArticleItem from '@/components/article/ArticleItem.vue';
import { articleData } from '@/types/index'

@Component({
  components: {
    ArticleItem
  }
})
export default class Index extends Vue {
  private articleList: Array<articleData> = []
  private getArticleList(): void {
    this.articleList = [
      {
        articleId: 1,
        articleTitle: '在Java通过使用itext7来操作PDF',
        articleDesc: '文章描述文章描述文章描述文章描述文章描述文章描述文章描述',
        articleImage: 'https://blog.dirgeest.com/blog/banner/coding.jpg',
        articleTime: '2020-02-09',
        articleTags: [1],
        comments: 0,
        pageView: 10,
        author: 'BrotherYang',
        headerImg: 'https://blog.dirgeest.com/blog/user/head-img.jpg'
      },
      {
        articleId: 2,
        articleTitle: '文章2',
        articleDesc: '文章描述文章描述文章描述文章描述文章描述文章描述文章描述',
        articleImage: 'https://blog.dirgeest.com/blog/banner/coding.jpg',
        articleTime: '2020-02-09',
        articleTags: [1],
        comments: 0,
        pageView: 10,
        author: 'BrotherYang',
        headerImg: 'https://blog.dirgeest.com/blog/user/head-img.jpg'
      },
      {
        articleId: 3,
        articleTitle: '文章3',
        articleDesc: '文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述',
        articleImage: 'https://blog.dirgeest.com/blog/banner/coding.jpg',
        articleTime: '2020-02-09',
        articleTags: [1],
        comments: 0,
        pageView: 10,
        author: 'BrotherYang',
        headerImg: 'https://blog.dirgeest.com/blog/user/head-img.jpg'
      },
      {
        articleId: 4,
        articleTitle: '文章4',
        articleDesc: '文章描述文章描述文章描述文章描述文章描述文章描述文章描述',
        articleImage: 'https://blog.dirgeest.com/blog/banner/coding.jpg',
        articleTime: '2020-02-09',
        articleTags: [1],
        comments: 0,
        pageView: 10,
        author: 'BrotherYang',
        headerImg: 'https://blog.dirgeest.com/blog/user/head-img.jpg'
      },
      {
        articleId: 5,
        articleTitle: '文章5',
        articleDesc: '文章描述文章描述文章描述文章描述文章描述文章描述文章描述',
        articleImage: 'https://blog.dirgeest.com/blog/banner/coding.jpg',
        articleTime: '2020-02-09',
        articleTags: [1],
        comments: 0,
        pageView: 10,
        author: 'BrotherYang',
        headerImg: 'https://blog.dirgeest.com/blog/user/head-img.jpg'
      }
    ]
  }

  private mounted():void {
    this.getArticleList()
  }
}
</script>

<style lang="scss">
.index-wrap {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  background-image: url('~@/assets/images/bgimages/1.jpg');
  .index-left {
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
  }
  .index-right {
    width: 300px;
    background: rgba(255, 255, 255, .8);
  }
}
</style>

