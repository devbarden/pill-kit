import { FC, memo } from 'react'
import { Switch as BaseSwitch, ISwitchProps } from 'native-base'

import { EnumColor } from '@app/enums'

export const Switch: FC<ISwitchProps> = memo((props) => (
	<BaseSwitch
		offTrackColor={EnumColor.grey}
		onTrackColor={EnumColor.green}
		{...props}
	/>
))
