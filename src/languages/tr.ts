import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const tr: TypeLanguage = {
	welcome: {
		title: 'Hoş geldin!',
		agreement: 'okudum ve kabul ediyorum',
		continue: 'Devam etmek',

		modal: {
			validation: {
				title: 'Dikkat',
				description: 'Gerekli belgeleri okuyup kabul etmeniz gerekiyor',
			},
		},
	},

	home: {
		add: 'Eklemek',
		empty: 'Aktif veya gelecek ilaç tespit edilmedi.',
	},

	createMedicine: {
		title: 'Yaratmak',
	},

	editMedicine: {
		title: 'Düzenlemek',
		notFound: 'Bulunamadı',
		back: 'Geri gitmek',
		remove: 'Kaldırmak',
	},

	analytic: {
		title: 'Analitik',
		empty: 'Analitiklerinizi görmek için lütfen bir ilaç ekleyin',
		warning:
			"Şu anda aktif ilaç sayısı 20'nin üzerinde olduğu için ilerleme grafiği görüntülemek mümkün değil.",

		progress: {
			title: 'İlerlemek',
			label: 'Aktif ilaçlar',
		},

		bar: {
			title: 'Son 5 yılda kullanılan ilaç sayısı',
		},

		pie: {
			title: 'Farklı ilaç türlerinin kullanımının göstergesi',
		},

		contribution: {
			title: 'Son 2 aydaki ilaç kullanım aktivitesi',
		},
	},

	history: {
		title: 'Tarih',
		empty: 'İlaç bulunamadı',

		filters: {
			title: 'Filtreler',

			items: {
				[EnumCardFilter.active]: 'Etkin',
				[EnumCardFilter.future]: 'Gelecek',
				[EnumCardFilter.past]: 'Geçmiş',
			},
		},

		sort: {
			button: 'Düzenlemek',
			medicines: 'İlaçlar',

			modal: {
				title: 'Göre sırala',
				apply: 'Uygula',
			},

			types: {
				name: 'İsim',
				startDate: 'Başlangıç ​​tarihi',
				endDate: 'Bitiş tarihi',
			},
		},
	},

	settings: {
		title: 'Ayarlar',

		field: {
			language: 'Dil',
			contact: 'Temas etmek',
			clearAllData: 'Tüm verileri temizle',
			terms: 'Şartlar ve koşullar',
		},

		modal: {
			clearAllData: {
				title: 'Tüm Verileri Temizle',
				description: 'Gerçekten tüm verileri silmek istiyor musunuz?',
			},
		},
	},

	medicine: {
		field: {
			name: 'İsim',
			type: 'Tip',
			countPerUse: 'Doz',
			countPerDay: 'Günde kaç tane?',
			startDate: 'Başlangıç ​​tarihi',
			endDate: 'Bitiş tarihi',
			notification: 'Bildiri',
			times: 'Hatırlatıcılar',
			color: 'Renk',
		},

		modal: {
			validation: {
				title: 'Bazı alanlar doldurulmadı',
				description: 'Lütfen sonraki alanları doldurun:',
			},

			remove: {
				title: 'İlacı kaldır',
				description: 'Bu ilacı gerçekten silmek istiyor musunuz?',
			},
		},

		warning: {
			past: 'Geçmişteki zaman aralığı.',
			future: 'Gelecekteki zaman aralığı',
		},

		indicator: {
			ml: 'ml',
		},

		types: {
			[EnumMedicineType.pill]: 'Haplar / Kapsüller',
			[EnumMedicineType.liquid]: 'Tentür / Şurup / Sıvı',
			[EnumMedicineType.injection]: 'Enjeksiyon',
			[EnumMedicineType.cream]: 'Krem / Merhem / Jel',
			[EnumMedicineType.drops]: 'Damlalar',
			[EnumMedicineType.candles]: 'Mumlar',
			[EnumMedicineType.pencil]: 'Tıbbi Kalem',
			[EnumMedicineType.powder]: 'Toz',
			[EnumMedicineType.spray]: 'Aerosoller / Spreyler',
			[EnumMedicineType.bandage]: 'Yara bandı',
		},
	},

	terms: {
		title: 'Şartlar ve koşullar',
	},

	card: {
		date: {
			till: 'Tarihine kadar',
			from: 'Tarihinden itibaren',
		},

		label: {
			active: 'Aktif',
			future: 'Yaklaşan',
			past: 'Tamamlanmış',
		},
	},

	component: {
		button: {
			ok: 'TAMAM',
			add: 'Eklemek',
			save: 'Kaydetmek',
			back: 'Geri',
			cancel: 'İptal etmek',
			delete: 'Silmek',
			close: 'Kapalı',
		},

		input: {
			placeholder: {
				required: 'Gerekli',
				optional: 'İsteğe bağlı',
				search: 'Aramak',
			},
		},
	},

	actions: {
		loading: 'Yükleniyor...',
		removing: 'Kaldırılıyor...',
		updating: 'Güncelleniyor...',
		uploading: 'Yükleniyor...',
	},

	notification: {
		medicine: {
			add: 'İlaç başarıyla eklendi',
			edit: 'İlaç başarıyla güncellendi',
			remove: 'İlaç başarıyla kaldırıldı',
			removeAll: 'Tüm ilaçlar başarıyla kaldırıldı',
			error: 'Bir şeyler yanlış gitti.',
		},
	},

	error: {
		title: 'Bir şey bozuldu.',
		reset: 'Hatayı sıfırla',
	},
}
