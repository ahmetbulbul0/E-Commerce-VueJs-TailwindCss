<template>
    <div class="form-control">
        <div class="flex items-center space-x-2">
            <button
                type="button"
                role="switch"
                :id="id"
                :aria-checked="modelValue"
                :data-state="modelValue ? 'checked' : 'unchecked'"
                :disabled="disabled"
                :class="[
                    'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    modelValue ? 'bg-primary' : 'bg-input',
                ]"
                @click="!disabled && $emit('update:modelValue', !modelValue)"
            >
                <span
                    :data-state="modelValue ? 'checked' : 'unchecked'"
                    :class="[
                        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
                        modelValue ? 'translate-x-5' : 'translate-x-0',
                    ]"
                />
            </button>
            <label
                v-if="label"
                :for="id"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {{ label }}
                <span v-if="required" class="text-destructive">*</span>
            </label>
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
interface Props {
    modelValue?: boolean
    label?: string
    hint?: string
    error?: string
    required?: boolean
    disabled?: boolean
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    label: undefined,
    hint: undefined,
    error: undefined,
    required: false,
    disabled: false,
    id: () => `switch-${Math.random().toString(36).substring(2, 9)}`,
})

defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()
</script>
