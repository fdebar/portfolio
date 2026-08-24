import en from '../content/i18n/en';
import fr from '../content/i18n/fr';

export type Locale = 'en' | 'fr';

export const ui = {
	en,
	fr,
} satisfies Record<Locale, typeof en>;

export const defaultLang: Locale = 'en';

export function getLangFromUrl(url: URL): Locale {
	const [, , lang] = url.pathname.split('/');

	if (lang === 'fr') return 'fr';
	return defaultLang;
}

export function useTranslations(locale: Locale) {
	return ui[locale];
}

export function getWorkSlug(id: string): string {
	return id.replace(/\/(en|fr)$/, '');
}

export function getBasePath(path: string = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const normalizedPath = path.replace(/^\/+/, '');

	return normalizedPath ? `${base}/${normalizedPath}` : `${base}/`;
}

export function getLocalizedPath(path: string, locale: Locale): string {
	const localizedPath = locale === 'fr' ? `/fr${path}` : path;

	return getBasePath(localizedPath);
}

export function getAssetPath(path: string): string {
	return getBasePath(`/assets/${path}`);
}

export function getFaviconPath(path: string): string {
	return getBasePath(`/favicon/${path}`);
}

export function getWorkUrl(id: string, locale: Locale): string {
	const slug = getWorkSlug(id);

	return getLocalizedPath(`/work/${slug}/`, locale);
}
