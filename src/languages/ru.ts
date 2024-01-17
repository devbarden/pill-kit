import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const ru: TypeLanguage = {
	welcome: {
		title:
			'Добро Пожаловать! Пожалуйста, прочтите следующие документы прежде чем начать пользоваться приложением',
		agreement: 'Я прочитал и принимаю',
		continue: 'Продолжить',

		modal: {
			validation: {
				title: 'Внимание',
				description: 'Вам необходимо прочитать и принять необходимые документы',
			},
		},
	},

	home: {
		add: 'Добавить',
		empty:
			'Не обнаружено активных или предстоящих лекарств. Пожалуйста, добавьте лекарство для контроля вашего лечения',
	},

	createMedicine: {
		title: 'Добавить',
	},

	editMedicine: {
		title: 'Редактировать',
		notFound: 'Лекарство не найдено',
		back: 'Вернуться назад',
		remove: 'Удалить лекарство',
	},

	analytic: {
		title: 'Аналитика',
		empty: 'Пожалуйста, добавьте лекарство чтобы увидеть свою аналитику',
		warning:
			'Невозможно отобразить график прогресса, так как в данный момент количество активных лекарств более 20',

		progress: {
			title: 'Прогресс',
			label: 'Активные лекарства',
		},

		bar: {
			title: 'Количество принятых лекарств за последние 5 лет',
		},

		pie: {
			title: 'Показатель использования различных видов лекарственных средств',
		},

		contribution: {
			title: 'Активность использования лекарств за последние 2 месяца',
		},
	},

	history: {
		title: 'История',
		empty: 'Лекарства не найдены',

		filters: {
			title: 'Фильтры',
			items: {
				[EnumCardFilter.active]: 'Активные',
				[EnumCardFilter.future]: 'Будущие',
				[EnumCardFilter.past]: 'Прошлые',
			},
		},

		sort: {
			button: 'Сортировать',
			medicines: 'Лекарства',

			modal: {
				title: 'Сортировать по',
				apply: 'Применить',
			},

			types: {
				name: 'Название',
				startDate: 'Начало приема',
				endDate: 'Конец приема',
			},
		},
	},

	settings: {
		title: 'Настройки',

		field: {
			language: 'Язык',
			contact: 'Связь с нами',
			clearAllData: 'Удалить все данные',
			terms: 'Условия Использования и Положения',
		},

		modal: {
			clearAllData: {
				title: 'Удалить все данные',
				description:
					'Вы действительно хотите удалить все данные? Это действие является необратимым',
			},
		},
	},

	medicine: {
		field: {
			name: 'Название',
			type: 'Тип',
			countPerUse: 'Доза',
			countPerDay: 'Сколько в день ?',
			startDate: 'Начало приема',
			endDate: 'Конец приема',
			notification: 'Уведомления',
			times: 'Напоминания',
			color: 'Цвет',
		},

		modal: {
			validation: {
				title: 'Некоторые поля не заполнены',
				description: 'Пожалуйста, заполните следующие поля:',
			},

			remove: {
				title: 'Удалить лекарство',
				description:
					'Вы действительно хотите удалить это лекарство? Это действие является необратимым',
			},
		},

		warning: {
			past: 'Временной диапазон в прошлом. Вы не увидите это лекарство на главном экране',
			future: 'Временной диапазон в будущем',
		},

		indicator: {
			ml: 'мл',
		},

		types: {
			[EnumMedicineType.pill]: 'Таблетки / Капсулы',
			[EnumMedicineType.liquid]: 'Настойка / Сироп',
			[EnumMedicineType.injection]: 'Инъекция',
			[EnumMedicineType.cream]: 'Крем / Мазь / Гель',
			[EnumMedicineType.drops]: 'Капли',
			[EnumMedicineType.candles]: 'Свечи',
			[EnumMedicineType.pencil]: 'Медицинский карандаш',
			[EnumMedicineType.powder]: 'Порошок',
			[EnumMedicineType.spray]: 'Аэрозоль / Спрей',
			[EnumMedicineType.bandage]: 'Пластырь',
		},
	},

	terms: {
		title: 'Условия Использования и Положения',
	},

	card: {
		date: {
			till: 'До',
			from: 'С',
		},

		label: {
			active: 'Активно',
			future: 'Ожидаемо',
			past: 'Завершено',
		},
	},

	component: {
		button: {
			ok: 'Окей',
			add: 'Добавить',
			save: 'Сохранить',
			back: 'Вернуться',
			cancel: 'Отменить',
			delete: 'Удалить',
			close: 'Закрыть',
		},

		input: {
			placeholder: {
				required: 'Обязательно',
				optional: 'Необязательно',
				search: 'Поиск',
			},
		},
	},

	actions: {
		loading: 'Загрузка...',
		removing: 'Удаление...',
		updating: 'Обновление...',
		uploading: 'Загрузка...',
	},

	notification: {
		medicine: {
			add: 'Лекарство успешно добавлено',
			edit: 'Лекарство успешно обновлено',
			remove: 'Лекарство успешно удалено',
			removeAll: 'Все лекарства были успешно удалены',
			error: 'Что-то пошло не так. Мы работаем над этой проблемой',
		},
	},

	error: {
		title:
			'Что-то сломалось. Пожалуйста, свяжитесь с нами по электронной почте',
		reset: 'Сбросить ошибку',
	},
}
