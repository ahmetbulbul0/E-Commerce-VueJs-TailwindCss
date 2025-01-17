<template>
    <div class="container w-full py-6 px-12">
        <!-- Header -->
        <div class="mb-12">
            <h1 class="text-3xl font-bold text-white mb-4">UI Kit</h1>
            <p class="text-gray-400">Bu sayfa, UI bileşenlerinin kullanımını ve özelliklerini gösterir.</p>
        </div>

        <!-- Button Documentation -->
        <div class="space-y-12">
            <section id="button" class="space-y-8">
                <div class="border-b border-border pb-4">
                    <h2 class="text-2xl font-bold text-white">Button</h2>
                    <p class="text-gray-400 mt-2">Çok yönlü, özelleştirilebilir button bileşeni.</p>
                </div>

                <!-- Import Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Import</h3>
                    <div class="border border-border p-4 rounded-md">
                        <code class="text-sm text-gray-300">import Button from '@/components/ui/Button.vue'</code>
                    </div>
                </div>

                <!-- Props Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Props</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-border">
                                    <th class="py-3 text-gray-400">Prop</th>
                                    <th class="py-3 text-gray-400">Tip</th>
                                    <th class="py-3 text-gray-400">Varsayılan</th>
                                    <th class="py-3 text-gray-400">Açıklama</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-300">
                                <tr class="border-b border-border">
                                    <td class="py-3 font-medium">variant</td>
                                    <td>string</td>
                                    <td>'primary'</td>
                                    <td>Button'un görsel stili (primary, secondary, outline, ghost, danger, success)</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="py-3 font-medium">size</td>
                                    <td>string</td>
                                    <td>'md'</td>
                                    <td>Button'un boyutu (sm, md, lg)</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="py-3 font-medium">loading</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Yükleniyor durumunu gösterir</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="py-3 font-medium">disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Button'u devre dışı bırakır</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="py-3 font-medium">className</td>
                                    <td>string</td>
                                    <td>''</td>
                                    <td>Ek CSS sınıfları eklemek için</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Variants Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Varyantlar</h3>
                    <div class="p-6 border border-border rounded-lg space-y-6">
                        <div class="max-w-sm space-y-4">
                            <Input variant="default" placeholder="Default variant" />
                            <Input variant="filled" placeholder="Filled variant" />
                            <Input variant="outline" placeholder="Outline variant" />
                            <Input variant="ghost" placeholder="Ghost variant" />
                        </div>
                        <div class="bg-muted/40 p-4 rounded-md">
                            <code class="text-sm text-gray-300">
                                &lt;Input variant="default" placeholder="Default variant" /&gt;<br>
                                &lt;Input variant="filled" placeholder="Filled variant" /&gt;<br>
                                &lt;Input variant="outline" placeholder="Outline variant" /&gt;<br>
                                &lt;Input variant="ghost" placeholder="Ghost variant" /&gt;
                            </code>
                        </div>
                    </div>
                </div>

                <!-- Input Types with Variants -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Input Tipleri ve Varyantlar</h3>
                    <div class="p-6 border border-border rounded-lg space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <!-- Text Input -->
                            <div class="space-y-4">
                                <h4 class="text-sm font-medium text-white">Text Input</h4>
                                <Input type="text" variant="default" placeholder="Default text" />
                                <Input type="text" variant="filled" placeholder="Filled text" />
                            </div>

                            <!-- Email Input -->
                            <div class="space-y-4">
                                <h4 class="text-sm font-medium text-white">Email Input</h4>
                                <Input type="email" variant="default" placeholder="Default email" />
                                <Input type="email" variant="filled" placeholder="Filled email" />
                            </div>

                            <!-- Password Input -->
                            <div class="space-y-4">
                                <h4 class="text-sm font-medium text-white">Password Input</h4>
                                <Input type="password" variant="default" placeholder="Default password" />
                                <Input type="password" variant="filled" placeholder="Filled password" />
                            </div>

                            <!-- Number Input -->
                            <div class="space-y-4">
                                <h4 class="text-sm font-medium text-white">Number Input</h4>
                                <Input type="number" variant="default" placeholder="Default number" />
                                <Input type="number" variant="filled" placeholder="Filled number" />
                            </div>
                        </div>
                        <div class="bg-muted/40 p-4 rounded-md">
                            <code class="text-sm text-gray-300">
                                &lt;Input type="text" variant="default" placeholder="Default text" /&gt;<br>
                                &lt;Input type="email" variant="filled" placeholder="Filled email" /&gt;<br>
                                &lt;Input type="password" variant="outline" placeholder="Outline password" /&gt;<br>
                                &lt;Input type="number" variant="ghost" placeholder="Ghost number" /&gt;
                            </code>
                        </div>
                    </div>
                </div>

                <!-- Sizes Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Boyutlar</h3>
                    <div class="p-6 border border-border rounded-lg space-y-6">
                        <div class="flex flex-wrap items-center gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </div>
                        <div class="bg-muted/40 p-4 rounded-md">
                            <code class="text-sm text-gray-300">
                                &lt;Button size="sm"&gt;Small&lt;/Button&gt;
                                <br />
                                &lt;Button size="md"&gt;Medium&lt;/Button&gt;
                                <br />
                                &lt;Button size="lg"&gt;Large&lt;/Button&gt;
                            </code>
                        </div>
                    </div>
                </div>

                <!-- States Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Durumlar</h3>
                    <div class="p-6 border border-border rounded-lg space-y-6">
                        <div class="flex flex-wrap gap-4">
                            <Button loading>Yükleniyor</Button>
                            <Button disabled>Devre Dışı</Button>
                        </div>
                        <div class="bg-muted/40 p-4 rounded-md">
                            <code class="text-sm text-gray-300">
                                &lt;Button loading&gt;Yükleniyor&lt;/Button&gt;
                                <br />
                                &lt;Button disabled&gt;Devre Dışı&lt;/Button&gt;
                            </code>
                        </div>
                    </div>
                </div>

                <!-- Icons Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">İkonlar</h3>
                    <div class="p-6 border border-border rounded-lg space-y-6">
                        <div class="flex flex-wrap gap-4">
                            <Button>
                                <template #leftIcon>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </template>
                                Sol İkon
                            </Button>
                            <Button>
                                Sağ İkon
                                <template #rightIcon>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </template>
                            </Button>
                        </div>
                        <div class="bg-muted/40 p-4 rounded-md">
                            <code class="text-sm text-gray-300">
                                &lt;Button&gt;
                                <br />
                                &lt;template #leftIcon&gt;
                                <br />
                                &lt;svg&gt;...&lt;/svg&gt;
                                <br />
                                &lt;/template&gt;
                                <br />
                                Sol İkon
                                <br />
                                &lt;/Button&gt;
                            </code>
                        </div>
                    </div>
                </div>

                <!-- Events Section -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Events</h3>
                    <div class="p-6 border border-border rounded-lg">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="border-b border-border">
                                    <th class="py-3 text-gray-400">Event</th>
                                    <th class="py-3 text-gray-400">Açıklama</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-300">
                                <tr class="border-b border-border">
                                    <td class="py-3 font-medium">@click</td>
                                    <td>Button tıklandığında tetiklenir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

        <!-- Input Documentation -->
        <section id="input" class="space-y-8 mt-16">
            <div class="border-b border-border pb-4">
                <h2 class="text-2xl font-bold text-white">Input</h2>
                <p class="text-gray-400 mt-2">Form girişleri için çok yönlü input bileşeni.</p>
            </div>

            <!-- Import Section -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Import</h3>
                <div class="border border-border p-4 rounded-md">
                    <code class="text-sm text-gray-300">import Input from '@/components/ui/Input.vue'</code>
                </div>
            </div>

            <!-- Props Section -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Props</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-border">
                        <thead>
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white">
                                    Prop
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                    Type
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                    Default
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                                    modelValue
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    String | Number
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    undefined
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    Input değeri
                                </td>
                            </tr>
                            <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                                    type
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    String
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    'text'
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    Input tipi (text, email, password, number)
                                </td>
                            </tr>
                            <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white">
                                    variant
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    String
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    'default'
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    Input varyantı (default, filled, outline, ghost)
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 font-medium">label</td>
                                <td>string</td>
                                <td>''</td>
                                <td>Input etiketi</td>
                            </tr>
                            <tr>
                                <td class="py-3 font-medium">size</td>
                                <td>string</td>
                                <td>'md'</td>
                                <td>Input boyutu (sm, md, lg)</td>
                            </tr>
                            <tr>
                                <td class="py-3 font-medium">error</td>
                                <td>string</td>
                                <td>''</td>
                                <td>Hata mesajı</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Basic Usage -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Temel Kullanım</h3>
                <div class="p-6 border border-border rounded-lg space-y-6">
                    <div class="max-w-sm space-y-4">
                        <Input v-model="textValue" label="İsim" placeholder="İsminizi girin" />
                        <Input v-model="emailValue" type="email" label="E-posta" placeholder="E-posta adresinizi girin" />
                        <Input v-model="passwordValue" type="password" label="Şifre" placeholder="Şifrenizi girin" />
                        <Input v-model="numberValue" type="number" label="Yaş" placeholder="Yaşınızı girin" />
                    </div>
                    <div class="bg-muted/40 p-4 rounded-md">
                        <code class="text-sm text-gray-300">
                            &lt;Input v-model="name" label="İsim" placeholder="İsminizi girin" /&gt;
                            <br />
                            &lt;Input v-model="email" type="email" label="E-posta" placeholder="E-posta adresinizi girin" /&gt;
                            <br />
                            &lt;Input v-model="password" type="password" label="Şifre" placeholder="Şifrenizi girin" /&gt;
                            <br />
                            &lt;Input v-model="age" type="number" label="Yaş" placeholder="Yaşınızı girin" /&gt;
                        </code>
                    </div>
                </div>
            </div>

            <!-- States -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Durumlar</h3>
                <div class="p-6 border border-border rounded-lg space-y-6">
                    <div class="max-w-sm space-y-4">
                        <Input label="Normal" placeholder="Normal input" />
                        <Input label="Disabled" placeholder="Disabled input" disabled />
                        <Input label="With Error" placeholder="Error input" error="Bu alan zorunludur" />
                        <Input label="With Helper" placeholder="Helper text" helperText="Bu alana kullanıcı adınızı girin" />
                    </div>
                    <div class="bg-muted/40 p-4 rounded-md">
                        <code class="text-sm text-gray-300">
                            &lt;Input label="Normal" placeholder="Normal input" /&gt;
                            <br />
                            &lt;Input label="Disabled" placeholder="Disabled input" disabled /&gt;
                            <br />
                            &lt;Input label="With Error" placeholder="Error input" error="Bu alan zorunludur" /&gt;
                            <br />
                            &lt;Input label="With Helper" placeholder="Helper text" helperText="Bu alana kullanıcı adınızı girin" /&gt;
                        </code>
                    </div>
                </div>
            </div>

            <!-- Sizes -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Boyutlar</h3>
                <div class="p-6 border border-border rounded-lg space-y-6">
                    <div class="max-w-sm space-y-4">
                        <Input size="sm" placeholder="Small input" />
                        <Input size="md" placeholder="Medium input" />
                        <Input size="lg" placeholder="Large input" />
                    </div>
                    <div class="bg-muted/40 p-4 rounded-md">
                        <code class="text-sm text-gray-300">
                            &lt;Input size="sm" placeholder="Small input" /&gt;
                            <br />
                            &lt;Input size="md" placeholder="Medium input" /&gt;
                            <br />
                            &lt;Input size="lg" placeholder="Large input" /&gt;
                        </code>
                    </div>
                </div>
            </div>

            <!-- With Icons -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">İkonlu Kullanım</h3>
                <div class="p-6 border border-border rounded-lg space-y-6">
                    <div class="max-w-sm space-y-4">
                        <Input placeholder="Search">
                            <template #leftIcon>
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </template>
                        </Input>
                        <Input type="email" placeholder="Enter email">
                            <template #rightIcon>
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </template>
                        </Input>
                    </div>
                    <div class="bg-muted/40 p-4 rounded-md">
                        <code class="text-sm text-gray-300">
                            &lt;Input placeholder="Search"&gt;
                            <br />
                            &nbsp;&nbsp;&lt;template #leftIcon&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
                            <br />
                            &nbsp;&nbsp;&lt;/template&gt;
                            <br />
                            &lt;/Input&gt;
                        </code>
                    </div>
                </div>
            </div>

            <!-- Events -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Events</h3>
                <div class="p-6 border border-border rounded-lg">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="border-b border-border">
                                <th class="py-3 text-gray-400">Event</th>
                                <th class="py-3 text-gray-400">Açıklama</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-300">
                            <tr class="border-b border-border">
                                <td class="py-3 font-medium">@update:modelValue</td>
                                <td>Input değeri değiştiğinde tetiklenir</td>
                            </tr>
                            <tr class="border-b border-border">
                                <td class="py-3 font-medium">@blur</td>
                                <td>Input odağı kaybettiğinde tetiklenir</td>
                            </tr>
                            <tr class="border-b border-border">
                                <td class="py-3 font-medium">@focus</td>
                                <td>Input odak kazandığında tetiklenir</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import { ref } from "vue";

// Input demo values
const textValue = ref("");
const emailValue = ref("");
const passwordValue = ref("");
const numberValue = ref("");
</script>
