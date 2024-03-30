export const SITE = {
  title: 'AM1 Lacabanne 2024',
  description: 'Este es el sitio de la asignatura Artes Multimediales 1 cátedra Lacabanne',
  defaultLanguage: 'es-ar'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'raul.lacabanne'
}

export const KNOWN_LANGUAGES = {
  English: 'en',
  Castellano: 'es'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/knnv-ar/am1/tree/main`

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
  en: {
    'Introducción': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' }
    ],
    'Taller de p5.js': [
      { text: 'Clase 1. ¿Qué es p5.js?', link: 'en/que-es-p5js' },
      { text: '1.1. Obtención/Instalación', link: 'en/obtencion-instalacion' },
      { text: '1.2. Elementos del código', link: 'en/elementos-codigo' },
      { text: '1.3 Dibujar', link: 'en/dibujar' },
      { text: '1.4 Color', link: 'en/color' },
    ]
  },
  es: {
    'General': [
      { text: 'Introducción', link: 'es/introduccion' },
    ],
    'Taller de p5.js': [
      { text: 'CLASE 1. ¿Qué es p5.js?', link: 'es/que-es-p5js' },
      { text: '1.1. Obtención-Instalación', link: 'es/obtencion-instalacion' },
      { text: '1.2. Elementos del código', link: 'es/elementos-codigo' },
      { text: '1.3 Dibujar', link: 'es/dibujar' },
      { text: '1.4 Color', link: 'es/color' },
    ],
    'ACSs': [
      { text: 'ACS Nº 1', link: 'es/acs-1' },
      { text: 'ACS Nº 2', link: 'es/acs-2' },
      { text: 'ACS Nº 3', link: 'es/acs-3' },
      { text: 'ACS Nº 4', link: 'es/acs-4' },
      { text: 'ACS Nº 5', link: 'es/acs-5' },
      { text: 'ACS Nº 6', link: 'es/acs-6' },
    ],
    'TPs': [
      { text: 'TP Nº 1', link: 'es/tp-1' },
      { text: 'TP Nº 2', link: 'es/tp-2' },
    ],
    
  }
}
