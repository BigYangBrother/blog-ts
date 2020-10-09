<template>
  <div>
    <div class="blog-header-wrap">
      <div class="header-logo">
        <img src="https://blog.dirgeest.com/blog/user/head-img.jpg" @click="goHome">
      </div>
      <div class="router-item-wrap">
        <div
          class="custom-btn hover-btn"
          v-for="item in routerList"
          :key="item.name"
          @click="goPage(item.name)"
          v-show="item.show"
        >
          <span class="router-text">
            <i :class="['iconfont', item.icon, 'common-icon']"></i>
            {{item.label}}
          </span>
        </div>
      </div>
      <div class="header-right">
        <div class="input-wrap">
          <input class="search-input" type="text">
          <button class="search-btn">
            <i class="iconsearch iconfont"></i>
            搜索
          </button>
        </div>
        <div class="user-wrap">
          <i class="iconicon-test iconfont"></i>
        </div>
      </div>
    </div>
    <div class="blog-content">
      <router-view class="page-main"></router-view>
    </div>
    <div class="blog-footer-wrap">
      <blog-footer></blog-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BlogFooter from './BlogFooter.vue';

@Component({
  components: {
    BlogFooter
  }
})
export default class BlogHeader extends Vue {
  private name: string = "BlogHeader";
  private routerList: Array<object> = [
    {
      name: "Index",
      label: "首页",
      icon: "iconhome",
      show: true
    },
    {
      name: "Skill",
      label: "技术",
      icon: "iconcode",
      show: true
    },
    {
      name: "Talk",
      label: "说说",
      icon: "iconrejected-order",
      show: true
    },
    {
      name: "Life",
      label: "生活",
      icon: "iconauto",
      show: true
    },
    {
      name: "Friend",
      label: "伙伴",
      icon: "iconoffice-supplies",
      show: true
    },
    {
      name: "About",
      label: "关于",
      icon: "iconlink",
      show: true
    },
    {
      name: 'Write',
      label: "执笔",
      icon: "iconeditor",
      show: false
    }
  ];

  private goPage(name: string): void {
    this.$router.push({name})
  }

  private goHome(): void {
    this.$router.push({name: 'Home'})
  }
}
</script>

<style lang="scss">
$bg-color: #e0e5ec;
@keyframes kenburns-top {
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
    filter: blur(0px);
  }
  100% {
    transform: scale(1.25) translateY(-15px);
    transform-origin: top;
    filter: blur(3px);
  }
}
@keyframes shake-lr {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  10% {
    transform: rotate(8deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-10deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-8deg);
  }
  90% {
    transform: rotate(8deg);
  }
}
.blog-header-wrap {
  background-color: $bg-color;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 3px 10px 0px #bab6b6;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  .header-logo {
    margin-left: 20px;
    img {
      width: 40px;
      border-radius: 50%;
      box-shadow: inset 0 0 10px #000;
      padding: 2px;
      opacity: 1;
      transform: rotate(0);
      transition: all ease 1s;
      cursor: pointer;
    }
    img:hover {
      transform: rotate(360deg);
    }
  }
  .router-item-wrap {
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    .custom-btn {
      font-weight: 500;
      cursor: pointer;
      font-size: 15px;
      margin-right: 10px;
      width: 100px;
      height: 75px;
      line-height: 75px;
      text-align: center;
    }
    .common-icon {
      font-size: 18px;
      margin-right: 3px;
      display: inline-block;
    }
    .custom-btn:hover:after {
      max-width: 100px;
    }
    .custom-btn:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      height: 6px;
      width: 100%;
      max-width: 0;
      background-color: #fe9600;
      transition: max-width 0.25s ease-in-out;
    }
    .custom-btn:hover {
      font-size: 20px;
      transition: font-size 0.25s ease-in-out;
      .router-text {
        color: #fe9600;
        transition: color 0.25s ease-in-out;
      }
      .common-icon {
        font-size: 20px;
        animation: shake-lr 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .input-wrap {
      display: flex;
      align-items: center;
      margin-right: 20px;
      .search-input {
        border: none;
        outline: none;
        border-radius: 24px 0 0 24px;
        padding-left: 20px;
        font-size: 16px;
        height: 40px;
        width: 250px;
      }
      .search-btn {
        font-size: 14px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 0 6px 6px 0;
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .user-wrap {
      i {
        font-size: 40px;
      }
    }
  }
}
.blog-header-wrap:hover {
  box-shadow: 0px 10px 10px 0px #bab6b6;
}
.page-main {
  padding-bottom: 50px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* filter: blur(3px); */
  height: 100vh;
  /* animation: kenburns-top 5s ease-out infinite alternate-reverse both; */
}
</style>

