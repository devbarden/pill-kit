import { Language } from '@app/types'
import { MEDICINE_TYPE } from '@app/constants'

export const ru: Language = {
	main: {
		appTitle: 'Система Лекарств',
	},

	home: {
		addButton: 'Добавить',
		emptyInfo: 'Лекарства не найдены',
	},

	createMedicine: {
		title: 'Добавить новое лекарство',
	},

	editMedicine: {
		title: 'Редактировать лекарство',
		notFound: 'Лекарство не найдено',
		back: 'Вернуться назад',
	},

	settings: {
		title: 'Настройки',
	},

	settingsForm: {
		upgrade: 'Улучшить до версии PRO',
		donate: 'Пожертвовать',
		rate: 'Оценить приложение',
		language: 'Язык',
		contact: 'Связь с нами',
		clearData: 'Удалить все данные',
		termsOfUsage: 'Условия Использования',
		privacyPolicy: 'Политика Конфиденциальности',
	},

	medicineForm: {
		name: 'Название',
		type: 'Тип',
		count: 'Количество',
		perDay: 'Сколько в день',
		startDate: 'Начало приема',
		endDate: 'Конец приема',
		notification: 'Уведомления',
	},

	components: {
		btn: {
			add: 'Добавить',
			save: 'Сохранить',
			cancel: 'Отменить',
			back: 'Вернуться',
		},

		input: {
			placeholder: {
				required: 'Обязательно',
				optional: 'Необязательно',
			},
		},

		select: {
			items: {
				medicineTypes: {
					[MEDICINE_TYPE.PILL]: 'Таблетка',
					[MEDICINE_TYPE.CREAM]: 'Мазь',
				},
			},
		},
	},

	actions: {
		removing: 'Удаление...',
	},

	notifications: {
		medicines: {
			add: 'Лекарство успешно добавлено',
			edit: 'Лекарство успешно обновлено',
			remove: 'Лекарство успешно удалено',
			error: 'Что-то пошло не так. Мы работаем над этой проблемой',
		},
	},
}
