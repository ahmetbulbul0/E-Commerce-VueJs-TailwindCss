<template>
    <div
        :class="[
            'inline-flex items-center justify-center',
            sizeClasses[size],
            variantClasses[variant],
            className
        ]"
        role="status"
    >
        <svg
            class="animate-spin"
            :class="[sizeClasses[size]]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            ></circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
        <span v-if="text" :class="['ml-2', textClasses[size]]">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
type SizeType = "sm" | "md" | "lg";
type VariantType = "primary" | "secondary" | "success" | "warning" | "danger" | "info";

const props = defineProps({
    size: {
        type: String as () => SizeType,
        default: "md",
        validator: (value: string) => ["sm", "md", "lg"].includes(value),
    },
    variant: {
        type: String as () => VariantType,
        default: "primary",
        validator: (value: string) =>
            ["primary", "secondary", "success", "warning", "danger", "info"].includes(value),
    },
    text: {
        type: String,
        default: "",
    },
    className: {
        type: String,
        default: "",
    },
});

const sizeClasses: Record<SizeType, string> = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
};

const textClasses: Record<SizeType, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
};

const variantClasses: Record<VariantType, string> = {
    primary: "text-blue-500",
    secondary: "text-gray-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
    info: "text-cyan-500",
};
</script> 