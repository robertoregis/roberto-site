<script setup lang="ts">
type ItemHard = {
  title: string
  frequency_formatted: string
  chipps: string[]
  icon?: string
}

const props = defineProps<{
  item: ItemHard
}>()
</script>

<template>
  <div
    class="
      col-span-1 flex items-center gap-4 p-4 rounded-lg
      bg-white/5 backdrop-blur
      hover:bg-white/10 transition-colors
      shadow-xl
    "
  >
    <!-- ÍCONE -->
    <div
      class="
        h-10 w-10 flex items-center justify-center
        rounded-md bg-white/10 shrink-0
      "
    >
      <img
        v-if="props.item.icon"
        :src="props.item.icon"
        :alt="props.item.title"
        class="h-6 w-6"
      />
    </div>

    <!-- CONTEÚDO -->
    <div class="flex flex-col">
      <span class="text-sm font-semibold text-white">
        {{ props.item.title }}
      </span>

      <span class="text-xs text-white/70">
        {{ props.item.frequency_formatted }}
      </span>

      <div class="mt-1 flex gap-2 flex-wrap">
        <span
            v-for="(chipp, index) in props.item.chipps"
            :key="index"
            class="
                px-2 py-0.5 text-[11px] rounded-full
                bg-teal-400/15 text-teal-200
            "
            >
            {{ chipp }}
        </span>

      </div>
    </div>
  </div>
</template>

