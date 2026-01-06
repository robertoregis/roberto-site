<script setup lang="ts">
type ItemSoft = {
  title: string
  description: string
  chipps: string[]
  images: string[] // [img1, img2]
}

const props = defineProps<{
  item: ItemSoft
}>()
</script>

<template>
  <div
    class="
      col-span-1 flex flex-col md:flex-row items-center
      shadow-xl p-4 bg-white/5 backdrop-blur rounded
      hover:bg-white/10 transition-colors
      group
    "
  >

    <!-- TEXTO -->
    <div
      class="order-1 md:order-0 flex flex-col justify-center
            flex-1 mt-4 md:mt-0"
    >
      <h2 class="text-3xl font-medium mb-3 text-white">
        {{ props.item.title }}
      </h2>

      <p class="text-base text-white/70 max-w-md mb-4 leading-relaxed">
        {{ props.item.description }}
      </p>

      <div class="flex gap-2 flex-wrap">
        <span
          v-for="(chipp, index) in props.item.chipps"
          :key="index"
          class="
            px-3 py-1 text-xs rounded-full
            bg-teal-400/15 text-teal-200
          "
        >
          {{ chipp }}
        </span>
      </div>
    </div>

    <!-- IMAGEM -->
    <div
      class="
        order-0 md:order-1 relative
        h-[220px] w-full
        md:h-[240px] md:w-[280px]
        rounded-xl overflow-hidden shrink-0
      "
    >
      <!-- imagem base -->
      <img
        :src="props.item.images[0]"
        :alt="props.item.title"
        class="
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-500
          group-hover:opacity-0
        "
      />

      <!-- imagem hover -->
      <img
        v-if="props.item.images.length > 1"
        :src="props.item.images[1]"
        :alt="props.item.title"
        class="
          absolute inset-0 w-full h-full object-cover
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />
    </div>

  </div>
</template>
