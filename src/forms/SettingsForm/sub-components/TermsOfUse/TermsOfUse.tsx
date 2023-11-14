import {
	forwardRef,
	useRef,
	useState,
	useCallback,
	useImperativeHandle,
} from 'react'
import { useTranslation } from 'react-i18next'
import { AlertDialog, Button, IAlertProps } from 'native-base'

import { COLORS } from '@app/constants'

import { styles } from './TermsOfUse.styles'

export interface TermsOfUseHandlers {
	openModal: () => void
	closeModal: () => void
}

// TODO: put the correct terms of use
export const TermsOfUse = forwardRef<TermsOfUseHandlers, IAlertProps>(
	(props, ref) => {
		const { t } = useTranslation()

		const [isOpen, setIsOpen] = useState(false)

		const cancelRef = useRef(null)

		const openModal = useCallback(() => {
			setIsOpen(true)
		}, [])

		const closeModal = useCallback(() => {
			setIsOpen(false)
		}, [])

		useImperativeHandle(
			ref,
			() => ({
				openModal,
				closeModal,
			}),
			[openModal, closeModal],
		)

		return (
			<AlertDialog
				size="xl"
				leastDestructiveRef={cancelRef}
				isOpen={isOpen}
				onClose={closeModal}
				style={styles.wrapper}
				{...props}>
				<AlertDialog.Content style={styles.modal}>
					<AlertDialog.CloseButton />
					<AlertDialog.Header>{t('termsOfUse:title')}</AlertDialog.Header>
					<AlertDialog.Body>{t('termsOfUse:description')}</AlertDialog.Body>
					<AlertDialog.Footer>
						<Button.Group space={2}>
							<Button
								variant="outline"
								colorScheme={COLORS.RED}
								onPress={closeModal}
								ref={cancelRef}>
								{t('components:btn.close')}
							</Button>
						</Button.Group>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog>
		)
	},
)
