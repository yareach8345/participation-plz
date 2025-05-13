<script setup lang="ts">
const data = new Date()
data.setHours(18, 0, 0, 0)
</script>

<template>
  <div class="p-5 text-center bg-neumorphism">
    <header>
      <h1 class="text-5xl pb-2">모임 참여 보고</h1>
      <div class="py-3">
        <div>보고는 빠를수록 은혜롭습니다.</div>
        <timer :gathering-time="data"/>
      </div>
    </header>
    <slot></slot>
    <footer>made by you-know</footer>
  </div>
</template>

<style scoped>

</style>