import { ReactElement } from 'react'

import { EnumModalType } from '@app/enums'

export type TypeModalHandlers = {
	open: () => void
	close: () => void
}

export type TypeModalSubmitProps = {
	text: string
	handler: () => void
}

export type TypeModalProps = {
	title: ReactElement | string
	content: ReactElement | ReactElement[] | string

	type?: EnumModalType
	submit?: TypeModalSubmitProps
	onClose?: () => void
	closeText?: string
	isFullScreen?: boolean
	withContentScroll?: boolean
	isPossibleCloseOutside?: boolean
	withGreyBackgroundColor?: boolean
}

export type TypeModalContextProps = TypeModalProps & {
	open: () => void
	close: () => void
	onSubmit: () => void
	closeInside: () => void

	isVisible: boolean
	closeBtnText: string
	submitBtnText: string
}
