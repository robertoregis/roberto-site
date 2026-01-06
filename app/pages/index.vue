<script setup lang="ts">
useHead({
  title: 'Roberto Regis',
  meta: [
    {
      name: 'description',
      content: 'Portfólio de Roberto Regis — desenvolvedor full stack'
    }
  ]
})
</script>

<template>
  <!-- 
    Mobile:
    - items-start + pt-28 → conteúdo desce e não briga com o header

    Desktop:
    - items-center + pt-0 → mantém centralização elegante
  -->
  <div class="flex-1 flex items-start md:items-center pt-28 md:pt-0">
    <div class="container mx-auto p-4 max-w-[900px]">

      <div class="grid grid-cols-1 md:grid-cols-6 items-center gap-8">

        <!-- TEXTO -->
        <div class="md:col-span-4">
          <h1 class="text-4xl md:text-5xl font-semibold text-white">
            Roberto Regis
          </h1>

          <p class="mt-4 text-lg text-white/80 max-w-xl">
            Desenvolvedor full stack focado em transformar ideias em sistemas
            funcionais, claros e bem estruturados.
          </p>

          <!-- LINKS -->
          <div class="mt-6 flex gap-4 flex-wrap">
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

        <!-- IMAGEM -->
        <div class="md:col-span-2 flex justify-center md:justify-end">
          <div
            class="
              w-[220px] h-[300px]
              md:w-[260px] md:h-[340px]
              rounded-xl overflow-hidden
              border border-white/20
            "
          >
            <img
              src="/eu.png"
              alt="Roberto Regis"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

