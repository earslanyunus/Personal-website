<script setup>
const colorMode = useColorMode()

const socialAccounts = [
    {
        name: 'Email', 
        icon: {
            name: 'material-symbols:mail-rounded',
            normalColor: 'text-gray-400',
            hoverColor:{
                light: 'text-gray-700',
                dark: 'text-gray-200'
            }

        },
        url:'mailto:earslanyunus@gmail.com'
    },
    {
        name: 'Github', 
        icon: {
            name: 'mdi:github',
            normalColor: 'text-gray-400',
            hoverColor:{
                light: 'text-gray-700',
                dark: 'text-gray-200'
            }

        },
        url:'https://github.com/earslanyunus'
    },
    

  
    
    
    {
        name:'Behance',
        icon: {
            name: 'mdi:behance',
            normalColor: 'text-gray-400',
            hoverColor:{
                light: 'text-[#0257FF]',
                dark: 'text-[#0257FF]'
            }

        },
        url:'https://www.behance.net/yyunusearslan'
    },
 
    {
        name: 'Dribble', 
        icon: {
            name: 'icon-park-outline:dribble',
            normalColor: 'text-gray-400',
            hoverColor:{
                light: 'text-[#ea4c89]',
                dark: 'text-[#ea4c89]'
            }

        },
        url:'https://dribbble.com/earslanyunus'
    }

]
</script>
<template>
    <Navbar />
    <main class="container mx-auto">
        <div class="flex mx-auto max-w-4xl flex-col mt-12">
            <h1 class="text-4xl text-left bg-gradient-to-r from-teal-300 to-teal-500 dark:from-teal-200 dark:to-teal-400 w-fit text-transparent bg-clip-text   font-semibold">
                {{ $t("about.title") }}
            </h1>
            <p class="text-2xl font-bold text-left text-gray-700 dark:text-gray-300 mt-4">
                {{ $t("about.name") }}
            </p>
            <p class="text-2xl text-left text-gray-700 dark:text-gray-300">{{ $t("about.job") }}</p>

            <p class="text-left text-gray-700 dark:text-gray-300 text-xl mt-6 whitespace-break-spaces" v-html="$t('about.desc')"></p>
            <!-- social card -->
            <div class="grid sm:grid-cols-2  md:grid-cols-4 gap-x-4 gap-y-4 mt-8 ">
                <a :href="account.url" :target='account.name != "Email" ? "_blank": "" ' v-for="account in socialAccounts"
                    class="w-full group h-28 border border-gray-200 dark:border-gray-700 dark:hover:border-gray-200 cursor-pointer transition-colors duration-500 hover:border-gray-500 rounded-xl overflow-hidden flex">
                    <div class="w-1/3 flex items-center justify-center">
                        <div class="relative w-1/2 h-1/2">
                            <Icon :name="account.icon.name" :class="['w-full h-full', account.icon.normalColor]" />
                            <Icon :name="account.icon.name"
                                :class="['absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 h-full w-full',`${account.icon.hoverColor.light} dark:${account.icon.hoverColor.dark}`]"  />
                        </div>
                    </div>
                    <div class="w-2/3 h-full flex items-center p-4">
                        <h4
                            class="text-xl font-semibold text-gray-400 dark:group-hover:text-gray-200 transition-colors duration-500 group-hover:text-gray-700">
                            {{ account.name }}
                        </h4>
                    </div>
                </a>



            </div>
            <!-- school -->
            <EducationComp/>
        </div>
        
    </main></template>
