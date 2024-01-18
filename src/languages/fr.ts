import { TypeLanguage } from '@app/types'
import { EnumCardFilter, EnumMedicineType } from '@app/enums'

export const fr: TypeLanguage = {
	welcome: {
		title: 'Accueillir!',
		agreement: "j'ai lu et accepté",
		continue: 'Continuer',

		modal: {
			validation: {
				title: 'Attention',
				description: 'Vous devez lire et accepter les documents requis',
			},
		},
	},

	home: {
		add: 'Ajouter',
		empty: 'Aucun médicament actif ou à venir n’a été détecté.',
	},

	createMedicine: {
		title: 'Créer',
	},

	editMedicine: {
		title: 'Modifier',
		notFound: 'Pas trouvé',
		back: 'Retourner',
		remove: 'Retirer',
	},

	analytic: {
		title: 'Analytique',
		empty: 'Veuillez ajouter un médicament pour voir vos analyses',
		warning:
			"Il n'est pas possible d'afficher un graphique de progression car actuellement le nombre de médicaments actifs est supérieur à 20.",

		progress: {
			title: 'Progrès',
			label: 'Médicaments actifs',
		},

		bar: {
			title: 'Le nombre de médicaments pris au cours des 5 dernières années',
		},

		pie: {
			title: "L'indicateur de l'utilisation de différents types de médicaments",
		},

		contribution: {
			title:
				"L'activité de consommation de médicaments au cours des 2 derniers mois",
		},
	},

	history: {
		title: 'Histoire',
		empty: 'Aucun médicament trouvé',

		filters: {
			title: 'Filtres',

			items: {
				[EnumCardFilter.active]: 'Actif',
				[EnumCardFilter.future]: 'Avenir',
				[EnumCardFilter.past]: 'Passé',
			},
		},

		sort: {
			button: 'Trier',
			medicines: 'Médicaments',

			modal: {
				title: 'Trier par',
				apply: 'Appliquer',
			},

			types: {
				name: 'Nom',
				startDate: 'Date de début',
				endDate: 'Date de fin',
			},
		},
	},

	settings: {
		title: 'Paramètres',

		field: {
			language: 'Langue',
			contact: 'Contact',
			clearAllData: 'Effacer toutes les données',
			terms: 'Termes et conditions',
		},

		modal: {
			clearAllData: {
				title: 'Effacer toutes les données',
				description: 'Voulez-vous vraiment supprimer toutes les données ?',
			},
		},
	},

	medicine: {
		field: {
			name: 'Nom',
			type: 'Taper',
			countPerUse: 'Dose',
			countPerDay: 'Combien par jour ?',
			startDate: 'Date de début',
			endDate: 'Date de fin',
			notification: 'Notification',
			times: 'Rappels',
			color: 'Couleur',
		},

		modal: {
			validation: {
				title: 'Certains champs ne sont pas renseignés',
				description: 'Veuillez remplir les champs suivants :',
			},

			remove: {
				title: 'Supprimer le médicament',
				description: 'Voulez-vous vraiment supprimer ce médicament ?',
			},
		},

		warning: {
			past: 'La plage horaire dans le passé.',
			future: 'La plage horaire dans le futur',
		},

		indicator: {
			ml: 'ml',
		},

		types: {
			[EnumMedicineType.pill]: 'Pilules / Capsules',
			[EnumMedicineType.liquid]: 'Teinture / Sirop / Liquide',
			[EnumMedicineType.injection]: 'Par Injection',
			[EnumMedicineType.cream]: 'Crème / Pommade / Gel',
			[EnumMedicineType.drops]: 'Gouttes',
			[EnumMedicineType.candles]: 'Bougies',
			[EnumMedicineType.pencil]: 'Crayon Médical',
			[EnumMedicineType.powder]: 'Poudre',
			[EnumMedicineType.spray]: 'Aérosols / Sprays',
			[EnumMedicineType.bandage]: 'Pansement',
		},
	},

	terms: {
		title: 'Termes et conditions',
	},

	card: {
		date: {
			till: "Jusqu'au",
			from: 'À partir du',
		},

		label: {
			active: 'Actif',
			future: 'A venir',
			past: 'Complété',
		},
	},

	component: {
		button: {
			ok: "D'ACCORD",
			add: 'Ajouter',
			save: 'Sauvegarder',
			back: 'Dos',
			cancel: 'Annuler',
			delete: 'Supprimer',
			close: 'Fermer',
		},

		input: {
			placeholder: {
				required: 'Requis',
				optional: 'Facultatif',
				search: 'Recherche',
			},
		},
	},

	actions: {
		loading: 'Chargement...',
		removing: 'Suppression...',
		updating: 'Mise à jour...',
		uploading: 'Téléchargement...',
	},

	notification: {
		medicine: {
			add: 'Le médicament a été ajouté avec succès',
			edit: 'Le médicament a été mis à jour avec succès',
			remove: 'Le médicament a été retiré avec succès',
			removeAll: 'Tous les médicaments ont été supprimés avec succès',
			error: "Quelque chose s'est mal passé. ",
		},
	},

	error: {
		title: 'Quelque chose est cassé.',
		reset: 'Erreur de réinitialisation',
	},
}
