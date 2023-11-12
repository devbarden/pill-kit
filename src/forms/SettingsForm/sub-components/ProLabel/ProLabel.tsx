import { FC, memo } from 'react'
import { Pressable, Text } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

import { COLORS } from '@app/constants'
import { getRandomInRange, uid } from '@app/utils'

import { AnimationWrapper } from './sub-components'
import { styles } from './ProLabel.styles'

interface Props {
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

export const ProLabel: FC<Props> = memo(({ handler }) => (
	<Pressable onPress={handler} style={styles.wrapper}>
		<LinearGradient
			colors={[COLORS.DARK_BLUE, COLORS.BLUE, COLORS.BLACK]}
			start={{ x: 0.4, y: 0 }}
			style={styles.gradient}>
			<Text style={styles.text}>PRO</Text>
			{positionsOfStars.map((position) => (
				<AnimationWrapper key={uid()} styles={[styles.star, position]}>
					<AntDesign
						name="star"
						size={getRandomInRange(4, 8)}
						color={COLORS.WHITE}
					/>
				</AnimationWrapper>
			))}
		</LinearGradient>
	</Pressable>
))
