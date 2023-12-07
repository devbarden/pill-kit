import { EnumMedicineType, EnumCardFilter } from '@app/enums'

import { TypeMedicineSortableField } from './medicine'

export type TypeLanguage = {
	main: {
		appTitle: string
		error: {
			title: string
			reset: string
		}
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
		empty: string
		progress: {
			title: string
			label: string
		}
		bar: {
			title: string
		}
		pie: {
			title: string
		}
		contribution: {
			title: string
		}
	}

	history: {
		title: string
		empty: string
		filtersTitle: string
		filters: Record<EnumCardFilter, string>
		sortTypes: Record<TypeMedicineSortableField, string>
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
		time: string
		color: string
		modal: {
			times: {
				notification: string
			}
		}
		validation: {
			title: string
			text: string
		}
		pastWarning: string
		futureWarning: string
	}

	removeDataAlert: {
		title: string
		description: string
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

		label: {
			active: string
			future: string
			past: string
		}
	}

	medicine: {
		indicator: {
			ml: string
		}
		types: Record<EnumMedicineType, string>
	}

	components: {
		btn: {
			ok: string
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

	modal: {
		removeMedicine: {
			title: string
			description: string
		}
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
