import { Language } from '@app/types'
import { MEDICINE_TYPE } from '@app/constants'

export const en: Language = {
	main: {
		appTitle: 'Pill Kit',
	},

	home: {
		addButton: 'Add',
		emptyInfo: 'No medications found',
	},

	createMedicine: {
		title: 'Create New Medicine',
	},

	editMedicine: {
		title: 'Edit Medicine',
		notFound: 'Not Found',
		back: 'Go Back',
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
		termsOfUsage: 'Terms of Usage',
		privacyPolicy: 'Privacy Policy',
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
	},

	components: {
		btn: {
			add: 'Add',
			save: 'Save',
			back: 'Back',
			cancel: 'Cancel',
			delete: 'Delete',
		},

		input: {
			placeholder: {
				required: 'Required',
				optional: 'Optional',
			},
		},

		select: {
			items: {
				medicineTypes: {
					[MEDICINE_TYPE.PILL]: 'Pill',
					[MEDICINE_TYPE.CREAM]: 'Cream',
				},
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
}
