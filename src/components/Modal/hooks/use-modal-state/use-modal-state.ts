import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { delay } from '@app/utils'
import { EnumModalType } from '@app/enums'
import { TypeModalContextProps, TypeModalProps } from '@app/types'

export const useModalState = (props: TypeModalProps): TypeModalContextProps => {
	const { t } = useTranslation()
	const {
		type = EnumModalType.default,
		title,
		content,
		submit,
		onClose,
		closeText,
		closeWaitMs = 0,
		isFullScreen = false,
		withContentScroll = false,
		isPossibleCloseOutside = true,
		withGreyBackgroundColor = false,
	} = useMemo(() => props, [props])

	const [isVisible, setIsVisible] = useState(false)
	const [isRequesting, setIsRequesting] = useState(false)

	const closeBtnText = useMemo(
		() => closeText ?? t('component:button.close'),
		[closeText, t],
	)

	const submitBtnText = useMemo(() => submit?.text || '', [submit])

	const open = useCallback(() => {
		setIsVisible(true)
	}, [])

	const close = useCallback(() => {
		if (!isPossibleCloseOutside || isRequesting) {
			return
		}

		setIsVisible(false)
	}, [isPossibleCloseOutside, isRequesting])

	const closeInside = useCallback(async () => {
		setIsVisible(false)

		if (onClose) {
			await delay(closeWaitMs)

			onClose()
		}
	}, [onClose, closeWaitMs])

	const onSubmit = useCallback(async () => {
		if (!submit?.handler) {
			return
		}

		setIsRequesting(true)

		await submit.handler()
		await closeInside()
		await delay(300)

		setIsRequesting(false)
	}, [submit, closeInside])

	return {
		type,
		title,
		content,
		submit,
		closeText,
		isFullScreen,
		withContentScroll,
		isPossibleCloseOutside,
		withGreyBackgroundColor,

		open,
		close,
		onSubmit,
		closeInside,

		isVisible,
		isRequesting,
		closeBtnText,
		submitBtnText,
	}
}
