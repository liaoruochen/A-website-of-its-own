<template>
    <div class="box">
        <middletitle></middletitle>
    </div>

</template>

<script>
import title from "@/components/index/title";

export default {
  components: {
    middletitle: title
  }
};
</script>

<style scoped>
.box {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url("https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/01/0F/ChMkJlbKwymIHdPTAAl0H6TmNdsAALGywB2NgsACXQ3628.jpg") no-repeat;
  /* https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0C/0D/ChMkJlnF0vKIPFlaANd0cSO7qRUAAguMgJ2LX4A13SJ836.jpg */

  /* https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0C/0D/ChMkJ1nF0qeIKJknAGynUiQKVJEAAguMAOPrWIAbKdq341.jpg */

  background-size: cover;
}
</style>