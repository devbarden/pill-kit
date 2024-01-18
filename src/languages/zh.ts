import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const zh: TypeLanguage = {
	welcome: {
		title: '欢迎！ 在使用应用程序之前，请阅读以下文件',
		agreement: '我已阅读并接受',
		continue: '继续',

		modal: {
			validation: {
				title: '注意事项',
				description: '您需要阅读并接受所需的文件',
			},
		},
	},

	home: {
		add: '添加',
		empty: '没有发现活性或即将到来的药物。 请添加一种药物来监测您的治疗',
	},

	createMedicine: {
		title: '创建',
	},

	editMedicine: {
		title: '编辑',
		notFound: '未找到',
		back: '回去吧',
		remove: '移走',
	},

	analytic: {
		title: '分析法,分析法',
		empty: '请加药看看你的分析',
		warning: '无法显示进度图，因为目前活性药物的数量超过20',

		progress: {
			title: '进展情况',
			label: '活性药物',
		},

		bar: {
			title: '过去5年服用的药物数量',
		},

		pie: {
			title: '使用不同类型药物的指标',
		},

		contribution: {
			title: '过去两个月的药物使用活动',
		},
	},

	history: {
		title: '历史',
		empty: '没有发现药物',

		filters: {
			title: '过滤器',

			items: {
				[EnumCardFilter.active]: '活动中',
				[EnumCardFilter.future]: '未来',
				[EnumCardFilter.past]: '过去',
			},
		},

		sort: {
			button: '排序',
			medicines: '药物',

			modal: {
				title: '按顺序排序',
				apply: '申请',
			},

			types: {
				name: '姓名',
				startDate: '开始日期',
				endDate: '结束日期',
			},
		},
	},

	settings: {
		title: '设置',

		field: {
			language: '语言',
			contact: '联系我们',
			clearAllData: '清除所有数据',
			terms: '条款及细则',
		},

		modal: {
			clearAllData: {
				title: '清除所有数据',
				description: '你真的想删除所有的数据？ 这一行动是不可撤销的',
			},
		},
	},

	medicine: {
		field: {
			name: '姓名',
			type: '类型',
			countPerUse: '剂量',
			countPerDay: '每天有多少？',
			startDate: '开始日期',
			endDate: '结束日期',
			notification: '通知书',
			times: '提醒事项',
			color: '颜色',
		},

		modal: {
			validation: {
				title: '有些字段没有填写',
				description: '请填写下一栏:',
			},

			remove: {
				title: '取出药物',
				description: '你真的想删除这种药吗？ 这一行动是不可撤销的',
			},
		},

		warning: {
			past: '过去的时间范围。 你不会在主屏幕上看到这种药物',
			future: '未来的时间范围',
		},

		indicator: {
			ml: '毫升',
		},

		types: {
			[EnumMedicineType.pill]: '药丸/胶囊',
			[EnumMedicineType.liquid]: '酊剂/糖浆/液体',
			[EnumMedicineType.injection]: '注射剂',
			[EnumMedicineType.cream]: '乳膏/软膏/凝胶',
			[EnumMedicineType.drops]: '滴剂,滴剂',
			[EnumMedicineType.candles]: '蜡烛',
			[EnumMedicineType.pencil]: '医用铅笔',
			[EnumMedicineType.powder]: '粉剂,粉剂',
			[EnumMedicineType.spray]: '喷雾剂/喷雾剂',
			[EnumMedicineType.bandage]: '创可贴',
		},
	},

	terms: {
		title: '条款及细则',
	},

	card: {
		date: {
			till: '至',
			from: '从',
		},

		label: {
			active: '活动中',
			future: '即将到来',
			past: '已完成',
		},
	},

	component: {
		button: {
			ok: '好的',
			add: '添加',
			save: '储蓄',
			back: '返回',
			cancel: '取消',
			delete: '删除',
			close: '接近/接近',
		},

		input: {
			placeholder: {
				required: '需要',
				optional: '可选择的',
				search: '搜索',
			},
		},
	},

	actions: {
		loading: '装载量...',
		removing: '移走...',
		updating: '更新资料...',
		uploading: '上载...',
	},

	notification: {
		medicine: {
			add: '药添加成功',
			edit: '医学更新成功',
			remove: '药成功取出',
			removeAll: '所有药物都已成功移除',
			error: '出了点问题。 我们正在解决这个问题',
		},
	},

	error: {
		title: '有东西坏了。 请通过电子邮件与我们联系',
		reset: 'Reset error',
	},
}
