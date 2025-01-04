<template>
    <div>
        <Teleport to="body">
            <!-- Backdrop -->
            <Transition name="fade">
                <div
                    v-if="modelValue"
                    class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    @click="$emit('update:modelValue', false)"
                />
            </Transition>

            <!-- Sheet -->
            <Transition :name="transitionClass">
                <div
                    v-if="modelValue"
                    :class="[
                        'fixed z-50 gap-4 bg-background p-6 shadow-lg',
                        'duration-300 ease-in-out',
                        side === 'left' && 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
                        side === 'right' && 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm',
                        side === 'top' && 'inset-x-0 top-0 h-auto',
                        side === 'bottom' && 'inset-x-0 bottom-0 h-auto',
                        className,
                    ]"
                >
                    <!-- Header -->
                    <div v-if="$slots.header" class="flex flex-col space-y-2">
                        <slot name="header" />
                    </div>

                    <!-- Content -->
                    <div class="relative flex flex-col">
                        <slot />
                    </div>

                    <!-- Footer -->
                    <div
                        v-if="$slots.footer"
                        class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
                    >
                        <slot name="footer" />
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    modelValue?: boolean
    side?: 'top' | 'right' | 'bottom' | 'left'
    className?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    side: 'right',
    className: '',
})

defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const transitionClass = computed(() => {
    switch (props.side) {
        case 'left':
            return 'slide-right'
        case 'right':
            return 'slide-left'
        case 'top':
            return 'slide-down'
        case 'bottom':
            return 'slide-up'
        default:
            return 'slide-left'
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.3s ease;
}

.slide-left-enter-from {
    transform: translateX(100%);
}
.slide-left-leave-to {
    transform: translateX(100%);
}

.slide-right-enter-from {
    transform: translateX(-100%);
}
.slide-right-leave-to {
    transform: translateX(-100%);
}

.slide-up-enter-from {
    transform: translateY(100%);
}
.slide-up-leave-to {
    transform: translateY(100%);
}

.slide-down-enter-from {
    transform: translateY(-100%);
}
.slide-down-leave-to {
    transform: translateY(-100%);
}
</style>
