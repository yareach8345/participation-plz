<script setup lang="ts">
const data = new Date()
data.setHours(18, 0, 0, 0)
</script>

<template>
  <div class="p-7 text-center bg-neumorphism">
    <header>
      <h1 class="text-5xl pb-2">모임 참여 보고</h1>
      <div class="my-4">
        <div class="text-lg mb-1">보고는 빠를수록 은혜롭습니다.</div>
        <div>마감까지 남은 시간 : <timer :gathering-time="data"/></div>
      </div>
    </header>
    <slot></slot>
    <footer>made by you-know</footer>
  </div>
</template>

<style scoped>

</style>