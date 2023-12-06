import { FC, Fragment, memo, useCallback, useContext, useMemo } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumColor } from '@app/enums'

import { ModalContext } from '../../context'
import { ScrollContent } from '../../../ScrollContent'

import { styles } from './Default.styles'

export const Default: FC = memo(() => {
	const {
		title,
		submit,
		content,
		onFullScreen,
		withContentScroll,
		withGreyBackgroundColor,

		onSubmit,
		closeInside,

		closeBtnText,
		submitBtnText,
	} = useContext(ModalContext)

	const wrapperStyles = useMemo(
		() => [styles.wrapper, onFullScreen ? styles.fullScreen : {}],
		[onFullScreen],
	)

	const titleStyles = useMemo(
		() => [styles.title, styles.paddingVertical, styles.paddingHorizontal],
		[],
	)

	const contentStyles = useMemo(
		() => [
			styles.paddingHorizontal,
			onFullScreen ? styles.fullFlex : {},
			{
				backgroundColor: withGreyBackgroundColor
					? EnumColor.grey
					: EnumColor.white,
			},
		],
		[onFullScreen, withGreyBackgroundColor],
	)

	const getCloseBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.fullFlex,
			styles.paddingVertical,
			styles.paddingHorizontal,
			styles.bottomLeftRadius,
			submit ? {} : styles.bottomRightRadius,
			pressed ? styles.pressedBg : styles.defaultBg,
		],
		[submit],
	)

	const getSubmitBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.fullFlex,
			styles.paddingVertical,
			styles.paddingHorizontal,
			styles.bottomRightRadius,
			pressed ? styles.pressedBg : styles.defaultBg,
		],
		[],
	)

	return (
		<Box style={wrapperStyles}>
			<Box style={titleStyles}>
				<Text
					fontSize="lg"
					textAlign="center"
					fontWeight="bold"
					numberOfLines={2}
					color={EnumColor.black}>
					{title}
				</Text>
			</Box>

			{withContentScroll ? (
				<ScrollContent>
					<Box style={contentStyles}>{content}</Box>
				</ScrollContent>
			) : (
				<Box style={[contentStyles, styles.paddingVertical]}>{content}</Box>
			)}

			<Box style={styles.actions}>
				<Pressable onPress={closeInside} style={getCloseBtnStyles}>
					<Text fontSize="md" textAlign="center" color={EnumColor.red}>
						{closeBtnText}
					</Text>
				</Pressable>

				{submit && (
					<Fragment>
						<Box style={styles.separator} />

						<Pressable
							onPress={onSubmit}
							// TODO: implement disabled behavior
							// disabled={submit?.isLoading}
							style={getSubmitBtnStyles}>
							<Text
								fontSize="md"
								textAlign="center"
								fontWeight="bold"
								color={EnumColor.red}>
								{submitBtnText}
							</Text>
						</Pressable>
					</Fragment>
				)}
			</Box>
		</Box>
	)
})
