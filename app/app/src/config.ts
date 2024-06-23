import type { AstroUserConfig } from 'astro/config'

import type Site from '~/types/Site.d.ts'

export const site: Site = {
	title: 'Matiboux Blog',
	description: {
		'en': 'Matiboux\'s blog about computer science and stuff.',
		'fr': 'Blog de Matiboux sur l\'informatique et autres sujets.',
	},
	author: 'Matiboux',
	themeColor: '#ffffff',
}

export const i18n =
{
	defaultLocale: 'en',
	locales: [
		{
			codes: ['en', 'en-US'],
			path: 'en',
		},
		{
			codes: ['fr', 'fr-FR'],
			path: 'fr',
		},
	],
	routing: {
		prefixDefaultLocale: false,
	},
} as const satisfies AstroUserConfig['i18n']
