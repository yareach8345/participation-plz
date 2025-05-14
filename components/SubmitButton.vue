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
    제출하기
  </custom-button>
</template>

<style scoped>

</style>