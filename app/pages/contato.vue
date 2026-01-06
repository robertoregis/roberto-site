<script setup lang="ts">
    useHead({
        title: 'Contato — Roberto Regis',
        meta: [
            {
                name: 'description',
                content: 'Entre em contato com Roberto Regis'
            }
        ]
    })
</script>

<template>
  <div class="flex-1 flex items-center justify-center">
    <div class="container mx-auto p-4 max-w-[800px]">

      <div class="flex flex-col items-center text-center">

        <!-- TÍTULO -->
        <h1 class="text-4xl font-semibold text-white">
          Contato
        </h1>

        <!-- TEXTO -->
        <p class="mt-4 text-lg text-white/80 max-w-xl">
          Se quiser conversar sobre projetos, ideias ou oportunidades,
          fique à vontade para entrar em contato.
        </p>

        <!-- EMAIL -->
        <div class="mt-6">
          <a
            href="mailto:roberttoregiss@gmail.com"
            class="text-white text-lg font-medium underline underline-offset-4
                   hover:text-white/80 transition-colors"
          >
            roberttoregiss@gmail.com
          </a>
        </div>

        <!-- REDES -->
        <div class="mt-8 flex gap-4">
          <a
            href="https://linkedin.com/in/roberto-regis-003628b2"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 border border-white/30 rounded-md text-white
                   hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/robertoregis"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 border border-white/30 rounded-md text-white
                   hover:bg-white/10 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/_roberto.regis/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 border border-white/30 rounded-md text-white
                   hover:bg-white/10 transition-colors"
          >
            Instagram
          </a>
        </div>

      </div>

    </div>
  </div>
</template>
