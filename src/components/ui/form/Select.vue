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
            <select
                :id="id"
                ref="select"
                v-bind="$attrs"
                :value="modelValue"
                :class="[
                    'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2',
                    'text-sm ring-offset-background placeholder:text-muted-foreground',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    error ? 'border-destructive ring-destructive/50' : 'hover:border-primary/50',
                    disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer',
                ]"
                @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
            >
                <option v-if="placeholder" value="" disabled selected class="text-muted-foreground">
                    {{ placeholder }}
                </option>
                <slot></slot>
            </select>
            <div
                class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground"
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
                    class="h-4 w-4 opacity-50"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
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
    placeholder?: string
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    label: undefined,
    hint: undefined,
    error: undefined,
    required: false,
    disabled: false,
    placeholder: undefined,
    id: () => `select-${Math.random().toString(36).substring(2, 9)}`,
})

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const select = ref<HTMLSelectElement | null>(null)
</script>
