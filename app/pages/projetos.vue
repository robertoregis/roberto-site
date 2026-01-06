<script setup lang="ts">
  useHead({
    title: 'Projetos — Roberto Regis',
    meta: [
      {
        name: 'description',
        content:
          'Confira uma seleção de projetos desenvolvidos em contextos profissionais, de estudo e pessoais. Alguns estão finalizados, enquanto outros seguem em evolução.'
      }
    ]
  })



  type ProjectItem = {
    id: number
    title: string
    description: string
    image?: string
    status: string
    links?: {
      label: string
      url: string
    }[]
  }

  const projects = ref<ProjectItem[]>([
    {
      id: 1,
      title: 'Gerenciador multi-API',
      description:
        'Projeto pessoal focado em padronizar o consumo de múltiplas APIs escritas em diferentes linguagens e frameworks. O sistema integra serviços desenvolvidos em Express, NestJS, Flask, Django, Laravel, Spring Boot e Fiber, explorando organização, testes e consistência entre stacks distintas.',
      image: '/projeto-apis.png',
      status: 'Projeto pessoal — em desenvolvimento (código disponível)',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/robertoregis/groups-apis-seven'
        }
      ]
    },
    {
      id: 2,
      title: 'Gerenciador de compras colaborativo',
      description:
        'Aplicação web para gerenciamento de compras em tempo real, permitindo colaboração simultânea entre usuários. Desenvolvido com Nuxt e Supabase, explorando sincronização de dados, permissões e experiência colaborativa. Planejada uma versão mobile.',
      image: '/projeto-compras.png',
      status: 'Projeto pessoal — em desenvolvimento',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/seu-usuario/seu-repositorio'
        }
      ]
    },
    {
      id: 3,
      title: 'Jogo de cartas multiplayer',
      description:
        'Jogo de cartas de sobrevivência com suporte a multiplayer em tempo real. O projeto utiliza WebSocket para sincronização de estado, controle de turnos e lógica estratégica entre jogadores.',
      image: '/projeto-jogo.png',
      status: 'Projeto pessoal — em fase final',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/seu-usuario/seu-repositorio'
        }
      ]
    },
    {
      id: 4,
      title: 'Sistema de gestão de pessoas (RH)',
      description:
        'Sistema de RH desenvolvido para cliente, envolvendo gestão de dados, fluxos administrativos e processos internos. Atuo como responsável pelo desenvolvimento e manutenção da aplicação, trabalhando de forma full stack com Nuxt no frontend e backend.',
      image: '/projeto-rh.png',
      status: 'Projeto profissional — confidencial'
    },
    {
      id: 5,
      title: 'Plataforma de leads integrada (web e mobile)',
      description:
        'Projeto profissional voltado ao segmento de leads, integrando painel web e aplicação mobile. Atuei no desenvolvimento das interfaces, comunicação entre sistemas e definição da estrutura técnica da solução.',
      image: '/projeto-leads.png',
      status: 'Projeto profissional — confidencial'
    },
    {
      id: 6,
      title: 'Sistema de gestão esportiva',
      description:
        'Atuação em ambiente corporativo no desenvolvimento de interfaces para um sistema de gestão esportiva. Fui responsável pelo frontend, focando em usabilidade, organização visual e manutenção contínua das aplicações.',
      image: '/projeto-esporte.png',
      status: 'Experiência profissional'
    }
  ])


</script>

<template>
  <div class="flex-1 flex pt-10">
    <div class="container mx-auto p-4 max-w-[1000px]">

      <div class="grid grid-cols-1 py-10">

        <!-- TÍTULO -->
        <div class="col-span-1">
          <h2 class="text-3xl text-white font-semibold">
            Projetos
          </h2>
          <p class="text-sm text-white/60 mt-1 max-w-xl">
            Alguns dos projetos que desenvolvi, explorando ideias,
            soluções técnicas e diferentes abordagens de implementação.
            Cada card permite visualizar detalhes e contexto do projeto.
          </p>
        </div>

        <!-- DIVISOR -->
        <div class="col-span-1 mt-6 border-t border-white/10"></div>

        <!-- GRID DE PROJETOS -->
        <div class="col-span-1 mt-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              v-for="project in projects"
              :key="project.id"
              :item="project"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

