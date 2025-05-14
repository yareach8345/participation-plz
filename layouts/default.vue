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
    <footer>
      <div>made by you-know</div>
      <div class="flex justify-center mt-4">
        <link-button
            to="https://github.com/yareach8345/participation-plz"
            class="text-link"
        >
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></div>
          <div>github</div>
        </link-button>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>