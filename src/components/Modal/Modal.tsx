import BaseModal from 'react-native-modal'
import {
	ReactElement,
	forwardRef,
	useState,
	useMemo,
	useCallback,
	useImperativeHandle,
	Fragment,
} from 'react'
import { Box, Text } from 'native-base'
import {
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import { COLORS } from '@app/constants'

import { ScrollContent } from '../ScrollContent'
import { styles } from './Modal.styles'

export interface ModalHandlers {
	open: () => void
	close: () => void
}

interface Props {
	title: ReactElement | string
	content: ReactElement | ReactElement[] | string
	submit?: {
		text: string
		handler: () => void
		isLoading?: boolean
		isLoadingText?: ReactElement | string
	}
	closeText?: string
	onFullScreen?: boolean
	withContentScroll?: boolean
	isPossibleCloseOutside?: boolean
}

// TODO: fix blinking
export const Modal = forwardRef<ModalHandlers, Props>(
	(
		{
			title,
			content,
			submit,
			closeText,
			onFullScreen = false,
			withContentScroll = false,
			isPossibleCloseOutside = true,
		},
		ref,
	) => {
		const { t } = useTranslation()

		const [isVisible, setIsVisible] = useState(false)

		const closeBtnText = useMemo(
			() => closeText ?? t('components:btn.close'),
			[closeText, t],
		)

		const isSubmitLoadingInfoProvided = useMemo(
			() =>
				Boolean(submit) &&
				typeof submit?.isLoading === 'boolean' &&
				Boolean(submit.isLoadingText),
			[submit],
		)

		const submitBtnText = useMemo(
			() =>
				isSubmitLoadingInfoProvided && submit?.isLoading
					? submit?.isLoadingText
					: submit?.text,
			[submit, isSubmitLoadingInfoProvided],
		)

		const open = useCallback(() => {
			setIsVisible(true)
		}, [])

		const close = useCallback(() => {
			if (!isPossibleCloseOutside) {
				return
			}

			setIsVisible(false)
		}, [isPossibleCloseOutside])

		const onSubmit = useCallback(async () => {
			if (!submit?.handler) {
				return
			}

			await submit.handler()

			close()
		}, [submit, close])

		useImperativeHandle(
			ref,
			(): ModalHandlers => ({
				open,
				close,
			}),
			[open, close],
		)

		return (
			<BaseModal isVisible={isVisible}>
				<Pressable style={styles.overlay} onPressOut={close}>
					<TouchableWithoutFeedback>
						<Box
							style={[
								styles.wrapper,
								{
									flex: onFullScreen ? 1 : 0,
									marginTop: onFullScreen ? 80 : 0,
									marginBottom: onFullScreen ? 66 : 0,
									maxHeight: onFullScreen ? '100%' : '50%',
								},
							]}>
							<Box style={styles.title}>
								<Text
									fontSize="lg"
									textAlign="center"
									fontWeight="bold"
									numberOfLines={2}
									color={COLORS.BLACK}>
									{title}
								</Text>
							</Box>
							{withContentScroll ? (
								<ScrollContent>
									<TouchableOpacity activeOpacity={1}>
										<Box
											style={[styles.content, { flex: onFullScreen ? 1 : 0 }]}>
											{content}
										</Box>
									</TouchableOpacity>
								</ScrollContent>
							) : (
								<Box
									style={[
										styles.content,
										{ flex: onFullScreen ? 1 : 0, paddingVertical: 16 },
									]}>
									{content}
								</Box>
							)}
							<Box style={styles.actions}>
								<Pressable
									onPress={close}
									style={({ pressed }) => [
										styles.action,
										styles.bottomLeftRadius,
										!submit ? styles.bottomRightRadius : {},
										{
											backgroundColor: pressed
												? COLORS.TRANSPARENT_GREY
												: COLORS.GREY,
										},
									]}>
									<Text fontSize="md" textAlign="center" color={COLORS.RED}>
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
											style={({ pressed }) => [
												styles.action,
												styles.bottomRightRadius,
												{
													backgroundColor: pressed
														? COLORS.TRANSPARENT_GREY
														: COLORS.GREY,
												},
											]}>
											<Text
												fontSize="md"
												textAlign="center"
												fontWeight="bold"
												color={COLORS.RED}>
												{submitBtnText}
											</Text>
										</Pressable>
									</Fragment>
								)}
							</Box>
						</Box>
					</TouchableWithoutFeedback>
				</Pressable>
			</BaseModal>
		)
	},
)
