<template>
   <div class="flex items-end gap-2 mt-8">
      <h3 class="text-3xl text-gray-700 dark:text-gray-200 font-bold">{{$t('education.title')}}</h3>
      <Icon name="lucide:graduation-cap" class="text-[4rem] text-gray-200 dark:text-gray-700 " />

    </div>
    <div class="grid grid-cols-1">
      <div
      v-for="(education, index) in educationInfo"
      :key="index"
      class="w-full  mt-6  relative overflow-hidden"
    >
   
  
      <p class=" text-2xl text-gray-700 dark:text-gray-300">{{ education.school }}</p>
      <p class="text-xl text-gray-700 dark:text-gray-300">
        {{ education.degree }} -<span class="text-sm">{{ education.scholarship }}</span>
      </p>
  
      <div class="w-full">
        <div>
          <div class="w-full h-3 mt-3 bg-gray-300  rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-teal-400 to-teal-500 dark:from-teal-200 dark:to-teal-500 transition-all duration-300"
              :style="{ width: education.loadingPercentage + '%' }"
            ></div>
          </div>
  
          <div class="flex justify-between items-center">
            <span class="bold text-gray-500 dark:text-gray-400">{{$t('education.startDate')}} <span class="font-bold text-gray-700 dark:text-gray-300">{{ new Date(education.startDate).getFullYear() }}</span></span>
            <span class="bold text-gray-500 dark:text-gray-400">{{$t('education.endDate')}} <span class="font-bold text-gray-700 dark:text-gray-300">{{ new Date(education.endDate).getFullYear() }}</span></span>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const i18n = useI18n()
  
  const educationInfo = ref([
    {
      startDate: '2020-09-01',
      endDate: '2025-06-01',
      school: i18n.t('education.medipol'),
      degree: i18n.t('education.degree'),
      scholarship: i18n.t('education.scholarship'),
      loadingPercentage: 0,
    },
   
  ]);
  
  const calculateLoadingPercentage = (education) => {
    const start = new Date(education.startDate);
    const end = new Date(education.endDate);
    const today = new Date();
  
    if (today < start) {
      education.loadingPercentage = 0;
    } else if (today > end) {
      education.loadingPercentage = 100;
    } else {
      const totalDuration = end - start;
      const completedDuration = today - start;
      education.loadingPercentage = (completedDuration / totalDuration) * 100;
    }
  };
  
  onMounted(() => {
    educationInfo.value.forEach((education) => {
      calculateLoadingPercentage(education);
    });
  });
  </script>
  