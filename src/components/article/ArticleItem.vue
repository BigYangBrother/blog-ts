<template>
  <div class="article-item-wrap">
    <div class="article-item-left">
      <div class="article-main">
        <p class="article-title">{{articleData.articleTitle}}</p>
        <p class="article-desc">{{articleData.articleDesc}}</p>
      </div>
      <div class="article-info">
        <img
          class="header-img info-item"
          :src="articleData.headerImg"
        >
        <span class="author-name info-item">{{articleData.author}}</span>
        <span class="article-page-num info-item">
          <i class="iconfont iconbrowse"></i>
          {{articleData.pageView}}
        </span>
        <span class="article-page-num info-item">
          <i class="iconfont iconemail"></i>
          {{articleData.comments}}
        </span>
      </div>
    </div>
    <div class="article-item-right">
      <img
        class="article-img"
        :src="articleData.articleImage"
      >
      <div class="article-info">
        <p class="article-title">{{articleData.articleTitle}}</p>
        <p class="article-desc">{{articleData.articleDesc}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ArticleItem extends Vue {
  @Prop({ default: {} })
  private articleData!: object;
}
</script>

<style lang="scss">
@keyframes slide-in-tl {
  0% {
    transform: translateY(-1000px) translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
@keyframes shadow-drop-2-center {
  0% {
    transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    transform: translateZ(50px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.5);
  }
}
@keyframes slide-in-blurred-bottom {
  0% {
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 100%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
.article-item-wrap {
  background: rgba(255, 255, 255, 0.8);
  width: 650px;
  margin-bottom: 15px;
  height: 200px;
  border-radius: 4px;
  padding: 20px 15px;
  // animation: slide-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  display: flex;
  justify-content: space-between;
  // animation: slide-in-blurred-bottom .6s cubic-bezier(.23,1.000,.32,1.000) both;
  .article-item-left {
    text-align: left;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;
    .article-main {
      .article-title {
        font-size: 18px;
      }
      .article-desc {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .article-info {
      font-size: 14px;
      display: flex;
      align-items: center;
      .header-img {
        border-radius: 50%;
        width: 30px;
      }
      .info-item {
        margin-right: 5px;
      }
    }
  }
  .article-item-right {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    .article-img {
      width: 200px;
      border-radius: 4px;
      transition: all 0.6s;
    }
    .article-info {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      backface-visibility: hidden;
      background: #333;
      background: rgba(0, 0, 0, 0.6);
      visibility: hidden;
      opacity: 0;
      transition: all 0.35s ease-in-out;
      .article-title {
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        font-size: 16px;
        padding: 10px;
        background: #111;
        margin: 30px 0 0;
        transition: all 0.35s ease-in-out;
        transform: translateX(-100%);
      }
      .article-desc {
        font-style: italic;
        font-size: 12px;
        position: relative;
        color: #bbb;
        padding: 20px;
        text-align: center;
        transition: all 0.35s 0.1s linear;
        transform: translateX(100%);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    &:hover {
      .article-info {
        visibility: visible;
        opacity: 1;
        .article-title,
        .article-desc {
          transform: translateX(0);
        }
      }
      .article-img {
        transform: scale(1.1);
        box-shadow: 0 5px 10px 5px rgba(110, 110, 110, 0.4);
      }
    }
  }
}
.article-item-wrap:hover {
  animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>


