import { FC, memo } from 'react'
import { Switch as BaseSwitch, ISwitchProps } from 'native-base'

import { COLORS } from '@app/constants'

export const Switch: FC<ISwitchProps> = memo((props) => (
	<BaseSwitch
		offTrackColor={COLORS.GREY}
		onTrackColor={COLORS.GREEN}
		{...props}
	/>
))
