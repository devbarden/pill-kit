import { Fragment, createContext } from 'react'

import { EnumModalType } from '@app/enums'
import { TypeModalContextProps } from '@app/types'

export const ModalContext = createContext<TypeModalContextProps>({
	title: '',
	content: <Fragment />,

	type: EnumModalType.default,
	submit: {
		text: '',
		handler: () => {},
	},
	onClose: () => {},

	closeText: '',
	isFullScreen: false,
	withContentScroll: false,
	isPossibleCloseOutside: true,
	withGreyBackgroundColor: false,

	open: () => {},
	close: () => {},
	onSubmit: () => {},
	closeInside: () => {},

	isVisible: false,
	isRequesting: false,
	closeBtnText: '',
	submitBtnText: '',
})
