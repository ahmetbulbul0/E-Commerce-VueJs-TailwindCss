<template>
    <div class="form-control">
        <div class="flex items-center space-x-2">
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                :disabled="disabled"
                :class="[
                    'peer h-4 w-4 shrink-0 rounded-sm border border-primary',
                    'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                ]"
                @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
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
    id: () => `checkbox-${Math.random().toString(36).substring(2, 9)}`,
})

defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()
</script>
