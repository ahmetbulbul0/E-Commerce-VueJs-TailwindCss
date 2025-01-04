<template>
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-8">Form Componentleri</h1>

        <!-- Input -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Input</h2>
            <div class="space-y-4">
                <Input
                    v-model="inputValue"
                    label="Standart Input"
                    placeholder="Bir şeyler yazın..."
                />
                <Input
                    v-model="inputWithIcon"
                    label="İkonlu Input"
                    placeholder="Arama yapın..."
                    icon-left
                >
                    <template #icon-left>
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
                            class="w-4 h-4"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </template>
                </Input>
                <Input
                    v-model="inputWithError"
                    label="Hatalı Input"
                    placeholder="E-posta adresiniz"
                    error="Geçerli bir e-posta adresi giriniz"
                />
                <Input
                    v-model="inputRequired"
                    label="Zorunlu Input"
                    placeholder="Ad Soyad"
                    required
                />
                <Input
                    v-model="inputDisabled"
                    label="Devre Dışı Input"
                    placeholder="Bu input devre dışı"
                    disabled
                />
            </div>
        </section>

        <!-- Select -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Select</h2>
            <div class="space-y-4">
                <Select v-model="selectValue" label="Standart Select" placeholder="Seçim yapın...">
                    <option value="1">Seçenek 1</option>
                    <option value="2">Seçenek 2</option>
                    <option value="3">Seçenek 3</option>
                </Select>
                <Select
                    v-model="selectWithError"
                    label="Hatalı Select"
                    placeholder="Seçim yapın..."
                    error="Lütfen bir seçim yapın"
                >
                    <option value="1">Seçenek 1</option>
                    <option value="2">Seçenek 2</option>
                </Select>
                <Select
                    v-model="selectRequired"
                    label="Zorunlu Select"
                    placeholder="Seçim yapın..."
                    required
                >
                    <option value="1">Seçenek 1</option>
                    <option value="2">Seçenek 2</option>
                </Select>
                <Select
                    v-model="selectDisabled"
                    label="Devre Dışı Select"
                    placeholder="Seçim yapın..."
                    disabled
                >
                    <option value="1">Seçenek 1</option>
                    <option value="2">Seçenek 2</option>
                </Select>
            </div>
        </section>

        <!-- Textarea -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Textarea</h2>
            <div class="space-y-4">
                <Textarea
                    v-model="textareaValue"
                    label="Standart Textarea"
                    placeholder="Mesajınızı yazın..."
                />
                <Textarea
                    v-model="textareaWithError"
                    label="Hatalı Textarea"
                    placeholder="Mesajınızı yazın..."
                    error="Lütfen en az 10 karakter girin"
                />
                <Textarea
                    v-model="textareaRequired"
                    label="Zorunlu Textarea"
                    placeholder="Mesajınızı yazın..."
                    required
                />
                <Textarea
                    v-model="textareaDisabled"
                    label="Devre Dışı Textarea"
                    placeholder="Bu textarea devre dışı"
                    disabled
                />
            </div>
        </section>

        <!-- Checkbox -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Checkbox</h2>
            <div class="space-y-4">
                <Checkbox v-model="checkboxValue" label="Standart Checkbox" />
                <Checkbox
                    v-model="checkboxWithError"
                    label="Hatalı Checkbox"
                    error="Bu alanı işaretlemelisiniz"
                />
                <Checkbox v-model="checkboxRequired" label="Zorunlu Checkbox" required />
                <Checkbox v-model="checkboxDisabled" label="Devre Dışı Checkbox" disabled />
            </div>
        </section>

        <!-- Radio -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Radio</h2>
            <div class="space-y-4">
                <Radio v-model="radioValue" name="radio-group" value="1" label="Seçenek 1" />
                <Radio v-model="radioValue" name="radio-group" value="2" label="Seçenek 2" />
                <Radio
                    v-model="radioWithError"
                    name="radio-group-error"
                    value="1"
                    label="Hatalı Radio"
                    error="Bir seçim yapmalısınız"
                />
                <Radio
                    v-model="radioRequired"
                    name="radio-group-required"
                    value="1"
                    label="Zorunlu Radio"
                    required
                />
                <Radio
                    v-model="radioDisabled"
                    name="radio-group-disabled"
                    value="1"
                    label="Devre Dışı Radio"
                    disabled
                />
            </div>
        </section>

        <!-- Switch -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Switch</h2>
            <div class="space-y-4">
                <Switch v-model="switchValue" label="Standart Switch" />
                <Switch
                    v-model="switchWithError"
                    label="Hatalı Switch"
                    error="Bu ayarı aktif etmelisiniz"
                />
                <Switch v-model="switchRequired" label="Zorunlu Switch" required />
                <Switch v-model="switchDisabled" label="Devre Dışı Switch" disabled />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/ui/form/Input.vue'
import Select from '@/components/ui/form/Select.vue'
import Textarea from '@/components/ui/form/Textarea.vue'
import Checkbox from '@/components/ui/form/Checkbox.vue'
import Radio from '@/components/ui/form/Radio.vue'
import Switch from '@/components/ui/form/Switch.vue'

// Input
const inputValue = ref('')
const inputWithIcon = ref('')
const inputWithError = ref('')
const inputRequired = ref('')
const inputDisabled = ref('')

// Select
const selectValue = ref('')
const selectWithError = ref('')
const selectRequired = ref('')
const selectDisabled = ref('')

// Textarea
const textareaValue = ref('')
const textareaWithError = ref('')
const textareaRequired = ref('')
const textareaDisabled = ref('')

// Checkbox
const checkboxValue = ref(false)
const checkboxWithError = ref(false)
const checkboxRequired = ref(false)
const checkboxDisabled = ref(false)

// Radio
const radioValue = ref('')
const radioWithError = ref('')
const radioRequired = ref('')
const radioDisabled = ref('')

// Switch
const switchValue = ref(false)
const switchWithError = ref(false)
const switchRequired = ref(false)
const switchDisabled = ref(false)
</script>
