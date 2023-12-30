import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const ru: TypeLanguage = {
	main: {
		appTitle: 'Pill Kit',
		error: {
			title:
				'Что-то сломалось. Пожалуйста, свяжитесь с нами по электронной почте',
			reset: 'Сбросить ошибку',
		},
	},

	welcome: {
		title:
			'Добро Пожаловать! Пожалуйста, прочтите следующие документы прежде чем начать пользоваться приложением',
		agreement: 'Я прочитал и принимаю',
		continue: 'Продолжить',
		validation: {
			title: 'Внимание',
			text: 'Вам необходимо прочитать и принять необходимые документы',
		},
	},

	home: {
		title: 'Домашняя страница',
		add: 'Добавить',
		empty: 'Активных или будущих лекарств не обнаружено',
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
		filtersTitle: 'Фильтры',
		filters: {
			[EnumCardFilter.active]: 'Активные',
			[EnumCardFilter.future]: 'Будущие',
			[EnumCardFilter.past]: 'Прошлые',
		},
		sortTypes: {
			name: 'Имя',
			startDate: 'Начало приема',
			endDate: 'Конец приема',
		},
	},

	sortSection: {
		modal: {
			title: 'Сортировать по',
			apply: 'Применить',
		},
		medicines: 'Лекарства',
		sort: 'Сортировать',
	},

	settings: {
		title: 'Настройки',
	},

	settingsForm: {
		language: 'Язык',
		contact: 'Связь с нами',
		clearData: 'Удалить все данные',
		termsOfUse: 'Условия Использования',
	},

	medicineForm: {
		name: 'Название',
		type: 'Тип',
		count: 'Доза',
		perDay: 'Сколько в день ?',
		startDate: 'Начало приема',
		endDate: 'Конец приема',
		notification: 'Уведомления',
		time: 'Напоминания',
		color: 'Цвет',
		modal: {
			times: {
				notification: 'Доза',
			},
		},
		validation: {
			title: 'Некоторые поля не заполнены',
			text: 'Пожалуйста, заполните следующие поля:',
		},
		pastWarning:
			'Временной диапазон в прошлом. Вы не увидите это лекарство на главном экране',
		futureWarning: 'Временной диапазон в будущем',
	},

	removeDataAlert: {
		title: 'Удалить все данные',
		description:
			'Вы действительно хотите удалить все данные? Это действие является необратимым',
	},

	card: {
		dose: 'Доза',
		perDay: 'В день',
		date: {
			till: 'До',
			from: 'С',
			daily: 'Ежедневно',
		},
		label: {
			active: 'Активно',
			future: 'Ожидаемо',
			past: 'Завершено',
		},
	},

	medicine: {
		indicator: {
			ml: 'мл',
		},
		types: {
			[EnumMedicineType.pill]: 'Таблетки / Капсулы',
			[EnumMedicineType.liquid]: 'Настойка / Сироп',
			[EnumMedicineType.injection]: 'Укол',
			[EnumMedicineType.cream]: 'Крем / Мазь / Гель',
			[EnumMedicineType.drops]: 'Капли',
			[EnumMedicineType.candles]: 'Свечи',
			[EnumMedicineType.pencil]: 'Медицинский карандаш',
			[EnumMedicineType.powder]: 'Порошок',
			[EnumMedicineType.spray]: 'Аэрозоль / Спрей',
			[EnumMedicineType.bandage]: 'Пластырь',
		},
	},

	components: {
		btn: {
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
		removing: 'Удаление...',
	},

	modal: {
		removeMedicine: {
			title: 'Удалить лекарство',
			description:
				'Вы действительно хотите удалить это лекарство? Это действие является необратимым',
		},
	},

	notifications: {
		medicines: {
			add: 'Лекарство успешно добавлено',
			edit: 'Лекарство успешно обновлено',
			remove: 'Лекарство успешно удалено',
			removeAll: 'Все лекарства были успешно удалены',
			error: 'Что-то пошло не так. Мы работаем над этой проблемой',
		},
	},

	termsOfUse: {
		title: 'Условия Использования и Положения',
	},
}
