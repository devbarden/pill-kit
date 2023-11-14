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
import { useEndpoints } from '@app/hooks'

import { styles } from './RemoveAlert.styles'

export interface RemoveAlertHandlers {
	openModal: () => void
	closeModal: () => void
}

export const RemoveAlert = forwardRef<RemoveAlertHandlers, IAlertProps>(
	(props, ref) => {
		const { t } = useTranslation()
		const { useRemoveAllMedicines } = useEndpoints()
		const { mutateAsync: removeAllMedicines, isLoading: isRemoving } =
			useRemoveAllMedicines()

		const [isOpen, setIsOpen] = useState(false)

		const cancelRef = useRef(null)

		const openModal = useCallback(() => {
			setIsOpen(true)
		}, [])

		const closeModal = useCallback(() => {
			setIsOpen(false)
		}, [])

		const deleteHandler = useCallback(async () => {
			await removeAllMedicines()

			closeModal()
		}, [removeAllMedicines, closeModal])

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
				leastDestructiveRef={cancelRef}
				isOpen={isOpen}
				onClose={closeModal}
				style={styles.wrapper}
				{...props}>
				<AlertDialog.Content style={styles.modal}>
					<AlertDialog.CloseButton />
					<AlertDialog.Header>{t('removeDataAlert:title')}</AlertDialog.Header>
					<AlertDialog.Body>
						{t('removeDataAlert:description')}
					</AlertDialog.Body>
					<AlertDialog.Footer>
						<Button.Group space={2}>
							<Button
								variant="outline"
								colorScheme={COLORS.RED}
								disabled={isRemoving}
								onPress={closeModal}
								ref={cancelRef}>
								{t('components:btn.cancel')}
							</Button>
							<Button
								colorScheme={COLORS.RED}
								disabled={isRemoving}
								onPress={deleteHandler}>
								{t('components:btn.delete')}
							</Button>
						</Button.Group>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog>
		)
	},
)
