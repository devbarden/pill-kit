import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { EnumModalType } from '@app/enums'
import { TypeModalContextProps, TypeModalProps } from '@app/typess'

export const useModalState = (props: TypeModalProps): TypeModalContextProps => {
	const { t } = useTranslation()
	const {
		type = EnumModalType.default,
		title,
		content,
		submit,
		closeText,
		onFullScreen = false,
		withContentScroll = false,
		isPossibleCloseOutside = true,
		withGreyBackgroundColor = false,
	} = useMemo(() => props, [props])

	const [isVisible, setIsVisible] = useState(false)

	const closeBtnText = useMemo(
		() => closeText ?? t('components:btn.close'),
		[closeText, t],
	)

	const isSubmitLoadingInfoProvided = useMemo(
		() =>
			Boolean(submit) &&
			typeof submit?.isLoading === 'boolean' &&
			Boolean(submit?.isLoadingText),
		[submit],
	)

	const submitBtnText = useMemo(
		() =>
			(isSubmitLoadingInfoProvided && submit?.isLoading
				? submit?.isLoadingText
				: submit?.text) || '',
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

	const closeInside = useCallback(() => {
		setIsVisible(false)
	}, [])

	const onSubmit = useCallback(async () => {
		if (!submit?.handler) {
			return
		}

		await submit.handler()

		closeInside()
	}, [submit, closeInside])

	return {
		type,
		title,
		content,
		submit,
		closeText,
		onFullScreen,
		withContentScroll,
		isPossibleCloseOutside,
		withGreyBackgroundColor,

		open,
		close,
		onSubmit,
		closeInside,

		isVisible,
		closeBtnText,
		submitBtnText,
	}
}
