<template>
    <button
        :class="[
            cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
                {
                    'bg-primary text-primary-foreground shadow hover:bg-primary/90': variant === 'default',
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90': variant === 'destructive',
                    'border b order-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground': variant === 'outline',
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80': variant === 'secondary',
                    'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
                    'text-primary underline-offset-4 hover:underline': variant === 'link',
                    'h-9 px-4 py-2': size === 'default',
                    'h-10 px-8': size === 'lg',
                    'h-8 rounded-md px-3 text-xs': size === 'sm',
                    'h-9 w-9': size === 'icon',
                },
                className
            ),
        ]"
        :type="type"
        :disabled="disabled"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>

<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
    variant: {
        type: String,
        default: "default",
        validator: (value) => ["default", "destructive", "outline", "secondary", "ghost", "link"].includes(value),
    },
    size: {
        type: String,
        default: "default",
        validator: (value) => ["default", "sm", "lg", "icon"].includes(value),
    },
    className: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "button",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
