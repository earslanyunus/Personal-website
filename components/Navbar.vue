<script setup>

const i18n = useI18n()
const switchLocalePath = useSwitchLocalePath()

const navigaton = [
    {
        name: i18n.t('navbar.about'),
        path: '/',
        file: 'index'
    },
   

]
const router = useRouter();
const { width, height } = useWindowSize()


</script>
<template>
    <header class="w-screen py-6 container mx-auto">
        <nav class="flex items-center justify-between max-w-4xl mx-auto w-full ">
            <ul class="flex justify-center items-center gap-x-6">
                <li v-for="nav in navigaton" :key="nav.name" class="relative">
                    <NuxtLink :to="nav.path"
                        :class="[$router.currentRoute.value.name.includes(nav.file) ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500', 'font-bold tracking-wide cursor-pointer']">
                        {{ nav.name }}</NuxtLink>

                </li>
            </ul>
            <div>
                <!-- <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select> -->

            </div>
            <div class="flex items-center gap-3">
                               <DropdownMenuRoot>
                    <DropdownMenuTrigger
                        class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center border border-gray-300 dark:border-gray-600"
                        aria-label="Customise options">
                        <Icon name="ion:language" class="text-gray-500 dark:text-gray-300" />
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent
                       
                        
                            class="bg-white dark:bg-gray-900 border mt-2 border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm divide-y divide-border-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                            <DropdownMenuItem  v-for="locale in $i18n.locales" :key="locale.code">
                                <NuxtLink
                                    class="w-full h-full block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                                    :to="switchLocalePath(locale.code)">
                                    {{ locale.name }}
                                </NuxtLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenuRoot>
                <!-- for color mode -->
                <DropdownMenuRoot >
                    <DropdownMenuTrigger
                        class="rounded-full w-[35px] h-[35px]  inline-flex items-center justify-center border  border-gray-300 dark:border-gray-600"
                        aria-label="Customise options">
                        <ClientOnly>
                            <Icon v-if="$colorMode?.value === 'dark'" name="ri:contrast-2-fill" class="text-gray-300" />
                        <Icon v-if="$colorMode?.value === 'light'" name="ri:sun-fill" class="text-gray-500" />

                        </ClientOnly>

                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent
                         :align=" width < 700 ?'end':'center'"
                            class="bg-white dark:bg-gray-900 border mt-2 dark:border-gray-700 border-gray-300 rounded-xl overflow-hidden shadow-sm  divide-y divide-border-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-300  ">
                            <DropdownMenuItem class="" @click="$colorMode.preference = 'system'">
                                <button
                                    class=" w-full h-full block py-2 px-4  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                                    @click="">
                                    {{ $t('navbar.colorModes.system') }}
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem class=""  @click="$colorMode.preference = 'light'">
                                <button
                                    class=" w-full h-full block py-2 px-4  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                                   >
                                    {{ $t('navbar.colorModes.light') }}

                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem class=""  @click="$colorMode.preference = 'dark'">
                                <button
                                    class=" w-full h-full block py-2 px-4  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                                   >
                                    {{ $t('navbar.colorModes.dark') }}

                                </button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenuRoot>
            </div>



        </nav>
    </header>
</template>