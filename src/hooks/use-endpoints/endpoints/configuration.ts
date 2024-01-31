import { useMemo, useCallback } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '@app/api'
import { TypeConfiguration } from '@app/types'

export const useConfigurationEndpoints = () => {
	const queryClient = useQueryClient()
	const mainQueryKey = useMemo(() => ['configuration'], [])

	const invalidateConfiguration = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: mainQueryKey })
	}, [queryClient, mainQueryKey])

	return {
		useInitConfiguration: () =>
			useQuery({
				queryKey: ['init-configuration'],
				queryFn: api.initConfiguration,
			}),

		useConfiguration: () =>
			useQuery({
				queryKey: mainQueryKey,
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
