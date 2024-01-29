import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const de: TypeLanguage = {
	welcome: {
		title:
			'Willkommen! Bitte lesen Sie die folgenden Dokumente, bevor Sie die Anwendung verwenden',
		agreement: 'Ich habe gelesen und akzeptiere',
		continue: 'Weiterhin',

		modal: {
			validation: {
				title: 'Aufmerksamkeit',
				description:
					'Sie müssen die erforderlichen Dokumente lesen und akzeptieren',
			},

			notification: {
				title: 'Benachrichtigungen',
				description:
					'Um Erinnerungen zu erhalten, erlauben Sie bitte der App, Benachrichtigungen zu senden. Andernfalls können wir Sie nicht daran erinnern, Ihre Medikamente einzunehmen',
			},
		},
	},

	home: {
		add: 'Hinzufügen',
		empty:
			'Es wurden keine aktiven oder bevorstehenden Medikamente erkannt. Bitte fügen Sie ein Medikament hinzu, um Ihre Behandlung zu überwachen',
	},

	createMedicine: {
		title: 'Erstellen',
	},

	editMedicine: {
		title: 'Bearbeiten',
		notFound: 'Nicht gefunden',
		back: 'Gehe zurück',
		remove: 'Entfernen',
	},

	analytic: {
		title: 'Analytics',
		empty: 'Bitte fügen Sie ein Medikament hinzu, um Ihre Analysen anzuzeigen',
		warning:
			'Es ist nicht möglich, ein Fortschrittsdiagramm anzuzeigen, da derzeit mehr als 20 aktive Arzneimittel vorhanden sind',

		progress: {
			title: 'Fortschritt',
			label: 'Aktive Arzneimittel',
		},

		bar: {
			title: 'Die Anzahl der in den letzten 5 Jahren eingenommenen Medikamente',
		},

		pie: {
			title:
				'Der Indikator für die Verwendung verschiedener Arten von Arzneimitteln',
		},

		contribution: {
			title: 'Die Aktivität des Arzneimittelkonsums in den letzten 2 Monaten',
		},
	},

	history: {
		title: 'Geschichte',
		empty: 'Keine Medikamente gefunden',

		filters: {
			title: 'Preisauswahl',

			items: {
				[EnumCardFilter.active]: 'Aktiv',
				[EnumCardFilter.future]: 'Zukunft',
				[EnumCardFilter.past]: 'Vergangenheit',
			},
		},

		sort: {
			button: 'Sortieren',
			medicines: 'Medizin',

			modal: {
				title: 'Sortieren nach',
				apply: 'Gelten',
			},

			types: {
				name: 'Name',
				startDate: 'Startdatum',
				endDate: 'Enddatum',
			},
		},
	},

	settings: {
		title: 'Einstellung',

		field: {
			language: 'Sprachlich',
			contact: 'Kontakt',
			clearAllData: 'Alle Daten löschen',
			terms: 'Allgemeine Geschäftsbedingungen',
		},

		modal: {
			clearAllData: {
				title: 'Alle Daten löschen',
				description:
					'Möchten Sie wirklich alle Daten löschen? Diese Aktion ist unwiderruflich',
			},
		},
	},

	medicine: {
		field: {
			name: 'Name',
			type: 'Art',
			countPerUse: 'Dosis',
			countPerDay: 'Wie viele pro Tag ?',
			startDate: 'Startdatum',
			endDate: 'Enddatum',
			notification: 'Benachrichtigung',
			times: 'Erinnerung',
			color: 'Farbig',
		},

		modal: {
			validation: {
				title: 'Einige Felder sind nicht ausgefüllt',
				description: 'Bitte füllen Sie die nächsten Felder aus:',
			},

			remove: {
				title: 'Arzneimittel entfernen',
				description:
					'Möchten Sie dieses Arzneimittel wirklich löschen? Diese Aktion ist unwiderruflich',
			},
		},

		warning: {
			past: 'Der Zeitbereich in der Vergangenheit. Sie werden dieses Arzneimittel nicht auf dem Startbildschirm sehen',
			future: 'Der Zeitbereich in der Zukunft',
		},

		indicator: {
			ml: 'ml',
		},

		types: {
			[EnumMedicineType.pill]: 'Pillen / Kapseln',
			[EnumMedicineType.liquid]: 'Tinktur / Sirup / Flüssigkeit',
			[EnumMedicineType.injection]: 'Injektion',
			[EnumMedicineType.cream]: 'Creme / Salbe / Gel',
			[EnumMedicineType.drops]: 'Drops',
			[EnumMedicineType.candles]: 'Kerze',
			[EnumMedicineType.pencil]: 'Medizinischer Bleistift',
			[EnumMedicineType.powder]: 'Pulver',
			[EnumMedicineType.spray]: 'Aerosole / Sprays',
			[EnumMedicineType.bandage]: 'Pflaster',
		},
	},

	terms: {
		title: 'Allgemeine Geschäftsbedingungen',
	},

	card: {
		date: {
			till: 'Bis',
			from: 'Von',
		},

		label: {
			active: 'Aktiv',
			future: 'Kommende',
			past: 'Abgeschlossen',
		},
	},

	component: {
		button: {
			ok: 'Okay',
			add: 'Hinzufügen',
			save: 'Speichern',
			back: 'Zurück',
			cancel: 'Stornieren',
			delete: 'Löschen',
			close: 'Schließen',
		},

		input: {
			placeholder: {
				required: 'Erforderlich',
				optional: 'Optional',
				search: 'Suche',
			},
		},
	},

	actions: {
		loading: 'Laden...',
		removing: 'Entnahme...',
		updating: 'Aktualisieren...',
		uploading: 'Hochladen...',
	},

	notification: {
		medicine: {
			add: 'Medizin wurde erfolgreich hinzugefügt',
			edit: 'Medizin wurde erfolgreich aktualisiert',
			remove: 'Medizin wurde erfolgreich entfernt',
			removeAll: 'Alle Medikamente wurden erfolgreich entfernt',
			error: 'Irgendwas ist schief gelaufen. Wir arbeiten an dem Problem',
		},
	},

	error: {
		title: 'Irgendwas ist kaputt. Bitte kontaktieren Sie uns per E-Mail',
		reset: 'Fehler beim Zurücksetzen',
	},
}
