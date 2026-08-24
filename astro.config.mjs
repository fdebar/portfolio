import { defineConfig } from 'astro/config';

export default defineConfig({
	base: '/portfolio',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'fr'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
