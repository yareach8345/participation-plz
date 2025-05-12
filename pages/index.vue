<script setup lang="ts">

</script>

<template>
  <main>
    <neumorphism-box>
      <div class="my-5 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-heart-icon lucide-book-heart"><path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
        <h2 class="text-2xl mt-2">오늘 모임 참여하시나요?</h2>
      </div>
      <div class="flex justify-center">
        <neumorphism-icon-btn
            @click="() => {console.log('click')}"
            @mouseenter="() => console.log('enter')"
            @mouseleave="() => console.log('leave')"

            class="hover:bg-yes"
        >
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big stroke-yes"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
          </template>
          <div class="text-xl">
            참여 가능합니다!
          </div>
        </neumorphism-icon-btn>
        <neumorphism-icon-btn
            class="hover:bg-no"
        >
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban stroke-no"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
          </template>
          <div class="text-xl">
            불가능합니다.
          </div>
        </neumorphism-icon-btn>
      </div>

      <div class="my-5 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed-icon lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>
        <h2 class="text-2xl mt-3">오늘 식사 참여하시나요?</h2>
      </div>
      <div class="flex justify-center">
        <neumorphism-icon-btn
            @click="() => {console.log('click')}"
            @mouseenter="() => console.log('enter')"
            @mouseleave="() => console.log('leave')"

            class="hover:bg-yes"
        >
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big stroke-yes"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
          </template>
          <div class="text-xl">
            참여 가능합니다!
          </div>
        </neumorphism-icon-btn>
        <neumorphism-icon-btn
            class="hover:bg-no"
        >
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban stroke-no"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
          </template>
          <div class="text-xl">
            불가능합니다.
          </div>
        </neumorphism-icon-btn>
      </div>
    </neumorphism-box>
  </main>
</template>

<style scoped>

</style>