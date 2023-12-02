import BaseModal from 'react-native-modal'
import { forwardRef, useMemo, useImperativeHandle } from 'react'

import { EnumModalType } from '@app/enums'
import { TypeModalProps, TypeModalHandlers } from '@app/xtypes'

import { useModalState } from './hooks'
import { ModalContext } from './context'
import { Default, Bottom } from './sub-components'

import { styles } from './Modal.styles'

const fadeAnimationConfig = {
	animationIn: 'fadeIn',
	animationOut: 'fadeOut',
	animationInTiming: 200,
	animationOutTiming: 200,
}

// TODO: fix blinking after closing modal
export const Modal = forwardRef<TypeModalHandlers, TypeModalProps>(
	(props, ref) => {
		const state = useModalState(props)

		const { type, open, close, isVisible } = useMemo(() => state, [state])
		const { component, style, config } = useMemo(() => {
			switch (type) {
				case EnumModalType.top:
					return {
						component: <Default />,
						style: styles.top,
						config: {
							...fadeAnimationConfig,
						},
					}

				case EnumModalType.bottom:
					return {
						component: <Bottom />,
						style: styles.bottom,
						config: {
							propagateSwipe: true,
							swipeDirection: ['down'],
							onSwipeComplete: close,
						},
					}

				default:
					return {
						component: <Default />,
						style: {},
						config: {
							...fadeAnimationConfig,
						},
					}
			}
		}, [close, type])

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
				{/* TODO: refactoring + remove ignore comment */}
				{/* @ts-ignore */}
				<BaseModal
					style={style}
					isVisible={isVisible}
					onBackdropPress={close}
					{...config}>
					{component}
				</BaseModal>
			</ModalContext.Provider>
		)
	},
)
