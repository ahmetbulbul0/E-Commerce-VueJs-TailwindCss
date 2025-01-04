<template>
    <div :class="['rounded-lg border bg-card text-card-foreground shadow-sm', className]">
        <div v-if="$slots.header" class="flex flex-col space-y-1.5 p-6">
            <slot name="header" />
        </div>
        <div v-if="$slots.default" :class="[!$slots.header && 'p-6']">
            <slot />
        </div>
        <div v-if="$slots.footer" class="flex items-center p-6 pt-0">
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    className?: string
}

withDefaults(defineProps<Props>(), {
    className: '',
})
</script>
