<template>
  <label
    :class="[
      cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      ),
    ]"
  >
    <slot />
  </label>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  className: {
    type: String,
    default: '',
  },
})
</script>
