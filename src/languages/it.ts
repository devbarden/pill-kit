import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const it: TypeLanguage = {
	welcome: {
		title: `Benvenuti! Si prega di leggere i seguenti documenti prima di utilizzare l'applicazione`,
		agreement: 'Ho letto e accetto',
		continue: 'Continuare',

		modal: {
			validation: {
				title: 'Attenzione',
				description: 'È necessario leggere e accettare i documenti richiesti',
			},

			notification: {
				title: 'Notifiche',
				description:
					"Per ricevere promemoria, consenti all'app di inviare notifiche, altrimenti non saremo in grado di ricordarti quando prendere i medicinali.",
			},
		},
	},

	home: {
		add: 'Aggiungere',
		empty:
			'Non sono stati rilevati farmaci attivi o imminenti. Si prega di aggiungere un farmaco per monitorare il trattamento',
	},

	createMedicine: {
		title: 'Creare',
	},

	editMedicine: {
		title: 'Modificare',
		notFound: 'Non trovato',
		back: 'Torna indietro',
		remove: 'Rimuovere',
	},

	analytic: {
		title: 'Analytics',
		empty: 'Aggiungi un medicinale per visualizzare le tue analisi',
		warning:
			'Non è possibile visualizzare un grafico di avanzamento perché al momento il numero di farmaci attivi è superiore a 20',

		progress: {
			title: 'Progresso',
			label: 'Farmaci attivi',
		},

		bar: {
			title: 'Il numero di farmaci assunti negli ultimi 5 anni',
		},

		pie: {
			title: `L'indicatore dell'uso di diversi tipi di medicinali`,
		},

		contribution: {
			title: `L'attività dei farmaci utilizzati negli ultimi 2 mesi`,
		},
	},

	history: {
		title: 'Storia',
		empty: 'Nessun farmaco trovato',

		filters: {
			title: 'Filtro',

			items: {
				[EnumCardFilter.active]: 'Attivo',
				[EnumCardFilter.future]: 'Futuro',
				[EnumCardFilter.past]: 'Passato',
			},
		},

		sort: {
			button: 'Ordine',
			medicines: 'Medicina',

			modal: {
				title: 'Ordina per',
				apply: 'Applicare',
			},

			types: {
				name: 'Nome',
				startDate: 'Data di inizio',
				endDate: 'Data di fine',
			},
		},
	},

	settings: {
		title: 'Impostazioni',

		field: {
			language: 'Lingua',
			contact: 'Contatto',
			clearAllData: 'Cancella tutti i dati',
			terms: 'Termini e Condizioni',
		},

		modal: {
			clearAllData: {
				title: 'Cancella tutti i dati',
				description: 'Vuoi davvero cancellare tutti i dati?',
			},
		},
	},

	medicine: {
		field: {
			name: 'Nome',
			type: 'Tipo',
			countPerUse: 'Dose',
			countPerDay: 'Quanti al giorno?',
			startDate: "Data d'inizio",
			endDate: 'Data di fine',
			notification: 'Notifica',
			times: 'Promemoria',
			color: 'Colore',
		},

		modal: {
			validation: {
				title: 'Alcuni campi non sono compilati',
				description: 'Si prega di compilare i campi successivi:',
			},

			remove: {
				title: 'Rimuovere la medicina',
				description: 'Vuoi davvero eliminare questo medicinale?',
			},
		},

		warning: {
			past: "L'intervallo di tempo nel passato. ",
			future: "L'intervallo di tempo nel futuro",
		},

		indicator: {
			ml: 'ml',
		},

		types: {
			[EnumMedicineType.pill]: 'Pillole / Capsule',
			[EnumMedicineType.liquid]: 'Tintura / Sciroppo / Liquido',
			[EnumMedicineType.injection]: 'Iniezione',
			[EnumMedicineType.cream]: 'Crema / Unguento / Gel',
			[EnumMedicineType.drops]: 'Goccia',
			[EnumMedicineType.candles]: 'Candela',
			[EnumMedicineType.pencil]: 'Matita medica',
			[EnumMedicineType.powder]: 'Polvere',
			[EnumMedicineType.spray]: 'Aerosol / Spray',
			[EnumMedicineType.bandage]: 'Cerotto',
		},
	},

	terms: {
		title: 'Termini e Condizioni',
	},

	card: {
		date: {
			till: 'Fino al',
			from: 'Dal',
		},

		label: {
			active: 'Attivo',
			future: 'Prossimamente',
			past: 'Completato',
		},
	},

	component: {
		button: {
			ok: 'OK',
			add: 'Aggiungere',
			save: 'Salva',
			back: 'Indietro',
			cancel: 'Annulla',
			delete: 'Eliminare',
			close: 'Vicino',
		},

		input: {
			placeholder: {
				required: 'Necessario',
				optional: 'Opzionale',
				search: 'Ricerca',
			},
		},
	},

	actions: {
		loading: 'Caricamento...',
		removing: 'Rimozione...',
		updating: 'In aggiornamento...',
		uploading: 'Caricamento...',
	},

	notification: {
		medicine: {
			add: 'La medicina è stata aggiunta con successo',
			edit: 'La medicina è stata aggiornata con successo',
			remove: 'La medicina è stata rimossa con successo',
			removeAll: 'Tutti i medicinali sono stati rimossi con successo',
			error: 'Qualcosa è andato storto.',
		},
	},

	error: {
		title: 'Qualcosa è rotto.',
		reset: "Reimpostare l'errore",
	},
}
