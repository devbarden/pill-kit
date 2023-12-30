import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const en: TypeLanguage = {
	main: {
		appTitle: 'Pill Kit',
		error: {
			title: `Something's broken. Please contact us via email`,
			reset: 'Reset error',
		},
	},

	welcome: {
		title:
			'Welcome! Please read the following documents before using the application',
		agreement: 'I have read and accept',
		continue: 'Continue',
		validation: {
			title: 'Attention',
			text: 'You need to read and accept the required documents',
		},
	},

	home: {
		title: 'Home',
		add: 'Add',
		empty: 'No active or future medicines found',
	},

	createMedicine: {
		title: 'Create',
	},

	editMedicine: {
		title: 'Edit',
		notFound: 'Not Found',
		back: 'Go Back',
		remove: 'Remove',
	},

	analytic: {
		title: 'Analytics',
		empty: 'Please add a medicine to see your analytics',
		progress: {
			title: 'Progress',
			label: 'Active medicines',
		},
		bar: {
			title: 'The number of medications taken in the last 5 years',
		},
		pie: {
			title: 'The indicator of the use of different types of medicines',
		},
		contribution: {
			title: 'The activity of medicines use over the last 2 months',
		},
	},

	history: {
		title: 'History',
		empty: 'No medications found',
		filtersTitle: 'Filters',
		filters: {
			[EnumCardFilter.active]: 'Active',
			[EnumCardFilter.future]: 'Future',
			[EnumCardFilter.past]: 'Past',
		},
		sortTypes: {
			name: 'Name',
			startDate: 'Start date',
			endDate: 'End date',
		},
	},

	sortSection: {
		modal: {
			title: 'Sort by',
			apply: 'Apply',
		},
		medicines: 'Medicines',
		sort: 'Sort',
	},

	settings: {
		title: 'Settings',
	},

	settingsForm: {
		language: 'Language',
		contact: 'Contact',
		clearData: 'Clear all data',
		termsOfUse: 'Terms of Use',
	},

	medicineForm: {
		name: 'Name',
		type: 'Type',
		count: 'Dose',
		perDay: 'How many per day ?',
		startDate: 'Start date',
		endDate: 'End date',
		notification: 'Notification',
		time: 'Reminders',
		color: 'Color',
		modal: {
			times: {
				notification: 'Dose',
			},
		},
		validation: {
			title: 'Some fields are not filled in',
			text: 'Please fill next fields:',
		},
		pastWarning:
			'The time range in the past. You will not see this medicine on the home screen',
		futureWarning: 'The time range in the future',
	},

	removeDataAlert: {
		title: 'Clear All Data',
		description:
			'Do you really want to delete all the data ? This action is irrevocable',
	},

	card: {
		dose: 'Dose',
		perDay: 'Per day',
		date: {
			till: 'Till',
			from: 'From',
			daily: 'Daily',
		},
		label: {
			active: 'Active',
			future: 'Upcoming',
			past: 'Completed',
		},
	},

	medicine: {
		indicator: {
			ml: 'ml',
		},
		types: {
			[EnumMedicineType.pill]: 'Pills / Capsules',
			[EnumMedicineType.liquid]: 'Tincture / Syrup',
			[EnumMedicineType.injection]: 'Injection',
			[EnumMedicineType.cream]: 'Cream / Ointment / Gel',
			[EnumMedicineType.drops]: 'Drops',
			[EnumMedicineType.candles]: 'Candles',
			[EnumMedicineType.pencil]: 'Medicinal Pencil',
			[EnumMedicineType.powder]: 'Powder',
			[EnumMedicineType.spray]: 'Aerosols / Sprays',
			[EnumMedicineType.bandage]: 'Band-Aid',
		},
	},

	components: {
		btn: {
			ok: 'OK',
			add: 'Add',
			save: 'Save',
			back: 'Back',
			cancel: 'Cancel',
			delete: 'Delete',
			close: 'Close',
		},

		input: {
			placeholder: {
				required: 'Required',
				optional: 'Optional',
				search: 'Search',
			},
		},
	},

	actions: {
		removing: 'Removing...',
	},

	modal: {
		removeMedicine: {
			title: 'Remove medicine',
			description:
				'Do you really want to delete this medicine ? This action is irrevocable',
		},
	},

	notifications: {
		medicines: {
			add: 'Medicine was added successfully',
			edit: 'Medicine was updated successfully',
			remove: 'Medicine was removed successfully',
			removeAll: 'All medicines have been successfully removed',
			error: 'Something went wrong. We are working on the problem',
		},
	},

	termsOfUse: {
		title: 'Terms And Conditions',
	},
}
