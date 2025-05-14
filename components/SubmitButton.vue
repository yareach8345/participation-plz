<script setup lang="ts">
interface Props {
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})
</script>

<template>
  <custom-button
      class="bg-submit text-submit"
      :class="{
        'hover:bg-submit-hover': !props.disabled,
        'opacity-50': props.disabled
      }"
      :disabled="props.disabled"
  >
    <div class="flex justify-center items-center">
      <span class="mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
      </span>
      제출하기
    </div>
  </custom-button>
</template>

<style scoped>

</style>