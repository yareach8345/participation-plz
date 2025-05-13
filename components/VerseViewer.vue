<script setup lang="ts">
interface Props {
  verse: string
  content: string
  description?: string | undefined
}

const props = defineProps<Props>()
</script>

<template>
  <NeumorphismBox>
    <div class="break-keep p-3">{{props.content}}</div>
    <div><b>{{props.verse}}</b></div>
    <template v-if="props.description !== undefined">
      <hr class="border-thin m-1"/>
      {{description}}
    </template>
  </NeumorphismBox>
</template>

<style scoped>

</style>