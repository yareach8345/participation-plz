<script setup lang="ts">
const selectValue = reactive({
  dinner: undefined as boolean | undefined,
  gathering: undefined as boolean | undefined,
})
</script>

<template>
  <main class="flex flex-col items-center">
    <verse-viewer
        verse="마 18:19-20"
        content="진실로 다시 너희에게 이르노니 너희 중에 두 사람이 땅에서 합심하여 무엇이든지 구하면 하늘에 계신 내 아버지께서 저희를 위하여 이루게 하시리라 두 세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라"
        description="모이라는 의미"
        class="md:w-[75%] lg:w-[50%]"
    />
    <neumorphism-box class="w-[100%]">
      <question
          object="오늘 식사"
          interrogative="참석하시나요?"
          positive-predicate="참석합니다!"
          negative-predicate="불참합니다."
          v-model="selectValue.dinner"
      >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed-icon lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>
        </template>
      </question>

      <question
          object="오늘 모임"
          interrogative="참석하시나요?"
          positive-predicate="참석합니다!"
          negative-predicate="불참합니다."
          v-model="selectValue.gathering"
      >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-heart-icon lucide-book-heart"><path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
        </template>
      </question>
    </neumorphism-box>
  </main>
</template>

<style scoped>

</style>