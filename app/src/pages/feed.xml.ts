import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import { defaultLocale, i18nFactory } from '~/i18n'
import { site } from '~/site'

export async function GET(context: APIContext)
{
	const posts = (await getCollection('posts'))
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

	const _ = i18nFactory(defaultLocale)

	return rss({
		title: site.title ? _(site.title) : 'Matiboux Blog',
		description: site.description ? _(site.description) : '',
		site: context.site ?? context.url.origin,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.excerpt,
			pubDate: post.data.date,
			link: `/posts/${post.id}/`,
		})),
	})
}
