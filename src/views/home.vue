<template>
  <div class="home-wrap">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private name: string = "主页";
  private static headerImg: string =
    "https://blog.dirgeest.com/blog/user/head-img.jpg";
  private static personalInfo: Array<object> = [
    {
      label: "github",
      link: "https://github.com/BigYangBrother",
      icon: "icongithub",
      key: 0
    },
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
}
</script>

<style lang="scss">
.home-wrap {
  height: 100vh;
  background-image: url('~@/assets/images/bgimages/3.jpg');
}
</style>

