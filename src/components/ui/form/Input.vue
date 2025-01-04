<template>
    <div class="form-control w-full">
        <label
            v-if="label"
            :for="id"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block"
        >
            {{ label }}
            <span v-if="required" class="text-destructive">*</span>
        </label>
        <div class="relative">
            <input
                :id="id"
                ref="input"
                v-bind="$attrs"
                :value="modelValue"
                :class="[
                    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
                    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
                    'placeholder:text-muted-foreground',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    error ? 'border-destructive ring-destructive/50' : 'hover:border-primary/50',
                    disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-text',
                    iconLeft ? 'pl-10' : '',
                    iconRight ? 'pr-10' : '',
                ]"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
            <div
                v-if="iconLeft"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
                <slot name="icon-left" />
            </div>
            <div
                v-if="iconRight"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
                <slot name="icon-right" />
            </div>
        </div>
        <label v-if="error" class="text-sm font-medium text-destructive mt-2 block">
            {{ error }}
        </label>
        <label v-if="hint && !error" class="text-sm text-muted-foreground mt-2 block">
            {{ hint }}
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
    modelValue?: string | number
    label?: string
    hint?: string
    error?: string
    required?: boolean
    disabled?: boolean
    iconLeft?: boolean
    iconRight?: boolean
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    label: undefined,
    hint: undefined,
    error: undefined,
    required: false,
    disabled: false,
    iconLeft: false,
    iconRight: false,
    id: () => `input-${Math.random().toString(36).substring(2, 9)}`,
})

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const input = ref<HTMLInputElement | null>(null)
</script>
