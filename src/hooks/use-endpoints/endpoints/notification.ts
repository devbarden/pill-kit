import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'

import * as api from '@app/api'

export const useNotificationEndpoints = () => {
	const { t } = useTranslation()

	return {
		useUpdateNotificationsByLanguage: () =>
			useMutation({
				mutationFn: () =>
					api.updateMedicinesNotificationsByLanguage(
						t('reminders:takeMedicine'),
					),
			}),
	}
}
