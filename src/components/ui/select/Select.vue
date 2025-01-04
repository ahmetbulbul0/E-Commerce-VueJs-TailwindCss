<template>
  <select
    :class="[
      cn(
        'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      ),
    ]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  >
    <slot />
  </select>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>
