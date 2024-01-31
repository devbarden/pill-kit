import * as Haptics from 'expo-haptics'
import { FC, Fragment, memo, useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumColor, EnumLanguageCode } from '@app/enums'

import { ModalContext } from '../../context'
import { ScrollContent } from '../../../ScrollContent'

import { styles, TypeStyleProps } from './Default.styles'

export const Default: FC = memo(() => {
	const { i18n } = useTranslation()
	const {
		title,
		submit,
		content,
		isFullScreen,
		withContentScroll,
		withGreyBackgroundColor,

		onSubmit,
		closeInside,

		closeBtnText,
		submitBtnText,
	} = useContext(ModalContext)

	const isArabic = useMemo(
		() => i18n.language === EnumLanguageCode.ar,
		[i18n.language],
	)

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isArabic,
		}),
		[isArabic],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

	const wrapperStyles = useMemo(
		() => [style.wrapper, isFullScreen ? style.fullScreen : {}],
		[style, isFullScreen],
	)

	const titleStyles = useMemo(
		() => [style.title, style.paddingVertical, style.paddingHorizontal],
		[style],
	)

	const contentStyles = useMemo(
		() => [
			style.paddingHorizontal,
			style.alignItemsByLocale,
			isFullScreen ? style.fullFlex : {},
			{
				backgroundColor: withGreyBackgroundColor
					? EnumColor.grey
					: EnumColor.white,
			},
		],
		[style, isFullScreen, withGreyBackgroundColor],
	)

	const getCommonBtnStyles = useCallback(
		(pressed: boolean) => [
			style.fullFlex,
			style.paddingVertical,
			style.paddingHorizontal,
			pressed ? style.pressedBg : style.defaultBg,
		],
		[style],
	)

	const getCloseBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			getCommonBtnStyles(pressed),
			style.bottomLeftRadius,
			submit ? {} : style.bottomRightRadius,
		],
		[getCommonBtnStyles, style, submit],
	)

	const getSubmitBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			getCommonBtnStyles(pressed),
			style.bottomRightRadius,
		],
		[getCommonBtnStyles, style],
	)

	const submitHandler = useCallback(() => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		onSubmit()
	}, [onSubmit])

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
				<Box style={[contentStyles, style.paddingVertical]}>{content}</Box>
			)}

			<Box style={style.actions}>
				<Pressable onPress={closeInside} style={getCloseBtnStyles}>
					<Text fontSize="md" textAlign="center" color={EnumColor.red}>
						{closeBtnText}
					</Text>
				</Pressable>

				{submit && (
					<Fragment>
						<Box style={style.separator} />

						<Pressable onPress={submitHandler} style={getSubmitBtnStyles}>
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
