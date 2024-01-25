import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const ja: TypeLanguage = {
	welcome: {
		title: 'いらっしゃいませ！',
		agreement: '読んで同意します',
		continue: '続く',

		modal: {
			validation: {
				title: '注意',
				description: '必要な書類を読んで同意する必要があります',
			},

			notification: {
				title: '通知',
				description:
					'リマインダーを受け取るには、アプリに通知の送信を許可してください。そうしないと、薬を服用する時間をリマインドすることができなくなります。',
			},
		},
	},

	home: {
		add: '追加',
		empty: '有効な薬剤や今後発売予定の薬剤は検出されていません。',
	},

	createMedicine: {
		title: '作成する',
	},

	editMedicine: {
		title: '編集',
		notFound: '見つかりません',
		back: '戻る',
		remove: '取り除く',
	},

	analytic: {
		title: '分析',
		empty: '分析を確認するには薬を追加してください',
		warning:
			'現時点では有効な薬剤の数が 20 を超えているため、進捗グラフを表示することはできません。',

		progress: {
			title: '進捗',
			label: '有効な薬剤',
		},

		bar: {
			title: '過去5年間に服用した薬の数',
		},

		pie: {
			title: 'さまざまな種類の薬の使用の指標',
		},

		contribution: {
			title: '過去 2 か月間における医薬品の使用状況',
		},
	},

	history: {
		title: '歴史',
		empty: '薬は見つかりませんでした',

		filters: {
			title: 'フィルター',

			items: {
				[EnumCardFilter.active]: 'アクティブ',
				[EnumCardFilter.future]: '未来',
				[EnumCardFilter.past]: '過去',
			},
		},

		sort: {
			button: '選別',
			medicines: '薬',

			modal: {
				title: '並べ替え',
				apply: '適用する',
			},

			types: {
				name: '名前',
				startDate: '開始日',
				endDate: '終了日',
			},
		},
	},

	settings: {
		title: '設定',

		field: {
			language: '言語',
			contact: '接触',
			clearAllData: 'すべてのデータをクリア',
			terms: '利用規約',
		},

		modal: {
			clearAllData: {
				title: 'すべてのデータをクリア',
				description: '本当にすべてのデータを削除しますか?',
			},
		},
	},

	medicine: {
		field: {
			name: '名前',
			type: 'タイプ',
			countPerUse: '用量',
			countPerDay: '1日あたり何個ですか？',
			startDate: '開始日',
			endDate: '終了日',
			notification: '通知',
			times: 'リマインダー',
			color: '色',
		},

		modal: {
			validation: {
				title: '一部のフィールドが入力されていません',
				description: '次のフィールドに入力してください:',
			},

			remove: {
				title: '薬を取り除く',
				description: '本当にこの薬を削除してもよろしいですか?',
			},
		},

		warning: {
			past: '過去の時間範囲。',
			future: '未来の時間範囲',
		},

		indicator: {
			ml: 'ミリリットル',
		},

		types: {
			[EnumMedicineType.pill]: 'ピル/カプセル',
			[EnumMedicineType.liquid]: 'チンキ/シロップ/液体',
			[EnumMedicineType.injection]: '注射',
			[EnumMedicineType.cream]: 'クリーム/軟膏/ゲル',
			[EnumMedicineType.drops]: '滴',
			[EnumMedicineType.candles]: 'キャンドル',
			[EnumMedicineType.pencil]: '医療用鉛筆',
			[EnumMedicineType.powder]: '粉',
			[EnumMedicineType.spray]: 'エアロゾル/スプレー',
			[EnumMedicineType.bandage]: 'バンドエイド',
		},
	},

	terms: {
		title: '利用規約',
	},

	card: {
		date: {
			till: 'まで',
			from: 'から',
		},

		label: {
			active: 'アクティブ',
			future: '今後の予定',
			past: '完了',
		},
	},

	component: {
		button: {
			ok: 'わかりました',
			add: '追加',
			save: '保存',
			back: '戻る',
			cancel: 'キャンセル',
			delete: '消去',
			close: '近い',
		},

		input: {
			placeholder: {
				required: '必須',
				optional: 'オプション',
				search: '検索',
			},
		},
	},

	actions: {
		loading: '読み込み中...',
		removing: '削除中...',
		updating: '更新中...',
		uploading: 'アップロード中...',
	},

	notification: {
		medicine: {
			add: '薬は正常に追加されました',
			edit: '薬は正常に更新されました',
			remove: '薬は無事に除去されました',
			removeAll: 'すべての薬剤は正常に除去されました',
			error: '何か問題が発生しました。',
		},
	},

	error: {
		title: '何かが壊れています。',
		reset: 'リセットエラー',
	},
}
