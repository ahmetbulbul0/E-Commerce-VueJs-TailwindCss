<template>
  <div class="relative inline-block">
    <div
      @mouseenter="show = true"
      @mouseleave="show = false"
      class="inline-block"
    >
      <slot />
    </div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="show"
        :class="[
          'absolute z-50 px-2 py-1 text-sm text-white bg-zinc-900 rounded shadow-lg',
          positionClasses[position]
        ]"
        role="tooltip"
      >
        {{ text }}
        <div
          :class="[
            'absolute w-2 h-2 bg-zinc-900 transform rotate-45',
            arrowClasses[position]
          ]"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Position = 'top' | 'right' | 'bottom' | 'left'

const props = withDefaults(defineProps<{
  text: string
  position?: Position
}>(), {
  position: 'top'
})

const show = ref(false)

const positionClasses: Record<Position, string> = {
  top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
  right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
  bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
  left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2'
}

const arrowClasses: Record<Position, string> = {
  top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  right: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
  bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  left: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2'
}
</script> 