import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const ka: TypeLanguage = {
	welcome: {
		title:
			'კეთილი მოსვლა! გთხოვთ, წაიკითხოთ შემდეგი დოკუმენტები აპლიკაციის გამოყენებამდე',
		agreement: 'წავიკითხე და მივიღე',
		continue: 'განაგრძეთ',

		modal: {
			validation: {
				title: 'ყურადღება',
				description: 'თქვენ უნდა წაიკითხოთ და მიიღოთ საჭირო დოკუმენტები',
			},

			notification: {
				title: 'შეტყობინებები',
				description:
					'შეხსენებების მიღებისთვის, გთხოვთ, დართეთ აპლიკაციას შეტყობინებების გაგზავნა. თუ არა, ჩვენ ვერ გაგახსენებთ, როდის უნდა მიიღოთ თქვენი წამლები',
			},
		},
	},

	home: {
		add: 'დამატება',
		empty:
			'აქტიური ან მომავალი წამლები არ იყო აღმოჩენილი. გთხოვთ, დაამატოთ წამლის ტიპი თქვენი მკურნალობის კონტროლისთვის',
	},

	createMedicine: {
		title: 'Შექმნა',
	},

	editMedicine: {
		title: 'რედაქტირება',
		notFound: 'არ მოიძებნა',
		back: 'Დაბრუნდი',
		remove: 'ამოღება',
	},

	analytic: {
		title: 'ანალიტიკა',
		empty: 'გთხოვთ, დაამატოთ წამალი თქვენი ანალიტიკის სანახავად',
		warning:
			'პროგრესის გრაფიკის ჩვენება შეუძლებელია, რადგან ამ დროისთვის აქტიური მედიკამენტების რაოდენობა 20-ზე მეტია',

		progress: {
			title: 'პროგრესი',
			label: 'აქტიური მედიკამენტები',
		},

		bar: {
			title: 'ბოლო 5 წლის განმავლობაში მიღებული მედიკამენტების რაოდენობა',
		},

		pie: {
			title: 'სხვადასხვა სახის მედიკამენტების გამოყენების მაჩვენებელი',
		},

		contribution: {
			title: 'მედიკამენტების გამოყენების აქტივობა ბოლო 2 თვის განმავლობაში',
		},
	},

	history: {
		title: 'ისტორია',
		empty: 'მედიკამენტები არ არის ნაპოვნი',

		filters: {
			title: 'ფილტრები',

			items: {
				[EnumCardFilter.active]: 'აქტიური',
				[EnumCardFilter.future]: 'მომავალი',
				[EnumCardFilter.past]: 'წარსული',
			},
		},

		sort: {
			button: 'დალაგება',
			medicines: 'Წამლები',

			modal: {
				title: 'Დალაგება',
				apply: 'მიმართეთ',
			},

			types: {
				name: 'სახელი',
				startDate: 'Დაწყების თარიღი',
				endDate: 'Დასრულების თარიღი',
			},
		},
	},

	settings: {
		title: 'პარამეტრები',

		field: {
			language: 'Ენა',
			contact: 'კონტაქტი',
			clearAllData: 'ყველა მონაცემის გასუფთავება',
			terms: 'Ვადები და პირობები',
		},

		modal: {
			clearAllData: {
				title: 'ყველა მონაცემის გასუფთავება',
				description:
					'ნამდვილად გსურთ ყველა მონაცემის წაშლა? ეს ქმედება უკანასკნელია',
			},
		},
	},

	medicine: {
		field: {
			name: 'სახელი',
			type: 'ტიპი',
			countPerUse: 'დოზა',
			countPerDay: 'რამდენი დღეში?',
			startDate: 'Დაწყების თარიღი',
			endDate: 'Დასრულების თარიღი',
			notification: 'შეტყობინება',
			times: 'შეხსენებები',
			color: 'ფერი',
		},

		modal: {
			validation: {
				title: 'ზოგიერთი ველი არ არის შევსებული',
				description: 'გთხოვთ შეავსოთ შემდეგი ველები:',
			},

			remove: {
				title: 'წამალი ამოიღეთ',
				description: 'ნამდვილად გსურთ ამ წამლის წაშლა? ეს ქმედება უკანასკნელია',
			},
		},

		warning: {
			past: 'დროის დიაპაზონი წარსულშია. ეს წამლის ტიპი მთავარ ეკრანზე არ დაინახავთ',
			future: 'დროის დიაპაზონი მომავალში',
		},

		indicator: {
			ml: 'მილილიტრი',
		},

		types: {
			[EnumMedicineType.pill]: 'აბები / კაფსულები',
			[EnumMedicineType.liquid]: 'ნაყენი / სიროფი / სითხე',
			[EnumMedicineType.injection]: 'ინექცია',
			[EnumMedicineType.cream]: 'კრემი / მალამო / ლარი',
			[EnumMedicineType.drops]: 'წვეთები',
			[EnumMedicineType.candles]: 'სანთლები',
			[EnumMedicineType.pencil]: 'სამედიცინო ფანქარი',
			[EnumMedicineType.powder]: 'ფხვნილი',
			[EnumMedicineType.spray]: 'აეროზოლები / სპრეი',
			[EnumMedicineType.bandage]: 'ბენდის დახმარება',
		},
	},

	terms: {
		title: 'Ვადები და პირობები',
	},

	card: {
		date: {
			till: 'წლამდე',
			from: 'დან',
		},

		label: {
			active: 'აქტიური',
			future: 'მომავალი',
			past: 'დასრულებული',
		},
	},

	component: {
		button: {
			ok: 'კარგი',
			add: 'დამატება',
			save: 'Გადარჩენა',
			back: 'უკან',
			cancel: 'გაუქმება',
			delete: 'წაშლა',
			close: 'დახურვა',
		},

		input: {
			placeholder: {
				required: 'საჭირო',
				optional: 'სურვილისამებრ',
				search: 'ძიება',
			},
		},
	},

	actions: {
		loading: 'Ჩატვირთვა...',
		removing: 'მიმდინარეობს ამოღება...',
		updating: 'მიმდინარეობს განახლება...',
		uploading: 'მიმდინარეობს ატვირთვა...',
	},

	notification: {
		medicine: {
			add: 'მედიცინა წარმატებით დაემატა',
			edit: 'მედიცინა წარმატებით განახლდა',
			remove: 'წამალი წარმატებით იქნა ამოღებული',
			removeAll: 'ყველა წამალი წარმატებით იქნა ამოღებული',
			error: 'რაღაც არასწორად წარიმართა. პრობლემის გადაჭრის მუშაობას ვახდენთ',
		},
	},
	error: {
		title: 'რაღაც გაწყდა. გთხოვთ, დაგვიკავშირდით ელ.ფოსტით',
		reset: 'გადატვირთვის შეცდომა',
	},
}
