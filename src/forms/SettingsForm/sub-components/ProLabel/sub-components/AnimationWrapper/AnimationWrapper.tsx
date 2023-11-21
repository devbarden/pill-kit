import { FC, memo, useState, useMemo, useEffect, ReactElement } from 'react'
import { Animated, Easing, StyleProp, ViewStyle } from 'react-native'

import { getRandomInRange } from '@app/utils'

interface I_Props {
	children: ReactElement
	styles: StyleProp<ViewStyle>
}

export const AnimationWrapper: FC<I_Props> = memo(({ children, styles }) => {
	const [fadeAnimation] = useState(new Animated.Value(0))
	const [rotateAnimation] = useState(new Animated.Value(0))

	const fadeConfig = useMemo(
		() =>
			Animated.sequence([
				Animated.timing(fadeAnimation, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnimation, {
					toValue: 0,
					duration: 500,
					useNativeDriver: true,
				}),
			]),
		[fadeAnimation],
	)

	const rotationConfig = useMemo(
		() =>
			Animated.timing(rotateAnimation, {
				toValue: 1,
				duration: 1250,
				easing: Easing.linear,
				useNativeDriver: true,
			}),
		[rotateAnimation],
	)

	const timeToStart = useMemo(() => getRandomInRange(0, 10) * 100, [])

	useEffect(() => {
		setTimeout(() => {
			Animated.loop(Animated.parallel([fadeConfig, rotationConfig])).start()
		}, timeToStart)
	}, [fadeConfig, rotationConfig, timeToStart])

	return (
		<Animated.View
			style={[
				styles,
				{
					opacity: fadeAnimation,
					transform: [
						{
							rotate: rotateAnimation.interpolate({
								inputRange: [0, 1],
								outputRange: ['0deg', '360deg'],
							}),
						},
					],
				},
			]}>
			{children}
		</Animated.View>
	)
})
