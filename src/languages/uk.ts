import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const uk: TypeLanguage = {
	welcome: {
		title:
			'Ласкаво просимо! Будь ласка, прочитайте наступні документи перш ніж почати користуватися програмою',
		agreement: 'Я читав і приймаю',
		continue: 'продовжити',

		modal: {
			validation: {
				title: 'Увага',
				description: 'Вам потрібно прочитати та прийняти необхідні документи',
			},

			notification: {
				title: 'Сповіщення',
				description:
					'Щоб отримувати нагадування, дозвольте програмі надсилати сповіщення, інакше ми не зможемо нагадати вам, коли приймати ліки.',
			},
		},
	},

	home: {
		add: 'Додати',
		empty:
			'Не виявлено активних або майбутніх ліків. Будь ласка, додайте ліки для контролю вашого лікування',
	},

	createMedicine: {
		title: 'Додати',
	},

	editMedicine: {
		title: 'Редагувати',
		notFound: 'Ліки не знайдено',
		back: 'Повернутися назад',
		remove: 'Видаліть ліки',
	},

	analytic: {
		title: 'Аналітика',
		empty: 'Будь ласка, додайте ліки щоб побачити свою аналітику',
		warning:
			'Неможливо відобразити графік прогресу, так як в даний момент кількість активних ліків більше 20',

		progress: {
			title: 'Прогрес',
			label: 'Активні ліки',
		},

		bar: {
			title: 'Кількість прийнятих ліків за останні 5 років',
		},

		pie: {
			title: 'Показник використання різних видів лікарських засобів',
		},

		contribution: {
			title: 'Активність використання ліків за останні 2 місяці',
		},
	},

	history: {
		title: 'Історія',
		empty: 'Ліки не знайдені',

		filters: {
			title: 'Фільтр',
			items: {
				[EnumCardFilter.active]: 'Активний',
				[EnumCardFilter.future]: 'Майбутній',
				[EnumCardFilter.past]: 'Минулі',
			},
		},

		sort: {
			button: 'Сортувати',
			medicines: 'Ліки',

			modal: {
				title: 'Сортувати за',
				apply: 'Застосовувати',
			},

			types: {
				name: 'Назва',
				startDate: 'Початок прийому',
				endDate: 'Кінець прийому',
			},
		},
	},

	settings: {
		title: 'Настройка',

		field: {
			language: 'Мова',
			contact: `Зв'язок з нами`,
			clearAllData: 'Видалити всі дані',
			terms: 'Умови використання та Положення',
		},

		modal: {
			clearAllData: {
				title: 'Видалити всі дані',
				description: 'Ви дійсно хочете видалити всі дані? Ця дія є незворотнім',
			},
		},
	},

	medicine: {
		field: {
			name: 'Назва',
			type: 'Тип',
			countPerUse: 'Доза',
			countPerDay: 'Скільки в день ?',
			startDate: 'Початок прийому',
			endDate: 'Кінець прийому',
			notification: 'Повідомлення',
			times: 'Нагадування',
			color: 'Колір',
		},

		modal: {
			validation: {
				title: 'Деякі поля не заповнені',
				description: 'Будь ласка, заповніть наступні поля:',
			},

			remove: {
				title: 'Видаліть ліки',
				description:
					'Ви дійсно хочете видалити цей препарат? Ця дія є незворотнім',
			},
		},

		warning: {
			past: 'Часовий діапазон в минулому. Ви не побачите цей препарат на головному екрані',
			future: 'Часовий діапазон у майбутньому',
		},

		indicator: {
			ml: 'мл',
		},

		types: {
			[EnumMedicineType.pill]: 'Таблетки / Капсули',
			[EnumMedicineType.liquid]: 'Настоянка / Сироп',
			[EnumMedicineType.injection]: `Ін'єкція`,
			[EnumMedicineType.cream]: 'Крем / Мазь / Гель',
			[EnumMedicineType.drops]: 'Краплі',
			[EnumMedicineType.candles]: 'Свічка',
			[EnumMedicineType.pencil]: 'Медичний олівець',
			[EnumMedicineType.powder]: 'Порошок',
			[EnumMedicineType.spray]: 'Аерозоль / Спрей',
			[EnumMedicineType.bandage]: 'Пластир',
		},
	},

	terms: {
		title: 'Умови використання та Положення',
	},

	card: {
		date: {
			till: 'До',
			from: 'З',
		},

		label: {
			active: 'Активно',
			future: 'Очікуваний',
			past: 'Завершений',
		},
	},

	component: {
		button: {
			ok: 'Окей',
			add: 'Додати',
			save: 'Зберегти',
			back: 'Повернутися',
			cancel: 'Відмінивши',
			delete: 'Видалити',
			close: 'Закривати',
		},

		input: {
			placeholder: {
				required: 'Неодмінно',
				optional: `Необов'язково`,
				search: 'Пошук',
			},
		},
	},

	actions: {
		loading: 'Завантаження...',
		removing: 'Видалення...',
		updating: 'Оновлення...',
		uploading: 'Завантаження...',
	},

	notification: {
		medicine: {
			add: 'Ліки успішно додано',
			edit: 'Ліки успішно оновлено',
			remove: 'Ліки успішно видалено',
			removeAll: 'Всі ліки були успішно видалені',
			error: 'Щось пішло не так. Ми працюємо над цією проблемою',
		},
	},

	error: {
		title: `Щось зламалося. Будь ласка, зв'яжіться з нами по електронній пошті`,
		reset: 'Скинути помилку',
	},
}
