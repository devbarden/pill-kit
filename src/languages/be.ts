import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const be: TypeLanguage = {
	welcome: {
		title:
			'Сардэчна Запрашаем! Калі ласка, прачытайце наступныя дакументы перш чым пачаць карыстацца праграмай',
		agreement: 'Я прачытаў і прымаю',
		continue: 'Прадоўжыць',

		modal: {
			validation: {
				title: 'Увага',
				description: 'Вам неабходна прачытаць і прыняць неабходныя дакументы',
			},
		},
	},

	home: {
		add: 'Дабавіць',
		empty:
			'Не выяўлена актыўных або маючых адбыцца лякарстваў. Калі ласка, дадайце лекі для кантролю вашага лячэння',
	},

	createMedicine: {
		title: 'Дабавіць',
	},

	editMedicine: {
		title: 'Рэдагаваць',
		notFound: 'лякарства не знойдзена',
		back: 'Вярнуцца назад',
		remove: 'Выдаліць лякарства',
	},

	analytic: {
		title: 'Аналітыка',
		empty: 'Калі ласка, дадайце лекі каб убачыць сваю аналітыку',
		warning:
			'Немагчыма адлюстраваць графік прагрэсу, так як у дадзены момант колькасць актыўных лякарстваў больш за 20',

		progress: {
			title: 'Прагрэс',
			label: 'Актыўныя лекі',
		},

		bar: {
			title: 'Колькасць прынятых лякарстваў за апошнія 5 гадоў',
		},

		pie: {
			title: 'Паказчык выкарыстання розных відаў лякарстваў',
		},

		contribution: {
			title: 'Актыўнасць выкарыстання лякарстваў за апошнія 2 месяцы',
		},
	},

	history: {
		title: 'Гісторыя',
		empty: 'Лекі не знойдзены',

		filters: {
			title: 'Фільтр',
			items: {
				[EnumCardFilter.active]: 'Актыўны',
				[EnumCardFilter.future]: 'Будучы',
				[EnumCardFilter.past]: 'Мінулы',
			},
		},

		sort: {
			button: 'Сартаваць',
			medicines: 'Лекі',

			modal: {
				title: 'Сартаваць па',
				apply: 'Прымяніць',
			},

			types: {
				name: 'Назва',
				startDate: 'Пачатак прыёму',
				endDate: 'Канец прыёму',
			},
		},
	},

	settings: {
		title: 'Канфігурацыя',

		field: {
			language: 'Мова',
			contact: 'Сувязь з намі',
			clearAllData: 'Выдаліць усе дадзеныя',
			terms: 'Умовы выкарыстання і палажэнні',
		},

		modal: {
			clearAllData: {
				title: 'Выдаліць усе дадзеныя',
				description: `Вы сапраўды хочаце выдаліць усе дадзеныя? Гэта дзеянне з'яўляецца незваротным`,
			},
		},
	},

	medicine: {
		field: {
			name: 'Назва',
			type: 'Тып',
			countPerUse: 'Доза',
			countPerDay: 'Колькі ў дзень ?',
			startDate: 'Пачатак прыёму',
			endDate: 'Канец прыёму',
			notification: 'Паведамленне',
			times: 'Напаміны',
			color: 'Колер',
		},

		modal: {
			validation: {
				title: 'Некаторыя палі не запоўнены',
				description: 'Калі ласка, запоўніце наступныя палі:',
			},

			remove: {
				title: 'Выдаліць лякарства',
				description: `Вы сапраўды хочаце выдаліць дадзенае лякарства? Гэта дзеянне з'яўляецца незваротным`,
			},
		},

		warning: {
			past: 'Часовай дыяпазон у мінулым. Вы не ўбачыце гэтае лякарства на галоўным экране',
			future: 'Часовай дыяпазон у будучыні',
		},

		indicator: {
			ml: 'мл',
		},

		types: {
			[EnumMedicineType.pill]: 'Таблеткі / Капсулы',
			[EnumMedicineType.liquid]: 'Настойка / Сіроп',
			[EnumMedicineType.injection]: `Ін'екцыя`,
			[EnumMedicineType.cream]: 'Крэм / Мазь / Гель',
			[EnumMedicineType.drops]: 'Кроплі',
			[EnumMedicineType.candles]: 'Свечы',
			[EnumMedicineType.pencil]: 'Медыцынскі аловак',
			[EnumMedicineType.powder]: 'Парашок',
			[EnumMedicineType.spray]: 'Аэразоль / Спрэй',
			[EnumMedicineType.bandage]: 'Пластыр',
		},
	},

	terms: {
		title: 'Умовы выкарыстання і палажэнні',
	},

	card: {
		date: {
			till: 'Да',
			from: 'З',
		},

		label: {
			active: 'Актыўна',
			future: 'Чаканы',
			past: 'Завершаны',
		},
	},

	component: {
		button: {
			ok: 'Окей',
			add: 'Дабавіць',
			save: 'Захаваць',
			back: 'Вярнуцца',
			cancel: 'Адмяніць',
			delete: 'Выдаліць',
			close: 'Зачыніць',
		},

		input: {
			placeholder: {
				required: 'Абавязкова',
				optional: 'Неабавязкова',
				search: 'Пошук',
			},
		},
	},

	actions: {
		loading: 'Загрузка...',
		removing: 'Выдаленне...',
		updating: 'Абнаўленне...',
		uploading: 'Загрузка...',
	},

	notification: {
		medicine: {
			add: 'лякарства паспяхова дададзена',
			edit: 'лякарства паспяхова абноўлена',
			remove: 'лякарства паспяхова выдалена',
			removeAll: 'Усе лекі былі паспяхова выдалены',
			error: 'Нешта пайшло не так. Мы працуем над гэтай праблемай',
		},
	},

	error: {
		title: 'Нешта зламалася. Калі ласка, звяжыцеся з намі па электроннай пошце',
		reset: 'Скінуць памылку',
	},
}
