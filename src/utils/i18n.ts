import en from '../content/i18n/en';
import fr from '../content/i18n/fr';

export type Locale = 'en' | 'fr';

export const ui = {
	en,
	fr,
} satisfies Record<Locale, typeof en>;

export const defaultLang: Locale = 'en';

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split('/');

	if (lang === 'fr') return 'fr';
	return defaultLang;
}

export function useTranslations(locale: Locale) {
	return ui[locale];
}

export function getWorkSlug(id: string): string {
	return id.replace(/\/(en|fr)$/, '');
}

export function getLocalizedPath(path: string, locale: Locale): string {
	if (locale === 'fr') return `/fr${path}`;
	return path;
}

export function getWorkUrl(id: string, locale: Locale): string {
	const slug = getWorkSlug(id);

	return getLocalizedPath(`/work/${slug}/`, locale);
}
