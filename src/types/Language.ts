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

	components: {
		btn: {
			add: string
			save: string
			cancel: string
			back: string
		}

		input: {
			placeholder: string
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
			error: string
		}
	}
}
