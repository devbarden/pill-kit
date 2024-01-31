import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const ar: TypeLanguage = {
	reminders: {
		takeMedicine: `حان الوقت لتناول دوائك`,
	},

	welcome: {
		title: 'مرحبا! يرجى قراءة الوثائق التالية قبل استخدام التطبيق',
		agreement: 'لقد قرأت واستعرض',
		continue: 'يكمل',

		modal: {
			validation: {
				title: 'انتباه',
				description: 'تحتاج إلى قراءة وقبول المستندات المطلوبة',
			},

			notification: {
				title: 'إشعارات',
				description:
					'لتلقي التذكيرات، يرجى السماح للتطبيق بإرسال الإشعارات. وإلا، لن نتمكن من تذكيرك بموعد أخذ أدويتك',
			},
		},
	},

	home: {
		add: 'يضيف',
		empty:
			'لم يتم الكشف عن أي أدوية نشطة أو قادمة. يرجى إضافة دواء لمراقبة علاجك',
	},

	createMedicine: {
		title: 'يخلق',
	},

	editMedicine: {
		title: 'يحرر',
		notFound: 'غير معثور عليه',
		back: 'عُد',
		remove: 'يزيل',
	},

	analytic: {
		title: 'التحليلات',
		empty: 'الرجاء إضافة دواء لرؤية التحليلات الخاصة بك',
		warning:
			'لا يمكن عرض رسم بياني للتقدم لأن عدد الأدوية النشطة في الوقت الحالي يزيد عن عشرين',

		progress: {
			title: 'تقدم',
			label: 'الأدوية الفعالة',
		},

		bar: {
			title: 'عدد الأدوية التي تم تناولها في السنوات الخمس الماضية',
		},

		pie: {
			title: 'مؤشر استخدام أنواع مختلفة من الأدوية',
		},

		contribution: {
			title: 'نشاط استخدام الأدوية على مدى الشهرين الماضيين',
		},
	},

	history: {
		title: 'تاريخ',
		empty: 'لم يتم العثور على أدوية',

		filters: {
			title: 'المرشحات',

			items: {
				[EnumCardFilter.active]: 'نشط',
				[EnumCardFilter.future]: 'المستقبل',
				[EnumCardFilter.past]: 'الماضي',
			},
		},

		sort: {
			button: 'نوع',
			medicines: 'الأدوية',

			modal: {
				title: 'ترتيب حسب',
				apply: 'يتقدم',
			},

			types: {
				name: 'اسم',
				startDate: 'تاريخ البدء',
				endDate: 'تاريخ الانتهاء',
			},
		},
	},

	settings: {
		title: 'إعدادات',

		field: {
			language: 'لغة',
			contact: 'اتصال',
			clearAllData: 'مسح كافة البيانات',
			terms: 'الأحكام والشروط',
		},

		modal: {
			clearAllData: {
				title: 'مسح كافة البيانات',
				description: 'هل تريد حقًا حذف جميع البيانات؟ هذا الإجراء لا رجعة فيه',
			},
		},
	},

	medicine: {
		field: {
			name: 'اسم',
			type: 'يكتب',
			countPerUse: 'جرعة',
			countPerDay: 'كم في اليوم؟',
			startDate: 'تاريخ البدء',
			endDate: 'تاريخ الانتهاء',
			notification: 'إشعار',
			times: 'تذكيرات',
			color: 'لون',
		},

		modal: {
			validation: {
				title: 'بعض الحقول لم يتم ملؤها',
				description: 'يرجى ملء الحقول التالية:',
			},

			remove: {
				title: 'إزالة الدواء',
				description: 'هل تريد حقًا حذف هذا الدواء؟ هذا الإجراء لا رجعة فيه',
			},
		},

		warning: {
			past: 'النطاق الزمني في الماضي. لن ترى هذا الدواء على الشاشة الرئيسية',
			future: 'النطاق الزمني في المستقبل',
		},

		indicator: {
			ml: 'ملليلتر',
		},

		types: {
			[EnumMedicineType.pill]: 'حبوب / كبسولات',
			[EnumMedicineType.liquid]: 'صبغة / شراب / سائل',
			[EnumMedicineType.injection]: 'حقن',
			[EnumMedicineType.cream]: 'حقن',
			[EnumMedicineType.drops]: 'قطرات',
			[EnumMedicineType.candles]: 'الشموع',
			[EnumMedicineType.pencil]: 'قلم رصاص طبي',
			[EnumMedicineType.powder]: 'مسحوق',
			[EnumMedicineType.spray]: 'البخاخات / البخاخات',
			[EnumMedicineType.bandage]: 'إسعافات أولية',
		},
	},

	terms: {
		title: 'الأحكام والشروط',
	},

	card: {
		date: {
			till: 'حتى',
			from: 'من',
		},

		label: {
			active: 'نشيط',
			future: 'القادمة',
			past: 'مكتمل',
		},
	},

	component: {
		button: {
			ok: 'نعم',
			add: 'يضيف',
			save: 'يحفظ',
			back: 'خلف',
			cancel: 'يلغي',
			delete: 'يمسح',
			close: 'يغلق',
		},

		input: {
			placeholder: {
				required: 'مطلوب',
				optional: 'خياري',
				search: 'يبحث',
			},
		},
	},

	actions: {
		loading: 'تحميل...',
		removing: 'جارٍ الإزالة...',
		updating: 'جارٍ التحديث...',
		uploading: 'جارٍ التحميل...',
	},

	notification: {
		medicine: {
			add: 'تمت إضافة الدواء بنجاح',
			edit: 'تم تحديث الطب بنجاح',
			remove: 'تمت إزالة الدواء بنجاح',
			removeAll: 'تمت إزالة جميع الأدوية بنجاح',
			error: 'حدث خطأ ما. نحن نعمل على حل المشكلة',
		},
	},

	error: {
		title: 'هناك خلل ما. يرجى التواصل معنا عبر البريد الإلكتروني',
		reset: 'إعادة تعيين الخطأ',
	},
}
