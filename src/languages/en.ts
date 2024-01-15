import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const en: TypeLanguage = {
	welcome: {
		title:
			'Welcome! Please read the following documents before using the application',
		agreement: 'I have read and accept',
		continue: 'Continue',

		modal: {
			validation: {
				title: 'Attention',
				description: 'You need to read and accept the required documents',
			},
		},
	},

	home: {
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

		filters: {
			title: 'Filters',

			items: {
				[EnumCardFilter.active]: 'Active',
				[EnumCardFilter.future]: 'Future',
				[EnumCardFilter.past]: 'Past',
			},
		},

		sort: {
			button: 'Sort',
			medicines: 'Medicines',

			modal: {
				title: 'Sort by',
				apply: 'Apply',
			},

			types: {
				name: 'Name',
				startDate: 'Start date',
				endDate: 'End date',
			},
		},
	},

	settings: {
		title: 'Settings',

		field: {
			language: 'Language',
			contact: 'Contact',
			clearAllData: 'Clear all data',
			terms: 'Terms of Use',
		},

		modal: {
			clearAllData: {
				title: 'Clear All Data',
				description:
					'Do you really want to delete all the data ? This action is irrevocable',
			},
		},
	},

	medicine: {
		field: {
			name: 'Name',
			type: 'Type',
			countPerUse: 'Dose',
			countPerDay: 'How many per day ?',
			startDate: 'Start date',
			endDate: 'End date',
			notification: 'Notification',
			times: 'Reminders',
			color: 'Color',
		},

		modal: {
			validation: {
				title: 'Some fields are not filled in',
				description: 'Please fill next fields:',
			},

			remove: {
				title: 'Remove medicine',
				description:
					'Do you really want to delete this medicine ? This action is irrevocable',
			},
		},

		warning: {
			past: 'The time range in the past. You will not see this medicine on the home screen',
			future: 'The time range in the future',
		},

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

	terms: {
		title: 'Terms And Conditions',
	},

	card: {
		date: {
			till: 'Till',
			from: 'From',
		},

		label: {
			active: 'Active',
			future: 'Upcoming',
			past: 'Completed',
		},
	},

	component: {
		button: {
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
		loading: 'Loading...',
		removing: 'Removing...',
		updating: 'Updating...',
		uploading: 'Uploading...',
	},

	notification: {
		medicine: {
			add: 'Medicine was added successfully',
			edit: 'Medicine was updated successfully',
			remove: 'Medicine was removed successfully',
			removeAll: 'All medicines have been successfully removed',
			error: 'Something went wrong. We are working on the problem',
		},
	},

	error: {
		title: `Something's broken. Please contact us via email`,
		reset: 'Reset error',
	},
}
