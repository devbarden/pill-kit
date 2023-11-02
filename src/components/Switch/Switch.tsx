import { FC, memo } from 'react'
import { Switch as BaseSwitch, ISwitchProps } from 'native-base'

import { colors } from '@app/constants'

export const Switch: FC<ISwitchProps> = memo((props) => (
	<BaseSwitch
		offTrackColor={colors.grey}
		onTrackColor={colors.green}
		{...props}
	/>
))
