import { FC, memo } from 'react'
import { Pressable, Text } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'

import { Icon } from '@app/components'
import { getRandomInRange, uid } from '@app/utils'
import { EnumColor, EnumIconName } from '@app/enums'

import { AnimationWrapper } from './sub-components'

import { styles } from './ProLabel.styles'

type TypeProps = {
	handler: () => void
}

const positionsOfStars = [
	{
		left: 20,
		top: 2,
	},
	{
		left: 10,
		top: 24,
	},
	{
		left: 40,
		top: 15,
	},
	{
		left: 90,
		top: 4,
	},
	{
		left: 115,
		top: 10,
	},
	{
		left: 90,
		top: 26,
	},
	{
		left: 130,
		top: 25,
	},
	{
		left: 30,
		top: 30,
	},
]

export const ProLabel: FC<TypeProps> = memo(({ handler }) => (
	<Pressable onPress={handler} style={styles.wrapper}>
		<LinearGradient
			colors={[EnumColor.darkBlue, EnumColor.blue, EnumColor.black]}
			start={{ x: 0.4, y: 0 }}
			style={styles.gradient}>
			<Text style={styles.text}>PRO</Text>
			{positionsOfStars.map((position) => (
				<AnimationWrapper key={uid()} styles={[styles.star, position]}>
					<Icon
						name={EnumIconName.star}
						size={getRandomInRange(4, 8)}
						color={EnumColor.white}
					/>
				</AnimationWrapper>
			))}
		</LinearGradient>
	</Pressable>
))
