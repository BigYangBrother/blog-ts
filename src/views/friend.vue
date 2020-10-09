<template>
  <div class="friend-wrap">
    <div class="main-content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Friend extends Vue {
  private name: string = '小伙伴'
  private friendDataSet: Array<object> = [
    {
      name: '旁观者',
      blogLink: 'https://delpast.com/',
      github: 'https://github.com/SpectatorWjx',
      headerImg: 'https://q.qlogo.cn/headimg_dl?dst_uin=2637376843&spec=640'
    },
    {
      name: 'YiJun’s Blog',
      blogLink: 'https://www.deeruby.com/',
      github: 'https://github.com/ajun568',
      headerImg: 'https://deeruby.com/assets/img/avatar.d140f8ea.jpg'
    }
  ]
}
</script>

<style lang="scss">
.friend-wrap {
  background-image: url('~@/assets/images/bgimages/2.jpeg');
  display: flex;
  justify-content: center;
  padding-top: 75px;
  .main-content {
    width: 100%;
    background: rgba(255, 255, 255, .5);
    height: 100vh;
  }
}
</style>

