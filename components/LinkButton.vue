<script setup lang="ts">
interface Props {
  to: string
}

const { to } = defineProps<Props>()

const onClick = () => {
  window.open(to, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <custom-button
      @click="onClick"
      class="flex flex-col items-center bg-link hover:bg-link-hover"
  >
    <slot></slot>
  </custom-button>
</template>

<style scoped>

</style>