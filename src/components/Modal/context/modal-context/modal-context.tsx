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
		isLoading: false,
		isLoadingText: '',
	},

	closeText: '',
	onFullScreen: false,
	withContentScroll: false,
	isPossibleCloseOutside: true,

	open: () => {},
	close: () => {},
	onSubmit: () => {},
	closeInside: () => {},

	isVisible: false,
	closeBtnText: '',
	submitBtnText: '',
})
