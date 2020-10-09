<template>
  <div class="blog-footer">
    <div class="copy-right-time">
      Copyright @ 2020
    </div>
    <div class="copy-right-number">
      黑ICP备20003721号 | 网站编号: 6000217
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BlogFooter extends Vue {

}

</script>


<style lang="scss">
.blog-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  color: #fff;
}
</style>
