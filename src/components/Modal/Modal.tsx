import BaseModal, { ModalProps } from 'react-native-modal'
import { forwardRef, useMemo, useImperativeHandle } from 'react'

import { EnumModalType } from '@app/enums'
import { TypeModalProps, TypeModalHandlers } from '@app/types'

import { useModalState } from './hooks'
import { ModalContext } from './context'
import { Default, Bottom } from './sub-components'

import { styles } from './Modal.styles'

const fadeAnimationConfig = {
	animationIn: 'fadeIn',
	animationOut: 'fadeOut',
	animationInTiming: 300,
	animationOutTiming: 300,
}

const MODAL_SETTINGS_MAP = {
	[EnumModalType.top]: {
		component: <Default />,
		style: styles.top,
		config: {
			...fadeAnimationConfig,
		},
	},

	[EnumModalType.bottom]: {
		component: <Bottom />,
		style: styles.bottom,
		config: {
			propagateSwipe: true,
			swipeDirection: ['down'],
		},
	},

	[EnumModalType.default]: {
		component: <Default />,
		style: {},
		config: {
			...fadeAnimationConfig,
		},
	},
}

export const Modal = forwardRef<TypeModalHandlers, TypeModalProps>(
	(props, ref) => {
		const state = useModalState(props)

		const { type, open, close, isVisible } = useMemo(() => state, [state])
		const { component, style, config } = useMemo(
			() => MODAL_SETTINGS_MAP[type as EnumModalType],
			[type],
		)

		useImperativeHandle(
			ref,
			(): TypeModalHandlers => ({
				open,
				close,
			}),
			[open, close],
		)

		return (
			<ModalContext.Provider value={state}>
				<BaseModal
					{...(config as ModalProps)}
					backdropTransitionOutTiming={0}
					style={style}
					isVisible={isVisible}
					onBackdropPress={close}
					onSwipeComplete={close}>
					{component}
				</BaseModal>
			</ModalContext.Provider>
		)
	},
)
