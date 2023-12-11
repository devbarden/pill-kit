import { useCallback } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '@app/api'
import { TypeConfiguration } from '@app/types'

export const useConfigurationEndpoints = () => {
	const queryClient = useQueryClient()

	const invalidateConfiguration = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: ['configuration'] })
	}, [queryClient])

	return {
		useInitConfiguration: () =>
			useQuery({
				queryKey: ['init-configuration'],
				queryFn: api.initConfiguration,
			}),

		useConfiguration: () =>
			useQuery({
				queryKey: ['configuration'],
				queryFn: api.getConfiguration,
			}),

		useUpdateConfiguration: () =>
			useMutation({
				mutationFn: (data: TypeConfiguration) => api.setConfiguration(data),
				onSuccess: () => {
					invalidateConfiguration()
				},
			}),
	}
}
