<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <header
    class="
      fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[calc(100%-2rem)] max-w-[1000px]
      bg-black/40 backdrop-blur
      border border-white/10
      rounded-xl shadow-lg
    "
  >
    <nav class="px-6 py-3 flex items-center justify-between">

      <!-- LOGO / NOME -->
      <span class="text-sm text-white font-medium">
        Roberto Regis
      </span>

      <!-- LINKS DESKTOP -->
      <ul class="hidden md:flex items-center gap-6">
        <li>
          <NuxtLink
            to="/"
            class="text-sm text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Início
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sobre"
            class="text-sm text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Sobre
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/projetos"
            class="text-sm text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Projetos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/skills"
            class="text-sm text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contato"
            class="text-sm text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Contato
          </NuxtLink>
        </li>
      </ul>

      <!-- BOTÃO MOBILE -->
      <button
        class="md:hidden text-white text-xl"
        @click="isOpen = !isOpen"
        aria-label="Abrir menu"
      >
        ☰
      </button>
    </nav>

    <!-- MENU MOBILE -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-white/10 bg-black/70 backdrop-blur rounded-b-xl"
    >
      <ul class="flex flex-col text-center py-2">
        <li>
          <NuxtLink
            to="/"
            @click="isOpen = false"
            class="block py-2 text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Início
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sobre"
            @click="isOpen = false"
            class="block py-2 text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Sobre
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/projetos"
            @click="isOpen = false"
            class="block py-2 text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Projetos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/skills"
            @click="isOpen = false"
            class="block py-2 text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contato"
            @click="isOpen = false"
            class="block py-2 text-white/80 hover:text-white transition-colors"
            active-class="text-white font-medium"
          >
            Contato
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>



