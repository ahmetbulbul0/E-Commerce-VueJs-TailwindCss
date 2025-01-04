<template>
    <div :class="['relative overflow-hidden', className]">
        <div ref="viewport" class="h-full w-full overflow-auto scrollbar-none" @scroll="onScroll">
            <slot />
        </div>
        <!-- Scrollbar -->
        <div
            v-if="showScrollbar"
            :class="[
                'absolute right-0.5 top-0.5 h-[calc(100%-4px)] w-2 transition-all',
                scrolling ? 'opacity-100' : 'opacity-0',
            ]"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
        >
            <div
                ref="thumb"
                :style="{
                    height: `${thumbHeight}%`,
                    transform: `translateY(${thumbTop}%)`,
                }"
                class="rounded-full bg-border hover:bg-border/80"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
    className?: string
    hideDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
    className: '',
    hideDelay: 1000,
})

const viewport = ref<HTMLElement | null>(null)
const thumb = ref<HTMLElement | null>(null)
const scrolling = ref(false)
const showScrollbar = ref(false)
const thumbHeight = ref(0)
const thumbTop = ref(0)
let hideTimeout: NodeJS.Timeout | null = null

onMounted(() => {
    updateScrollbar()
    window.addEventListener('resize', updateScrollbar)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateScrollbar)
})

const updateScrollbar = () => {
    if (!viewport.value) return

    const { clientHeight, scrollHeight } = viewport.value
    showScrollbar.value = scrollHeight > clientHeight
    thumbHeight.value = (clientHeight / scrollHeight) * 100
}

const onScroll = () => {
    if (!viewport.value) return

    const { scrollTop, scrollHeight, clientHeight } = viewport.value
    thumbTop.value = (scrollTop / (scrollHeight - clientHeight)) * (100 - thumbHeight.value)

    scrolling.value = true
    if (hideTimeout) clearTimeout(hideTimeout)
    hideTimeout = setTimeout(() => {
        scrolling.value = false
    }, props.hideDelay)
}

const onMouseEnter = () => {
    scrolling.value = true
    if (hideTimeout) clearTimeout(hideTimeout)
}

const onMouseLeave = () => {
    hideTimeout = setTimeout(() => {
        scrolling.value = false
    }, props.hideDelay)
}
</script>

<style scoped>
.scrollbar-none {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.scrollbar-none::-webkit-scrollbar {
    display: none;
}
</style>
