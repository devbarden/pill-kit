import { MEDICINE_TYPE, CARD_FILTER } from '@app/constants'
import { MedicineSortableField } from './medicine'

export interface Language {
	main: {
		appTitle: string
	}

	home: {
		title: string
		add: string
		empty: string
	}

	createMedicine: {
		title: string
	}

	editMedicine: {
		title: string
		notFound: string
		back: string
		remove: string
	}

	analytic: {
		title: string
	}

	history: {
		title: string
		empty: string
		filtersTitle: string
		filters: Record<CARD_FILTER, string>
		sortTypes: Record<MedicineSortableField, string>
	}

	sortSection: {
		modal: {
			title: string
			apply: string
		}
		medicines: string
		sort: string
	}

	settings: {
		title: string
	}

	settingsForm: {
		upgrade: string
		donate: string
		rate: string
		language: string
		contact: string
		clearData: string
		termsOfUse: string
	}

	medicineForm: {
		name: string
		type: string
		count: string
		perDay: string
		startDate: string
		endDate: string
		notification: string
	}

	removeDataAlert: {
		title: string
		description: string
		isRemoving: string
	}

	card: {
		date: {
			till: string
			from: string
			daily: string
		}

		infoModal: {
			type: string
			count: string
			perDay: string
			startDate: string
			endDate: string
		}
	}

	medicine: {
		types: Record<MEDICINE_TYPE, string>
	}

	components: {
		btn: {
			add: string
			save: string
			back: string
			cancel: string
			delete: string
			close: string
		}

		input: {
			placeholder: {
				required: string
				optional: string
				search: string
			}
		}
	}

	actions: {
		removing: string
	}

	notifications: {
		medicines: {
			add: string
			edit: string
			remove: string
			removeAll: string
			error: string
		}
	}

	termsOfUse: {
		title: string
		description: string
	}
}
