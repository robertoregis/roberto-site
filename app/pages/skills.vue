<script setup lang="ts">
  useHead({
    title: 'Skills — Roberto Regis',
    meta: [
      {
        name: 'description',
        content:
          'Desde 2020 venho desenvolvendo habilidades técnicas e interpessoais por meio de estudo contínuo e prática. Aqui estão as principais competências que utilizo no dia a dia.'
      }
    ]
  })


  type HardItem = {
    id: number
    title: string
    frequency_formatted: string
    chipps: string[]
    icon: string
  }

  type SoftItem = {
    id: number
    title: string
    description: string
    chipps: string[]
    images: string[]
  }

  const hardItems = ref<HardItem[]>([
    // ======================
    // FRONTEND BASE
    // ======================
    {
      id: 1,
      title: 'JavaScript',
      frequency_formatted: 'Uso intenso desde 2021',
      chipps: [
        'Base do frontend profissional',
        'Lógica e manipulação de estado'
      ],
      icon: '/javascript.svg'
    },
    {
      id: 2,
      title: 'TypeScript',
      frequency_formatted: 'Uso frequente desde 2022',
      chipps: [
        'Projetos pessoais e profissionais',
        'Tipagem e organização de código'
      ],
      icon: '/typescript.svg'
    },
    {
      id: 3,
      title: 'HTML & CSS',
      frequency_formatted: 'Uso profissional desde 2021',
      chipps: [
        'Layouts responsivos',
        'CSS, SCSS e estrutura semântica'
      ],
      icon: '/html5.svg'
    },

    // ======================
    // FRAMEWORKS FRONTEND
    // ======================
    {
      id: 4,
      title: 'Vue.js',
      frequency_formatted: 'Uso profissional desde 2021',
      chipps: [
        'Principal framework no trabalho',
        'Componentização e estado'
      ],
      icon: '/vue.svg'
    },
    {
      id: 5,
      title: 'Nuxt',
      frequency_formatted: 'Uso frequente desde 2022',
      chipps: [
        'SSR, SPA e arquitetura',
        'Projetos pessoais e profissionais'
      ],
      icon: '/nuxt.svg'
    },
    {
      id: 6,
      title: 'React',
      frequency_formatted: 'Conhecimento desde 2020',
      chipps: [
        'Projetos pessoais',
        'Base para mobile (React Native)'
      ],
      icon: '/react.svg'
    },
    {
      id: 7,
      title: 'Next.js',
      frequency_formatted: 'Uso ocasional desde 2021',
      chipps: [
        'Projetos pessoais',
        'Conceitos similares ao Nuxt'
      ],
      icon: '/next.svg'
    },
    {
      id: 8,
      title: 'Quasar.js',
      frequency_formatted: 'Uso profissional desde 2023',
      chipps: [
        'Aplicações internas da empresa',
        'Mobile e desktop híbrido'
      ],
      icon: '/quasar.svg'
    },
    {
      id: 9,
      title: 'Tailwind CSS',
      frequency_formatted: 'Uso frequente desde 2023',
      chipps: [
        'Produtividade',
        'Design utilitário'
      ],
      icon: '/tailwindcss.svg'
    },
    {
      id: 10,
      title: 'Bootstrap',
      frequency_formatted: 'Uso entre 2021 e 2022',
      chipps: [
        'Base inicial de frontend',
        'Hoje uso pontualmente'
      ],
      icon: '/bootstrap.svg'
    },

    // ======================
    // MOBILE
    // ======================
    {
      id: 11,
      title: 'React Native',
      frequency_formatted: 'Uso desde 2021',
      chipps: [
        'Projetos pessoais e para clientes',
        'Base compartilhada com React'
      ],
      icon: '/react.svg'
    },
    {
      id: 12,
      title: 'Expo',
      frequency_formatted: 'Uso frequente desde 2021',
      chipps: [
        'Principal stack mobile',
        'Publicação e produtividade'
      ],
      icon: '/expo.svg'
    },
    {
      id: 13,
      title: 'Flutter',
      frequency_formatted: 'Contato inicial',
      chipps: [
        'Estudos interrompidos',
        'Planejo retomar'
      ],
      icon: '/flutter.svg'
    },
    {
      id: 14,
      title: 'Android (Java)',
      frequency_formatted: 'Conhecimento básico',
      chipps: [
        'Android Studio',
        'Noções de desenvolvimento nativo'
      ],
      icon: '/android.svg'
    },

    // ======================
    // BACKEND
    // ======================
    {
      id: 15,
      title: 'Node.js',
      frequency_formatted: 'Uso frequente desde 2021',
      chipps: [
        'APIs e sistemas backend',
        'Full stack em projetos pessoais'
      ],
      icon: '/node.svg'
    },
    {
      id: 16,
      title: 'NestJS',
      frequency_formatted: 'Principal framework backend desde 2022',
      chipps: [
        'Arquitetura backend',
        'TypeScript e organização'
      ],
      icon: '/nestjs.svg'
    },
    {
      id: 17,
      title: 'Express.js',
      frequency_formatted: 'Uso inicial em 2021',
      chipps: [
        'Base para Node.js',
        'Hoje uso menos'
      ],
      icon: '/express.svg'
    },
    {
      id: 18,
      title: 'Fastify',
      frequency_formatted: 'Conhecimento e uso de 2022 a 2023',
      chipps: [
        'Performance',
        'Estudos e testes'
      ],
      icon: '/fastify.svg'
    },

    // ======================
    // OUTRAS LINGUAGENS
    // ======================
    {
      id: 19,
      title: 'Python',
      frequency_formatted: 'Uso desde 2020',
      chipps: [
        'Flask e Django',
        'Projetos pessoais'
      ],
      icon: '/python.svg'
    },
    {
      id: 20,
      title: 'PHP',
      frequency_formatted: 'Uso pontual desde 2023',
      chipps: [
        'Laravel',
        'Projetos de estudo'
      ],
      icon: '/php.svg'
    },
    {
      id: 21,
      title: 'Java',
      frequency_formatted: 'Conhecimento básico',
      chipps: [
        'Spring Boot',
        'Base acadêmica'
      ],
      icon: '/spring.svg'
    },
    {
      id: 22,
      title: 'Go',
      frequency_formatted: 'Uso inicial desde 2025',
      chipps: [
        'Fiber',
        'Projetos pessoais'
      ],
      icon: '/go.svg'
    },

    // ======================
    // BANCO & CLOUD
    // ======================
    {
      id: 23,
      title: 'PostgreSQL',
      frequency_formatted: 'Uso frequente',
      chipps: [
        'SQL',
        'Supabase'
      ],
      icon: '/postgresql.svg'
    },
    {
      id: 24,
      title: 'Firebase',
      frequency_formatted: 'Uso avançado',
      chipps: [
        'Auth, Firestore, Hosting',
        'Projetos mobile e web'
      ],
      icon: '/firebase.svg'
    },
    {
      id: 25,
      title: 'MongoDB',
      frequency_formatted: 'Uso pontual',
      chipps: [
        'NoSQL',
        'Projetos específicos'
      ],
      icon: '/mongodb.svg'
    },
    {
      id: 26,
      title: 'Supabase',
      frequency_formatted: 'Uso frequente',
      chipps: [
        'Postgres',
        'Auth e realtime'
      ],
      icon: '/supabase.svg'
    },
    {
      id: 27,
      title: 'Deploy & Hosting',
      frequency_formatted: 'Uso contínuo',
      chipps: [
        'Vercel, Netlify, Render',
        'Firebase Hosting'
      ],
      icon: '/vercel.svg'
    }
  ])


  const softItems = ref<SoftItem[]>([
    {
      id: 1,
      title: 'Aprendizado autodidata',
      description:
        'Capacidade de aprender de forma independente, explorando novas tecnologias e resolvendo problemas na prática. A base acadêmica ajudou, mas a evolução veio principalmente da experiência real.',
      chipps: [
        'Autonomia',
        'Aprendizado contínuo'
      ],
      images: [
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/autodidata-2.png',
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/autodidata.png'
      ]
    },
    {
      id: 2,
      title: 'Resolução de problemas',
      description:
        'Gosto de analisar desafios e criar soluções práticas, equilibrando simplicidade e eficiência. Resolver problemas é uma das partes que mais me motivam no desenvolvimento.',
      chipps: [
        'Análise',
        'Solução'
      ],
      images: [
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/resolucao.png',
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/resolucao-2.png'
      ]
    },
    {
      id: 3,
      title: 'Comunicação',
      description:
        'Facilidade para conversar, entender contextos e explicar ideias técnicas de forma clara. Valorizo o diálogo para alinhar expectativas e melhorar resultados.',
      chipps: [
        'Clareza',
        'Empatia'
      ],
      images: [
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/comunicacao.png',
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/comunicacao-2.png'
      ]
    },
    /*{
      id: 4,
      title: 'Colaboração',
      description:
        'Gosto de trabalhar em conjunto, trocar conhecimento e ajudar outras pessoas quando possível, especialmente compartilhando o que já aprendi ao longo do caminho.',
      chipps: [
        'Trabalho em equipe',
        'Compartilhamento'
      ],
      images: [
        '/basic.jpg',
        '/basic.jpg'
      ]
    },*/
    {
      id: 5,
      title: 'Compromisso com prazos',
      description:
        'Levo prazos a sério. Quando assumo uma entrega, faço o possível para cumprir o combinado e, caso algo impeça, prefiro comunicar com transparência.',
      chipps: [
        'Responsabilidade',
        'Transparência'
      ],
      images: [
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/prazo.png',
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/prazo-2.png'
      ]
    },
    {
      id: 6,
      title: 'Tomada de decisão técnica',
      description:
        'Sei equilibrar inovação e estabilidade, escolhendo ferramentas adequadas para cada contexto. Evito complexidade desnecessária, mas também sei quando vale arriscar algo novo.',
      chipps: [
        'Critério',
        'Consistência'
      ],
      images: [
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/decisao.png',
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/decisao-2.png'
      ]
    },
    {
      id: 7,
      title: 'Abertura a liderança',
      description:
        'Não tenho dificuldade em ser liderado. Gosto de aprender com outras pessoas, receber direcionamentos e contribuir da melhor forma possível dentro do time.',
      chipps: [
        'Flexibilidade',
        'Aprendizado'
      ],
      images: [
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/liderenca.png',
        'https://exgmtkkoxyguuojschoe.supabase.co/storage/v1/object/public/portfolio/liderenca-2.png'
      ]
    }
  ])

</script>

<template>
  <div class="flex-1 flex pt-10">
    <div class="container mx-auto p-4 max-w-[1000px]">

      <div class="grid grid-cols-1 py-10">
        <div class="col-span-1">
          <!-- HARD SKILLS -->
          <div class="grid grid-cols-1">
            <div class="col-span-1">
              <h2 class="text-3xl text-white font-semibold">
                Hard Skills
              </h2>
              <p class="text-sm text-white/60 mt-1">
                Tecnologias e ferramentas que utilizo no dia a dia
              </p>
            </div>

            <div class="col-span-1 mt-4">
              <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3"
              >
                <HardCard
                  v-for="item in hardItems"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </div>
          </div>

          <!-- SOFT SKILLS -->
          <div class="grid grid-cols-1 mt-10">
            <div class="col-span-1">
              <h2 class="text-3xl text-white font-semibold">
                Soft Skills
              </h2>
              <p class="text-sm text-white/60 mt-1">
                Forma de pensar, comunicar e trabalhar em equipe
              </p>
            </div>

            <div class="col-span-1 mt-4">
              <div class="grid grid-cols-1 gap-6">
                <SoftCard
                  v-for="item in softItems"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

