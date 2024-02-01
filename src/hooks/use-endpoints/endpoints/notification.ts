import { useTranslation } from 'react-i18next'
import { useQuery, useMutation } from '@tanstack/react-query'

import * as api from '@app/api'

export const useNotificationEndpoints = () => {
	const { t } = useTranslation()

	return {
		useInitNotificationChannel: () =>
			useQuery({
				queryKey: ['init-notification-channel'],
				queryFn: api.initNotificationChannel,
			}),

		useUpdateNotificationsByLanguage: () =>
			useMutation({
				mutationFn: () =>
					api.updateMedicinesNotificationsByLanguage(
						t('reminders:takeMedicine'),
					),
			}),
	}
}
