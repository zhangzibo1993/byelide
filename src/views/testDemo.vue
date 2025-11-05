<template>
  <button class="btn">testDemo</button>
</template>

<script setup lang="ts">
// 空即可
</script>

<style lang="less" scoped>
@primary: #409eff;

.btn {
  display: block; /* 重复属性：会报错但不会自动修复 */
  margin: 0 8px; /* 冒号后缺空格：会被提示/修复 */
  font-size: 16px;
  font-weight: bold;
  color: @primary; /* 冒号后缺空格：会被提示 */
  background-color: @primary;
}
</style>
