import { EnumMedicineType, EnumCardFilter } from '@app/enums'

import { TypeMedicineSortableField, TypeMedicineWithoutId } from './medicine'

export type TypeLanguage = {
	reminders: {
		takeMedicine: string
	}

	welcome: {
		title: string
		agreement: string
		continue: string

		modal: {
			validation: {
				title: string
				description: string
			}

			notification: {
				title: string
				description: string
			}
		}
	}

	home: {
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
		warning: string

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

		filters: {
			title: string

			items: Record<EnumCardFilter, string>
		}

		sort: {
			button: string
			medicines: string

			modal: {
				title: string
				apply: string
			}

			types: Record<TypeMedicineSortableField, string>
		}
	}

	settings: {
		title: string

		field: {
			language: string
			contact: string
			clearAllData: string
			terms: string
		}

		modal: {
			clearAllData: {
				title: string
				description: string
			}
		}
	}

	medicine: {
		field: Record<keyof TypeMedicineWithoutId, string>

		modal: {
			validation: {
				title: string
				description: string
			}

			remove: {
				title: string
				description: string
			}
		}

		warning: {
			past: string
			future: string
		}

		indicator: {
			ml: string
		}

		types: Record<EnumMedicineType, string>
	}

	terms: {
		title: string
	}

	card: {
		date: {
			till: string
			from: string
		}

		label: {
			active: string
			future: string
			past: string
		}
	}

	component: {
		button: {
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
		loading: string
		removing: string
		updating: string
		uploading: string
	}

	notification: {
		medicine: {
			add: string
			edit: string
			remove: string
			removeAll: string
			error: string
		}
	}

	error: {
		title: string
		reset: string
	}
}
