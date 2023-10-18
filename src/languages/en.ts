import { Language } from '@app/types'

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

	components: {
		btn: {
			add: 'Add',
			save: 'Save',
			cancel: 'Cancel',
			back: 'Back',
		},

		input: {
			placeholder: 'Medicine',
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
