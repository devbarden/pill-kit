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

	medicineForm: {
		name: 'Name',
		type: 'Type',
		count: 'Count',
		perDay: 'Per day',
		startDate: 'Start date',
		endDate: 'End date',
		notification: 'Notification',
	},

	components: {
		btn: {
			add: 'Add',
			save: 'Save',
			cancel: 'Cancel',
			back: 'Back',
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
			error: 'Something went wrong. We are working on the problem',
		},
	},
}
