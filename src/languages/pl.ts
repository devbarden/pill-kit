import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const pl: TypeLanguage = {
	welcome: {
		title:
			'Zapraszamy! Przeczytaj poniższe dokumenty przed rozpoczęciem korzystania z aplikacji',
		agreement: 'Przeczytałem i akceptuję',
		continue: 'Kontynuować',

		modal: {
			validation: {
				title: 'Uwaga',
				description: 'Musisz przeczytać i zaakceptować wymagane dokumenty',
			},
		},
	},

	home: {
		add: 'Dodać',
		empty:
			'Nie znaleziono żadnych aktywnych ani nadchodzących leków. Dodaj lek, aby kontrolować swoje leczenie',
	},

	createMedicine: {
		title: 'Dodać',
	},

	editMedicine: {
		title: 'Redagować',
		notFound: 'Nie znaleziono lekarstwa',
		back: 'Wróć do',
		remove: 'Usuń lek',
	},

	analytic: {
		title: 'Analityk',
		empty: 'Dodaj lekarstwo aby zobaczyć swoje analizy',
		warning:
			'Nie można wyświetlić wykresu postępu, ponieważ obecnie liczba aktywnych leków przekracza 20',

		progress: {
			title: 'Postęp',
			label: 'Aktywne leki',
		},

		bar: {
			title: 'Liczba przyjmowanych leków w ciągu ostatnich 5 lat',
		},

		pie: {
			title: 'Wskaźnik stosowania różnych rodzajów leków',
		},

		contribution: {
			title: 'Aktywność stosowania leków w ciągu ostatnich 2 miesięcy',
		},
	},

	history: {
		title: 'Historia',
		empty: 'Nie znaleziono leków',

		filters: {
			title: 'Filtr',
			items: {
				[EnumCardFilter.active]: 'Aktywny',
				[EnumCardFilter.future]: 'Przyszły',
				[EnumCardFilter.past]: 'Ubiegły',
			},
		},

		sort: {
			button: 'Sortować',
			medicines: 'Lek',

			modal: {
				title: 'Sortuj według',
				apply: 'Zastosować',
			},

			types: {
				name: 'Nazwa',
				startDate: 'Rozpoczęcie przyjmowania',
				endDate: 'Koniec odbioru',
			},
		},
	},

	settings: {
		title: 'Konfiguracja',

		field: {
			language: 'Język',
			contact: 'Kontakt z nami',
			clearAllData: 'Usuń wszystkie dane',
			terms: 'Warunki użytkowania i postanowienia',
		},

		modal: {
			clearAllData: {
				title: 'Usuń wszystkie dane',
				description:
					'Czy naprawdę chcesz usunąć wszystkie dane? Działanie to jest nieodwracalne',
			},
		},
	},

	medicine: {
		field: {
			name: 'Nazwa',
			type: 'Rodzaj',
			countPerUse: 'Dawka',
			countPerDay: 'Ile dziennie ?',
			startDate: 'Rozpoczęcie przyjmowania',
			endDate: 'Koniec odbioru',
			notification: 'Powiadomienie',
			times: 'Przypomnienie',
			color: 'Kolor',
		},

		modal: {
			validation: {
				title: 'Niektóre pola nie są wypełnione',
				description: 'Proszę wypełnić następujące pola:',
			},

			remove: {
				title: 'Usuń lek',
				description:
					'Czy naprawdę chcesz usunąć ten lek? Działanie to jest nieodwracalne',
			},
		},

		warning: {
			past: 'Zakres czasu w przeszłości. Nie zobaczysz tego leku na ekranie głównym',
			future: 'Zakres czasu w przyszłości',
		},

		indicator: {
			ml: 'ml',
		},

		types: {
			[EnumMedicineType.pill]: 'Tabletki / Kapsułki',
			[EnumMedicineType.liquid]: 'Nalewka / Syrop',
			[EnumMedicineType.injection]: 'Iniekcja',
			[EnumMedicineType.cream]: 'Krem / Maść / Żel',
			[EnumMedicineType.drops]: 'Kropla',
			[EnumMedicineType.candles]: 'Świeca',
			[EnumMedicineType.pencil]: 'Ołówek Medyczny',
			[EnumMedicineType.powder]: 'Proszek',
			[EnumMedicineType.spray]: 'Aerozol / Spray',
			[EnumMedicineType.bandage]: 'Plaster',
		},
	},

	terms: {
		title: 'Warunki użytkowania i postanowienia',
	},

	card: {
		date: {
			till: 'Do',
			from: 'Od',
		},

		label: {
			active: 'Aktywnie',
			future: 'Oczekiwany',
			past: 'Zakończone',
		},
	},

	component: {
		button: {
			ok: 'Okay',
			add: 'Dodać',
			save: 'Zachować',
			back: 'Wrócić',
			cancel: 'Cofnąć',
			delete: 'Usunąć',
			close: 'Zamknąć',
		},

		input: {
			placeholder: {
				required: 'Obowiązkowy',
				optional: 'Niekoniecznie',
				search: 'Wyszukiwanie',
			},
		},
	},

	actions: {
		loading: 'Ładowanie...',
		removing: 'Usuwanie...',
		updating: 'Odnowienie...',
		uploading: 'Ładowanie...',
	},

	notification: {
		medicine: {
			add: 'Lek został pomyślnie dodany',
			edit: 'Lek został pomyślnie zaktualizowany',
			remove: 'Lek został pomyślnie usunięty',
			removeAll: 'Wszystkie leki zostały pomyślnie usunięte',
			error: 'Coś poszło nie tak. Pracujemy nad tym problemem',
		},
	},

	error: {
		title: 'Coś się zepsuło. Prosimy o kontakt mailowy',
		reset: 'Zresetuj błąd',
	},
}
