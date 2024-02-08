import { useQuery } from '@tanstack/react-query'

import * as api from '@app/api'

export const useNotificationEndpoints = () => {
	return {
		useInitNotificationChannel: () =>
			useQuery({
				queryKey: ['init-notification-channel'],
				queryFn: api.initNotificationChannel,
			}),
	}
}
