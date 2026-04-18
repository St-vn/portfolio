// ── Scroll reveal ────────────────────────────────────────
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.1 }
);

document.querySelectorAll('.card').forEach((card) => observer.observe(card));

// ── Filter system ────────────────────────────────────────
// type/category/status are arrays; 'all' means no filter on that dimension.
// sort is single-select (mutually exclusive).
const state = { type: ['all'], category: ['all'], status: ['all'], sort: 'newest' };

// Returns all non-"all" pill values for a given filter key
function getPillValues(filterKey) {
	return Array.from(
		document.querySelectorAll(`.filter-pill[data-filter="${filterKey}"]:not([data-value="all"])`)
	).map((p) => p.dataset.value);
}

function applyFilters() {
	const slots = Array.from(document.querySelectorAll('.card-slot'));

	// Sort all slots in DOM by data-year
	const container = slots[0]?.parentElement;
	if (container) {
		slots.sort((a, b) => {
			const yearA = parseInt(a.querySelector('.card').dataset.year, 10);
			const yearB = parseInt(b.querySelector('.card').dataset.year, 10);
			return state.sort === 'newest' ? yearB - yearA : yearA - yearB;
		});
		slots.forEach((slot) => container.appendChild(slot));
	}

	slots.forEach((slot) => {
		const card = slot.querySelector('.card');
		const cardTypes = card.dataset.type ? card.dataset.type.split(' ') : [];
		const cardCategories = card.dataset.category ? card.dataset.category.split(' ') : [];
		const cardStatuses = card.dataset.status ? card.dataset.status.split(' ') : [];

		const matchType =
			state.type.includes('all') || cardTypes.some((t) => state.type.includes(t));
		const matchCategory =
			state.category.includes('all') || cardCategories.some((c) => state.category.includes(c));
		const matchStatus =
			state.status.includes('all') || cardStatuses.some((s) => state.status.includes(s));

		const visible = matchType && matchCategory && matchStatus;
		slot.classList.toggle('hidden', !visible);

		if (visible) card.classList.add('visible');
	});
}

function syncPillActiveStates(filterKey) {
	const group = document.querySelector(`.filter-group:has([data-filter="${filterKey}"])`);
	if (!group) return;
	group.querySelectorAll('.filter-pill').forEach((p) => {
		const isAll = p.dataset.value === 'all';
		p.classList.toggle(
			'active',
			isAll ? state[filterKey].includes('all') : state[filterKey].includes(p.dataset.value)
		);
	});
}

document.querySelectorAll('.filter-pill').forEach((pill) => {
	pill.addEventListener('click', () => {
		const filterKey = pill.dataset.filter;
		const value = pill.dataset.value;

		// Sort stays single-select
		if (filterKey === 'sort') {
			state.sort = value;
			pill.closest('.filter-group').querySelectorAll('.filter-pill').forEach((p) => {
				p.classList.toggle('active', p === pill);
			});
			applyFilters();
			return;
		}

		if (value === 'all') {
			state[filterKey] = ['all'];
		} else {
			// Remove 'all' and toggle the clicked value
			const current = state[filterKey].filter((v) => v !== 'all');
			const idx = current.indexOf(value);
			if (idx === -1) {
				current.push(value);
			} else {
				current.splice(idx, 1);
			}

			// Empty selection or all options selected → collapse back to 'all'
			const allValues = getPillValues(filterKey);
			if (current.length === 0 || allValues.every((v) => current.includes(v))) {
				state[filterKey] = ['all'];
			} else {
				state[filterKey] = current;
			}
		}

		syncPillActiveStates(filterKey);
		applyFilters();
	});
});
