import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const bn: TypeLanguage = {
	welcome: {
		title: 'স্বাগত!',
		agreement: 'আমি পড়েছি এবং গ্রহণ করেছি',
		continue: 'চালিয়ে যান',

		modal: {
			validation: {
				title: 'মনোযোগ',
				description: 'আপনাকে প্রয়োজনীয় নথিগুলি পড়তে এবং গ্রহণ করতে হবে',
			},

			notification: {
				title: 'বিজ্ঞপ্তি',
				description:
					'অনুস্মারকগুলি পেতে, অনুগ্রহ করে অ্যাপটিকে বিজ্ঞপ্তি পাঠানোর অনুমতি দিন, অন্যথায়, আমরা আপনাকে কখন আপনার ওষুধ খেতে হবে তা মনে করিয়ে দিতে সক্ষম হব না।',
			},
		},
	},

	home: {
		add: 'যোগ করুন',
		empty: 'কোন সক্রিয় বা আসন্ন ঔষধ সনাক্ত করা হয়নি.',
	},

	createMedicine: {
		title: 'সৃষ্টি',
	},

	editMedicine: {
		title: 'সম্পাদনা করুন',
		notFound: 'পাওয়া যায়নি',
		back: 'ফিরে যাও',
		remove: 'অপসারণ',
	},

	analytic: {
		title: 'বিশ্লেষণ',
		empty: 'আপনার বিশ্লেষণ দেখতে একটি ঔষধ যোগ করুন',
		warning:
			'অগ্রগতি গ্রাফ প্রদর্শন করা সম্ভব নয় কারণ এই মুহুর্তে সক্রিয় ওষুধের সংখ্যা বিশের বেশি',

		progress: {
			title: 'অগ্রগতি',
			label: 'সক্রিয় ওষুধ',
		},

		bar: {
			title: 'গত পাঁচ বছরে মাদকদ্রব্যের সংখ্যা',
		},

		pie: {
			title: 'বিভিন্ন ধরনের ওষুধ ব্যবহারের নির্দেশক',
		},

		contribution: {
			title: 'গত দুই মাস ধরে ওষুধ ব্যবহারের কার্যকলাপ',
		},
	},

	history: {
		title: 'ইতিহাস',
		empty: 'কোনো ওষুধ পাওয়া যায়নি',

		filters: {
			title: 'ফিল্টার',

			items: {
				[EnumCardFilter.active]: 'সক্রিয়',
				[EnumCardFilter.future]: 'ভবিষ্যৎ',
				[EnumCardFilter.past]: 'অতীত',
			},
		},

		sort: {
			button: 'সাজান',
			medicines: 'ওষুধগুলো',

			modal: {
				title: 'ক্রমানুসার',
				apply: 'আবেদন করুন',
			},

			types: {
				name: 'নাম',
				startDate: 'শুরুর তারিখ',
				endDate: 'শেষ তারিখ',
			},
		},
	},

	settings: {
		title: 'সেটিংস',

		field: {
			language: 'ভাষা',
			contact: 'যোগাযোগ',
			clearAllData: 'সমস্ত ডেটা সাফ করুন',
			terms: 'শর্তাবলী',
		},

		modal: {
			clearAllData: {
				title: 'সমস্ত ডেটা সাফ করুন',
				description: 'আপনি কি সত্যিই সমস্ত ডেটা মুছে ফেলতে চান?',
			},
		},
	},

	medicine: {
		field: {
			name: 'নাম',
			type: 'টাইপ',
			countPerUse: 'ডোজ',
			countPerDay: 'প্রতিদিন কত?',
			startDate: 'শুরুর তারিখ',
			endDate: 'শেষ তারিখ',
			notification: 'বিজ্ঞপ্তি',
			times: 'অনুস্মারক',
			color: 'রঙ',
		},

		modal: {
			validation: {
				title: 'কিছু ক্ষেত্র পূরণ করা হয় না',
				description: 'অনুগ্রহ করে পরবর্তী ক্ষেত্রগুলি পূরণ করুন:',
			},

			remove: {
				title: 'ওষুধ সরান',
				description: 'আপনি কি সত্যিই এই ঔষধ মুছে ফেলতে চান?',
			},
		},

		warning: {
			past: 'অতীতের সময়সীমা। ',
			future: 'ভবিষ্যতের সময়সীমা',
		},

		indicator: {
			ml: 'মিলিলিটার',
		},

		types: {
			[EnumMedicineType.pill]: 'বড়ি / ক্যাপসুল',
			[EnumMedicineType.liquid]: 'টিংচার / সিরাপ / তরল',
			[EnumMedicineType.injection]: 'ইনজেকশন',
			[EnumMedicineType.cream]: 'ক্রিম / মলম / জেল',
			[EnumMedicineType.drops]: 'ড্রপ',
			[EnumMedicineType.candles]: 'মোমবাতি',
			[EnumMedicineType.pencil]: 'মেডিকেল পেন্সিল',
			[EnumMedicineType.powder]: 'গুঁড়া',
			[EnumMedicineType.spray]: 'অ্যারোসোল / স্প্রে',
			[EnumMedicineType.bandage]: 'ব্যান্ড-এইড',
		},
	},

	terms: {
		title: 'শর্তাবলী',
	},

	card: {
		date: {
			till: 'পর্যন্ত',
			from: 'থেকে',
		},

		label: {
			active: 'সক্রিয়',
			future: 'আসন্ন',
			past: 'সম্পন্ন',
		},
	},

	component: {
		button: {
			ok: 'ঠিক আছে',
			add: 'যোগ করুন',
			save: 'সংরক্ষণ',
			back: 'পেছনে',
			cancel: 'বাতিল করুন',
			delete: 'মুছে ফেলা',
			close: 'বন্ধ',
		},

		input: {
			placeholder: {
				required: 'প্রয়োজন',
				optional: 'ঐচ্ছিক',
				search: 'অনুসন্ধান করুন',
			},
		},
	},

	actions: {
		loading: 'লোড হচ্ছে...',
		removing: 'সরানো হচ্ছে...',
		updating: 'আপডেট হচ্ছে...',
		uploading: 'আপলোড হচ্ছে...',
	},

	notification: {
		medicine: {
			add: 'ঔষধ সফলভাবে যোগ করা হয়েছে',
			edit: 'ঔষধ সফলভাবে আপডেট করা হয়েছে',
			remove: 'ওষুধটি সফলভাবে অপসারণ করা হয়েছে',
			removeAll: 'সমস্ত ওষুধ সফলভাবে অপসারণ করা হয়েছে',
			error: 'কিছু ভুল হয়েছে.',
		},
	},

	error: {
		title: 'কিছু ভেঙ্গে গেছে ',
		reset: 'রিসেট ত্রুটি',
	},
}
