<script setup lang="ts">
interface Props {
  object: string
  interrogative: string
  positivePredicate: string
  negativePredicate: string
}

const {object, positivePredicate, negativePredicate, interrogative} = defineProps<Props>()
</script>

<template>
  <div class="my-5 flex flex-col items-center">
    <slot name="icon"></slot>
    <h2 class="text-2xl mt-3">{{ object }} {{ interrogative }}</h2>
  </div>
  <div class="flex justify-center">
    <custom-button
        @click="() => {console.log('click')}"
        @mouseenter="() => console.log('enter')"
        @mouseleave="() => console.log('leave')"

        class="hover:bg-yes flex flex-col items-center w-[43%] sm:w-[33%] md:max-w-[30%]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big stroke-yes"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
      <div class="text-xl">
        {{positivePredicate}}
      </div>
    </custom-button>
    <custom-button
        class="hover:bg-no flex flex-col items-center w-[43%] sm:w-[33%] md:max-w-[30%]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban stroke-no"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
      <div class="text-xl">
        {{negativePredicate}}
      </div>
    </custom-button>
  </div>
</template>

<style scoped>

</style>