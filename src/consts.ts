export const SITE = {
  title: 'AM1 Lacabanne 2024',
  description: 'Your website description.',
  defaultLanguage: 'es-ar'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  //Deutsch: 'de',
  Castellano: 'es'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  // de: {
  //   Überschrift: [
  //     { text: 'Einführung', link: 'de/introduction' },
  //     { text: 'Seite 2', link: 'de/page-2' },
  //     { text: 'Seite 3', link: 'de/page-3' }
  //   ],
  //   'Ein weiterer Abschnitt': [{ text: 'Seite 4', link: 'de/page-4' }]
  // },
  es: {
    'Introducción': [
      { text: 'Introduction', link: 'es/introduction' },
      { text: 'Page 2', link: 'es/page-2' },
      { text: 'Page 3', link: 'es/page-3' }
    ],
    'Taller de p5.js': [
      { text: '1. ¿Qué es p5.js?', link: 'es/que-es-p5js' },
      { text: '1.1. Obtención/Instalación', link: 'es/obtencion-instalacion' },
      { text: '1.2. Elementos del código', link: 'es/elementos-codigo' },
      { text: '1.3 Dibujar', link: 'es/dibujar' },
      { text: '1.4 Color', link: 'es/color' },
    ]
  }
}
