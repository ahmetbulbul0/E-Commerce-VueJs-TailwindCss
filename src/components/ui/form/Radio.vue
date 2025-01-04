<template>
    <div class="form-control">
        <div class="flex items-center space-x-2">
            <input
                :id="id"
                type="radio"
                :name="name"
                :value="value"
                :checked="modelValue === value"
                :disabled="disabled"
                :class="[
                    'peer h-4 w-4 shrink-0 rounded-full border border-primary text-primary',
                    'ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                ]"
                @change="$emit('update:modelValue', value)"
            />
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
    modelValue?: any
    value: any
    name: string
    label?: string
    hint?: string
    error?: string
    required?: boolean
    disabled?: boolean
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: undefined,
    label: undefined,
    hint: undefined,
    error: undefined,
    required: false,
    disabled: false,
    id: () => `radio-${Math.random().toString(36).substring(2, 9)}`,
})

defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()
</script>
