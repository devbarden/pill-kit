import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const hi: TypeLanguage = {
	welcome: {
		title: 'स्वागत!',
		agreement: 'मैंने पढ़ लिया एवं स्वीकार कर लिया है',
		continue: 'जारी रखना',

		modal: {
			validation: {
				title: 'ध्यान',
				description: 'आपको आवश्यक दस्तावेजों को पढ़ना और स्वीकार करना होगा',
			},
		},
	},

	home: {
		add: 'जोड़ना',
		empty: 'कोई सक्रिय या आगामी दवा का पता नहीं चला है।',
	},

	createMedicine: {
		title: 'बनाएं',
	},

	editMedicine: {
		title: 'संपादन करना',
		notFound: 'नहीं मिला',
		back: 'वापस जाओ',
		remove: 'निकालना',
	},

	analytic: {
		title: 'एनालिटिक्स',
		empty: 'कृपया अपना विश्लेषण देखने के लिए एक दवा जोड़ें',
		warning:
			'प्रगति ग्राफ प्रदर्शित करना संभव नहीं है क्योंकि इस समय सक्रिय दवाओं की संख्या 20 से अधिक है',

		progress: {
			title: 'प्रगति',
			label: 'सक्रिय औषधियाँ',
		},

		bar: {
			title: 'पिछले 5 वर्षों में ली गई दवाओं की संख्या',
		},

		pie: {
			title: 'विभिन्न प्रकार की औषधियों के प्रयोग का सूचक',
		},

		contribution: {
			title: 'पिछले 2 महीनों में दवाओं के उपयोग की गतिविधि',
		},
	},

	history: {
		title: 'इतिहास',
		empty: 'कोई दवा नहीं मिली',

		filters: {
			title: 'फिल्टर',

			items: {
				[EnumCardFilter.active]: 'सक्रिय',
				[EnumCardFilter.future]: 'भविष्य',
				[EnumCardFilter.past]: 'अतीत',
			},
		},

		sort: {
			button: 'क्रम से लगाना',
			medicines: 'दवाइयाँ',

			modal: {
				title: 'इसके अनुसार क्रमबद्ध करें',
				apply: 'आवेदन करना',
			},

			types: {
				name: 'नाम',
				startDate: 'आरंभ करने की तिथि',
				endDate: 'अंतिम तिथि',
			},
		},
	},

	settings: {
		title: 'समायोजन',

		field: {
			language: 'भाषा',
			contact: 'संपर्क',
			clearAllData: 'सभी डेटा साफ़ करें',
			terms: 'नियम और शर्तें',
		},

		modal: {
			clearAllData: {
				title: 'सभी डेटा साफ़ करें',
				description: 'क्या आप सचमुच सारा डेटा हटाना चाहते हैं?',
			},
		},
	},

	medicine: {
		field: {
			name: 'नाम',
			type: 'प्रकार',
			countPerUse: 'खुराक',
			countPerDay: 'प्रति दिन कितने?',
			startDate: 'आरंभ करने की तिथि',
			endDate: 'अंतिम तिथि',
			notification: 'अधिसूचना',
			times: 'अनुस्मारक',
			color: 'रंग',
		},

		modal: {
			validation: {
				title: 'कुछ फ़ील्ड भरे नहीं गए हैं',
				description: 'कृपया अगले फ़ील्ड भरें:',
			},

			remove: {
				title: 'दवा हटाओ',
				description: 'क्या आप सचमुच इस दवा को हटाना चाहते हैं?',
			},
		},

		warning: {
			past: 'अतीत में समय सीमा.',
			future: 'भविष्य में समय सीमा',
		},

		indicator: {
			ml: 'मिलिलिटर्स',
		},

		types: {
			[EnumMedicineType.pill]: 'गोलियां / कैप्सूल',
			[EnumMedicineType.liquid]: 'टिंचर / सिरप / तरल',
			[EnumMedicineType.injection]: 'इंजेक्शन',
			[EnumMedicineType.cream]: 'क्रीम / मरहम / जेल',
			[EnumMedicineType.drops]: 'बूँदें',
			[EnumMedicineType.candles]: 'मोमबत्तियाँ',
			[EnumMedicineType.pencil]: 'मेडिकल पेंसिल',
			[EnumMedicineType.powder]: 'पाउडर',
			[EnumMedicineType.spray]: 'एरोसोल / स्प्रे',
			[EnumMedicineType.bandage]: 'बैंड-सहायता',
		},
	},

	terms: {
		title: 'नियम और शर्तें',
	},

	card: {
		date: {
			till: 'तक',
			from: 'से',
		},

		label: {
			active: 'सक्रिय',
			future: 'आगामी',
			past: 'पुरा होना।',
		},
	},

	component: {
		button: {
			ok: 'ठीक है',
			add: 'जोड़ना',
			save: 'बचाना',
			back: 'पीछे',
			cancel: 'रद्द करना',
			delete: 'मिटाना',
			close: 'बंद करना',
		},

		input: {
			placeholder: {
				required: 'आवश्यक',
				optional: 'वैकल्पिक',
				search: 'खोज',
			},
		},
	},

	actions: {
		loading: 'लोड हो रहा है...',
		removing: 'हटाया जा रहा है...',
		updating: 'अद्यतन किया जा रहा है...',
		uploading: 'अपलोड हो रहा है...',
	},

	notification: {
		medicine: {
			add: 'दवा सफलतापूर्वक जोड़ दी गई',
			edit: 'दवा सफलतापूर्वक अद्यतन की गई',
			remove: 'दवा सफलतापूर्वक हटा दी गई',
			removeAll: 'सभी दवाएँ सफलतापूर्वक हटा दी गई हैं',
			error: 'कुछ गलत हो गया।',
		},
	},

	error: {
		title: 'कुछ टूट गया है.',
		reset: 'त्रुटि रीसेट करें',
	},
}
