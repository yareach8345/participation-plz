<script setup lang="ts">
interface Time {
  hours: number
  minutes: number
  seconds: number
}

interface Props {
  gatheringDay?: boolean
  gatheringTime: Date
}

const props = withDefaults(defineProps<Props>(), {
  gatheringDay: true,
})

const currentTime = ref(new Date())

onMounted(() => {
  if(import.meta.client) {
    const handler = setInterval(() => {
      currentTime.value = new Date()
    }, 1000)

    onUnmounted(() => {
      clearInterval(handler)
    })
  }
})

const time = computed(() => {
  const sec = (props.gatheringTime.getTime() - currentTime.value.getTime()) / 1000
  if (sec <= 0 || !props.gatheringDay) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  } else {
    const hours = Math.floor(sec / 60 / 60 % 24)
    const minutes = Math.floor(sec / 60 % 60)
    const seconds = Math.floor(sec % 60)
    return { hours, minutes, seconds }
  }
})

const timeString = computed(() => {
  const hours = time.value.hours.toString().padStart(2, "0")
  const minutes = time.value.minutes.toString().padStart(2, "0")
  const seconds = time.value.seconds.toString().padStart(2, "0")
  return `${hours}:${minutes}:${seconds}`
})

const timeColor = computed(() => {
  if(time.value.hours === 0 && time.value.minutes === 0 && time.value.seconds === 0) {
    return "text-red-900"
  } if(time.value.hours === 0) {
    return "text-red-500"
  } if(time.value.hours < 3) {
    return "text-red-500"
  } else {
    return ""
  }
})
</script>

<template>
  <client-only>
    <span :class="[timeColor]">{{timeString}}</span>
  </client-only>
</template>

<style scoped>

</style>