import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const pt: TypeLanguage = {
	welcome: {
		title: 'Bem-vindo! ',
		agreement: 'Eu li e aceito',
		continue: 'Continuar',

		modal: {
			validation: {
				title: 'Atenção',
				description: 'Você precisa ler e aceitar os documentos exigidos',
			},
		},
	},

	home: {
		add: 'Adicionar',
		empty: 'Nenhum medicamento ativo ou futuro foi detectado. ',
	},

	createMedicine: {
		title: 'Criar',
	},

	editMedicine: {
		title: 'Editar',
		notFound: 'Não encontrado',
		back: 'Volte',
		remove: 'Remover',
	},

	analytic: {
		title: 'Análise',
		empty: 'Adicione um medicamento para ver suas análises',
		warning:
			'Não é possível visualizar um gráfico de progresso porque neste momento o número de medicamentos activos é superior a 20',

		progress: {
			title: 'Progresso',
			label: 'Medicamentos ativos',
		},

		bar: {
			title: 'O número de medicamentos tomados nos últimos 5 anos',
		},

		pie: {
			title: 'O indicador do uso de diferentes tipos de medicamentos',
		},

		contribution: {
			title: 'A atividade de uso de medicamentos nos últimos 2 meses',
		},
	},

	history: {
		title: 'História',
		empty: 'Nenhum medicamento encontrado',

		filters: {
			title: 'Filtros',

			items: {
				[EnumCardFilter.active]: 'Activo',
				[EnumCardFilter.future]: 'Futuro',
				[EnumCardFilter.past]: 'Passado',
			},
		},

		sort: {
			button: 'Organizar',
			medicines: 'Medicação',

			modal: {
				title: 'Ordenar por',
				apply: 'Aplicar',
			},

			types: {
				name: 'Nome',
				startDate: 'Data de início',
				endDate: 'Data final',
			},
		},
	},

	settings: {
		title: 'Configurações',

		field: {
			language: 'Linguagem',
			contact: 'Contato',
			clearAllData: 'Limpar todos os dados',
			terms: 'Termos e Condições',
		},

		modal: {
			clearAllData: {
				title: 'Limpar todos os dados',
				description: 'Você realmente deseja excluir todos os dados? ',
			},
		},
	},

	medicine: {
		field: {
			name: 'Nome',
			type: 'Tipo',
			countPerUse: 'Dose',
			countPerDay: 'Quantos por dia?',
			startDate: 'Data de início',
			endDate: 'Data final',
			notification: 'Notificação',
			times: 'Lembretes',
			color: 'Cor',
		},

		modal: {
			validation: {
				title: 'Alguns campos não são preenchidos',
				description: 'Por favor preencha os próximos campos:',
			},

			remove: {
				title: 'Remover remédio',
				description: 'Você realmente deseja excluir este medicamento? ',
			},
		},

		warning: {
			past: 'O intervalo de tempo no passado. ',
			future: 'O intervalo de tempo no futuro',
		},

		indicator: {
			ml: 'ml',
		},

		types: {
			[EnumMedicineType.pill]: 'Comprimidos / Cápsulas',
			[EnumMedicineType.liquid]: 'Tintura / Xarope / Líquido',
			[EnumMedicineType.injection]: 'Injecção',
			[EnumMedicineType.cream]: 'Creme / Pomada / Gel',
			[EnumMedicineType.drops]: 'Gotas',
			[EnumMedicineType.candles]: 'Velas',
			[EnumMedicineType.pencil]: 'Lápis Médico',
			[EnumMedicineType.powder]: 'Pó',
			[EnumMedicineType.spray]: 'Aerossóis / Sprays',
			[EnumMedicineType.bandage]: 'Band-Aid',
		},
	},

	terms: {
		title: 'Termos e Condições',
	},

	card: {
		date: {
			till: 'Até',
			from: 'De',
		},

		label: {
			active: 'Ativo',
			future: 'Por vir',
			past: 'Concluído',
		},
	},

	component: {
		button: {
			ok: 'OK',
			add: 'Adicionar',
			save: 'Salvar',
			back: 'Voltar',
			cancel: 'Cancelar',
			delete: 'Excluir',
			close: 'Fechar',
		},

		input: {
			placeholder: {
				required: 'Obrigatório',
				optional: 'Opcional',
				search: 'Procurar',
			},
		},
	},

	actions: {
		loading: 'Carregando...',
		removing: 'Removendo...',
		updating: 'Atualizando...',
		uploading: 'Enviando...',
	},

	notification: {
		medicine: {
			add: 'O medicamento foi adicionado com sucesso',
			edit: 'O medicamento foi atualizado com sucesso',
			remove: 'O medicamento foi removido com sucesso',
			removeAll: 'Todos os medicamentos foram removidos com sucesso',
			error: 'Algo deu errado. ',
		},
	},

	error: {
		title: 'Algo está quebrado. ',
		reset: 'Erro de redefinição',
	},
}
