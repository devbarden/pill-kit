import { ReactElement } from 'react'

import { EnumModalType } from '@app/enums'

export type TypeModalHandlers = {
	open: () => void
	close: () => void
}

export type TypeModalSubmitProps = {
	text: string
	handler: () => void

	isLoading?: boolean
	isLoadingText?: string
}

export type TypeModalProps = {
	title: ReactElement | string
	content: ReactElement | ReactElement[] | string

	type?: EnumModalType
	submit?: TypeModalSubmitProps
	closeText?: string
	onFullScreen?: boolean
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
