<script setup lang="ts">
interface Props {
  disabled?: boolean;
}

interface Emits {
  (e: 'click'): void,
  (e: 'mouseenter'): void,
  (e: 'mouseleave'): void,
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const emits = defineEmits<Emits>()
</script>

<template>
  <button
      class="shadow-neumorphism p-4 rounded-lg m-2"
      @click="emits('click')"
      @mouseenter="emits('mouseenter')"
      @mouseleave="emits('mouseleave')"
      :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>