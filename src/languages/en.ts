import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const en: TypeLanguage = {
	main: {
		appTitle: 'Pill Kit',
	},

	home: {
		title: 'Home',
		add: 'Add',
		empty: 'No active or future medicines found',
	},

	createMedicine: {
		title: 'Create Medicine',
	},

	editMedicine: {
		title: 'Edit Medicine',
		notFound: 'Not Found',
		back: 'Go Back',
		remove: 'Remove',
	},

	analytic: {
		title: 'Analytics',
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
		upgrade: 'Upgrade to Pro version',
		donate: 'Donate',
		rate: 'Rate the App',
		language: 'Language',
		contact: 'Contact',
		clearData: 'Clear all data',
		termsOfUse: 'Terms of Use',
	},

	medicineForm: {
		name: 'Name',
		type: 'Type',
		count: 'Count',
		perDay: 'Per day',
		startDate: 'Start date',
		endDate: 'End date',
		notification: 'Notification',
	},

	removeDataAlert: {
		title: 'Clear All Data',
		description:
			'Do you really want to delete all the data ? This action is irrevocable',
		isRemoving: 'Is removing...',
	},

	card: {
		date: {
			till: 'Till',
			from: 'From',
			daily: 'Daily',
		},
		infoModal: {
			type: 'Type',
			count: 'Count',
			perDay: 'Per day',
			startDate: 'Start date',
			endDate: 'End date',
		},
	},

	medicine: {
		types: {
			[EnumMedicineType.pill]: 'Pill',
			[EnumMedicineType.cream]: 'Cream',
		},
	},

	components: {
		btn: {
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
		title: 'Terms of Use',
		description: `What is Lorem Ipsum?
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
		when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
		and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
		The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
		making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
		and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
		sometimes by accident, sometimes on purpose (injected humour and the like).`,
	},
}
