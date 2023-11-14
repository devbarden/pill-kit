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

	history: {
		filters: {
			title: 'Фильтры',
			active: 'Активные',
			future: 'Будущие',
			past: 'Прошлые',
		},
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
		termsOfUse: 'Условия Использования',
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

	removeDataAlert: {
		title: 'Удалить все данные',
		description:
			'Вы действительно хотите удалить все данные? Это действие является необратимым',
	},

	card: {
		date: {
			till: 'До',
			from: 'С',
			daily: 'Ежедневно',
		},
	},

	components: {
		btn: {
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
			removeAll: 'Все лекарства были успешно удалены',
			error: 'Что-то пошло не так. Мы работаем над этой проблемой',
		},
	},

	termsOfUse: {
		title: 'Условия использования',
		description: `What is Lorem Ipsum?
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
		when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
		and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
		The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
		making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
		and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
		sometimes by accident, sometimes on purpose (injected humour and the like).`,
	},
}
