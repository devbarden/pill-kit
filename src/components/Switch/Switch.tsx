import { FC, memo } from 'react'
import { Switch as BaseSwitch, ISwitchProps } from 'native-base'

import { EnumColor } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

export const Switch: FC<ISwitchProps> = memo((props) => {
	const { globalStyleProps } = useGlobalContext()

	return (
		<BaseSwitch
			offTrackColor={globalStyleProps.style.color.highlight}
			onTrackColor={EnumColor.green}
			{...props}
		/>
	)
})
