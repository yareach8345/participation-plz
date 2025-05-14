<script setup lang="ts">
import { renderMarkdown } from '@/utils/markdown'

interface Props {
  verse: string
  content: string
  description?: string | undefined
}

const props = defineProps<Props>()

const compiledContent = computed(() => renderMarkdown(props.content))
</script>

<template>
  <NeumorphismBox>
    <div class="break-keep p-3 text-lg" v-html="compiledContent"/>
    <div><b>{{props.verse}}</b></div>
    <template v-if="props.description !== undefined">
      <hr class="border-thin m-1"/>
      {{description}}
    </template>
  </NeumorphismBox>
</template>

<style scoped>

</style>