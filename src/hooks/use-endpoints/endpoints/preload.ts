import { useQuery } from '@tanstack/react-query'

import * as api from '@app/api'

export const usePreloadEndpoints = () => {
	return {
		useInitFonts: () =>
			useQuery({
				queryKey: ['init-fonts'],
				queryFn: api.initFonts,
			}),
	}
}
