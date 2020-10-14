<template>
  <div class="home-wrap">
    <div class="page-top-nav">
      <div
        class="nav-item"
        v-for="item in navInfo"
      >
        <a
          :href="item.link"
          v-if="item.link"
        >
          <i :class="['iconfont', item.icon]"></i>
          <span>{{item.label}}</span>
        </a>
        <div v-else @click="navAction(item.key)">
          <i :class="['iconfont', item.icon]"></i>
          <span>{{item.label}}</span>
        </div>
      </div>
    </div>
    <div class="page-main">
      <img
        :src="headerImg"
        class="header-img"
        @click="navAction(2)"
      >
      <!-- <div class="my-info-wrap">
        <div class="info-item" v-for="item in contact">
          <i :class="['iconfont', item.icon]"></i>
          <span>{{item.label}}</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private name: string = "主页";
  private headerImg: string =
    "https://blog.dirgeest.com/blog/user/head-img.jpg";
  private navInfo: Array<object> = [
    {
      label: "Github",
      link: "https://github.com/BigYangBrother",
      icon: "icongithub",
      key: 0
    },
    {
      label: "联系我",
      link: "",
      icon: "iconphone",
      key: 1
    },
    {
      label: "博客",
      link: "",
      icon: "iconlink",
      key: 2
    }
  ];
  private contact: Array<object> = [
    {
      label: "QQ",
      link: "#",
      icon: "iconQQ",
      key: 1
    },
    {
      label: "微信",
      link: "#",
      icon: "iconweixin",
      key: 2
    },
    {
      label: "邮箱",
      link: "#",
      icon: "iconyouxiang",
      key: 3
    },
    {
      label: "知乎",
      link: "#",
      icon: "iconzhihu",
      key: 4
    }
  ];
  private navAction(key: number): void {
    switch (key) {
      case 1 : console.log('1')
      break
      case 2: this.$router.push('Index')
      break
    }
  }
}
</script>

<style lang="scss">
@keyframes bounce-in-top {
  0% {
    transform: translateY(-300px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(200px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(135px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(200px);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(172px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(200px);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(192px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(200px);
    animation-timing-function: ease-out;
  }
}
@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
.home-wrap {
  height: 100vh;
  background-image: url("~@/assets/images/bgimages/3.jpg");
  .page-top-nav {
    display: flex;
    justify-content: flex-end;
    height: 60px;
    align-items: center;
    color: #fff;
    .nav-item {
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      margin-right: 20px;
      animation: tracking-in-expand-fwd .8s cubic-bezier(.215,.61,.355,1.000) both;
      a {
        color: #fff;
      }
      i {
        margin-right: 5px;
        font-size: 18px;
      }
      a,
      div {
        display: flex;
        align-items: center;
      }
    }
  }
  .page-main {
    .header-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      animation: bounce-in-top 1.1s both;
      box-shadow: inset 0 0 10px #000;
      padding: 2px;
      opacity: 1;
    }
    .my-info-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(200px);
    }
  }
}
</style>

