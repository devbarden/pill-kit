import { MEDICINE_TYPE } from '@app/constants'

export interface Language {
	main: {
		appTitle: string
	}

	home: {
		addButton: string
		emptyInfo: string
	}

	createMedicine: {
		title: string
	}

	editMedicine: {
		title: string
		notFound: string
		back: string
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
	}

	card: {
		date: {
			till: string
			from: string
			daily: string
		}
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
			}
		}

		select: {
			items: {
				medicineTypes: Record<MEDICINE_TYPE, string>
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
