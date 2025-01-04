<template>
    <div
        :class="[
            'mx-auto w-full',
            size === 'sm' && 'max-w-screen-sm',
            size === 'md' && 'max-w-screen-md',
            size === 'lg' && 'max-w-screen-lg',
            size === 'xl' && 'max-w-screen-xl',
            size === '2xl' && 'max-w-screen-2xl',
            className,
        ]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    className?: string
}

withDefaults(defineProps<Props>(), {
    size: 'lg',
    className: '',
})
</script>
