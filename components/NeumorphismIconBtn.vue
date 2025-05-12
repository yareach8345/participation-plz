<script setup lang="ts">
interface Emits {
  (e: 'click'): void,
  (e: 'mouseenter'): void,
  (e: 'mouseleave'): void,
}

const emits = defineEmits<Emits>();
</script>

<template>
<neumorphism-btn
    class="flex flex-col items-center w-[43%] sm:w-[33%] md:max-w-[30%]"
    @click="emits('click')"
    @mouseenter="emits('mouseenter')"
    @mouseleave="emits('mouseleave')"
>
  <slot name="icon"/>
  <slot></slot>
</neumorphism-btn>
</template>

<style scoped>

</style>