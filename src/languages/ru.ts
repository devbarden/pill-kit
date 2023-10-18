import { Language } from '@app/types'

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

	components: {
		btn: {
			add: 'Добавить',
			save: 'Сохранить',
			cancel: 'Отменить',
			back: 'Вернуться',
		},

		input: {
			placeholder: 'Название лекарства',
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
