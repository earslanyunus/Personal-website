<script setup>
import { ConfigProvider } from 'radix-vue'
const useIdFunction = () => useId()
useHead({
  title:"Yunus Emre Arslan",
  link:[
    {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon/favicon-32x32.png"},
    {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon/favicon-16x16.png"},
    {rel:"manifest", href:"/favicon/site.webmanifest"},
    {rel:"apple-touch-icon", sizes:"180x180", href:"/favicon/apple-touch-icon.png"},
   
{

}

  ]
})
useSeoMeta({
  ogTitle: 'Yunus Emre Arslan || Designer & Developer',
  ogDescription: 'Designing, Coding and Making it Real',
  description: 'Designing, Coding and Making it Real',  
})
</script>
<template>
    <ConfigProvider :use-id="useIdFunction">

  <div class="bg-gray-50 dark:bg-gray-950 pb-24 min-w-screen min-h-screen antialiased">
    <NuxtPage />
  </div>
  </ConfigProvider>
</template>
