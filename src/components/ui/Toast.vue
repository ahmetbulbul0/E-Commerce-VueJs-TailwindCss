<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-50 pointer-events-none flex flex-col items-end justify-start p-4 gap-2">
      <TransitionGroup
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-x-full opacity-0"
        enter-to-class="transform translate-x-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-x-0 opacity-100"
        leave-to-class="transform translate-x-full opacity-0"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg"
          :class="[
            variantClasses[toast.variant],
            positionClasses[position]
          ]"
          role="alert"
        >
          <div class="p-4">
            <div class="flex items-start">
              <!-- İkon -->
              <div v-if="toast.variant !== 'default'" class="flex-shrink-0">
                <component :is="icons[toast.variant]" class="h-5 w-5" />
              </div>

              <!-- İçerik -->
              <div class="ml-3 w-0 flex-1">
                <p v-if="toast.title" class="text-sm font-medium">
                  {{ toast.title }}
                </p>
                <p class="text-sm">{{ toast.message }}</p>
              </div>

              <!-- Kapat Butonu -->
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  class="inline-flex rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none"
                  @click="removeToast(toast.id)"
                >
                  <span class="sr-only">Kapat</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Toast {
  id: number;
  title?: string;
  message: string;
  variant: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

interface Props {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top-right',
});

const toasts = ref<Toast[]>([]);
let toastId = 0;

const variantClasses = {
  default: 'bg-zinc-800 text-zinc-200',
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-600 text-white',
};

const positionClasses = {
  'top-right': 'top-0 right-0',
  'top-left': 'top-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'bottom-left': 'bottom-0 left-0',
};

const icons = {
  success: {
    template: `
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    `,
  },
  error: {
    template: `
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    `,
  },
  warning: {
    template: `
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    `,
  },
  info: {
    template: `
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `,
  },
};

const addToast = (toast: Omit<Toast, 'id'>) => {
  const id = toastId++;
  const newToast = { ...toast, id };
  toasts.value.push(newToast);

  if (toast.duration !== 0) {
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  }
};

const removeToast = (id: number) => {
  const index = toasts.value.findIndex((t) => t.id === id);
  if (index > -1) {
    toasts.value.splice(index, 1);
  }
};

defineExpose({
  addToast,
  removeToast,
});
</script> 