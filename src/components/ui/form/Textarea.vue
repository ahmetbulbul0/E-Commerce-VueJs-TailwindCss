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
        <textarea
            :id="id"
            ref="textarea"
            v-bind="$attrs"
            :value="modelValue"
            :rows="rows"
            :class="[
                'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
                error ? 'border-destructive ring-destructive/50' : 'hover:border-primary/50',
                disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-text',
            ]"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
        ></textarea>
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
    modelValue?: string
    label?: string
    hint?: string
    error?: string
    required?: boolean
    disabled?: boolean
    rows?: number
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    label: undefined,
    hint: undefined,
    error: undefined,
    required: false,
    disabled: false,
    rows: 4,
    id: () => `textarea-${Math.random().toString(36).substring(2, 9)}`,
})

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const textarea = ref<HTMLTextAreaElement | null>(null)
</script>
