<template>
    <Teleport to="body">
        <!-- Backdrop -->
        <Transition name="fade">
            <div
                v-if="modelValue"
                class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                @click="$emit('update:modelValue', false)"
            />
        </Transition>

        <!-- Dialog -->
        <Transition name="scale">
            <div
                v-if="modelValue"
                class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
                :class="className"
            >
                <!-- Header -->
                <div
                    v-if="$slots.header"
                    class="flex flex-col space-y-1.5 text-center sm:text-left"
                >
                    <slot name="header" />
                </div>

                <!-- Content -->
                <div v-if="$slots.default" class="relative flex flex-col gap-4">
                    <slot />
                </div>

                <!-- Footer -->
                <div
                    v-if="$slots.footer"
                    class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
                >
                    <slot name="footer" />
                </div>

                <!-- Close Button -->
                <button
                    type="button"
                    class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    @click="$emit('update:modelValue', false)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                    <span class="sr-only">Kapat</span>
                </button>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
interface Props {
    modelValue?: boolean
    className?: string
}

withDefaults(defineProps<Props>(), {
    modelValue: false,
    className: '',
})

defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()
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

.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
}
</style>
