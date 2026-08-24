const ANALYTICS_URL = 'https://portfolio-analytics.flavien-debar.workers.dev/track';

const VISITOR_ID_KEY = 'portfolio_visitor_id';

type AnalyticsEvent =
	| 'page_view'
	| 'github_click'
	| 'linkedin_click'
	| 'project_view'
	| 'demo_click'
	| 'resume_download'
	| 'contact_click';

function getVisitorId(): string {
	let visitorId = localStorage.getItem(VISITOR_ID_KEY);

	if (!visitorId) {
		visitorId = crypto.randomUUID();
		localStorage.setItem(VISITOR_ID_KEY, visitorId);
	}

	return visitorId;
}

export function track(event_type: AnalyticsEvent): void {
	if (typeof window === 'undefined') {
		return;
	}

	const payload = {
		visitor_id: getVisitorId(),
		event_type,
		path: window.location.pathname,
		referrer: document.referrer || undefined,
	};

	fetch(ANALYTICS_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
		keepalive: true,
	}).catch(() => {
		// Analytics must never impact the user experience.
	});
}
