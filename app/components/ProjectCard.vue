<script setup lang="ts">
type ItemProject = {
  title: string
  description: string
  image?: string
  status: string
  links?: {
    label: string
    url: string
  }[]
}

const props = defineProps<{
  item: ItemProject
}>()
</script>

<template>
  <div
    class="
      flex flex-col rounded-xl overflow-hidden
      bg-white/5 backdrop-blur
      border border-white/10
      shadow-xl
    "
  >
    <!-- IMAGEM (opcional) -->
    <div
      v-if="item.image"
      class="relative h-[200px] lg:h-[240px] w-full overflow-hidden"
    >
      <!-- IMAGEM -->
      <img
        :src="item.image"
        :alt="item.title"
        class="w-full h-full object-cover"
      />

      <!-- OVERLAY -->
      <div class="absolute inset-0 bg-black/20"></div>
    </div>


    <!-- CONTEÚDO -->
    <div class="p-4 flex flex-col gap-3">
      <h3 class="text-lg font-semibold text-white">
        {{ item.title }}
      </h3>

      <p class="text-sm text-white/70 leading-relaxed">
        {{ item.description }}
      </p>

      <!-- STATUS -->
      <div class="flex items-center gap-2 mt-2">
        <span
          class="
            text-xs px-2 py-1 rounded-full
            bg-teal-400/15 text-teal-200
          "
        >
          {{ item.status }}
        </span>
      </div>

      <!-- LINKS -->
      <div
        v-if="item.links && item.links.length"
        class="flex gap-3 mt-3 flex-wrap"
      >
        <a
          v-for="(link, index) in item.links"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="
            text-sm text-white/80 underline-offset-4
            hover:underline hover:text-white
          "
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>
