import {
	forwardRef,
	useCallback,
	useState,
	useRef,
	useImperativeHandle,
	useContext,
} from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'native-base'

import { Form, Switch } from '@app/components'
import { COLORS } from '@app/constants'

import { HistoryContext } from '../../context'

export interface FiltersModalHandlers {
	openModal: () => void
	closeModal: () => void
}

export const FiltersModal = forwardRef<FiltersModalHandlers>((props, ref) => {
	const initialRef = useRef(null)
	const finalRef = useRef(null)

	const { t } = useTranslation()
	const { filters, setFilters } = useContext(HistoryContext)

	const [isOpen, setIsOpen] = useState(false)

	const openModal = useCallback(() => {
		setIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	const toggleActiveFilter = useCallback(() => {
		setFilters((prev) => ({ ...prev, active: !prev.active }))
	}, [setFilters])

	const toggleFutureFilter = useCallback(() => {
		setFilters((prev) => ({ ...prev, future: !prev.future }))
	}, [setFilters])

	const togglePastFilter = useCallback(() => {
		setFilters((prev) => ({ ...prev, past: !prev.past }))
	}, [setFilters])

	useImperativeHandle(
		ref,
		() => ({
			openModal,
			closeModal,
		}),
		[openModal, closeModal],
	)

	return (
		<Modal
			size="lg"
			isOpen={isOpen}
			onClose={closeModal}
			initialFocusRef={initialRef}
			finalFocusRef={finalRef}>
			<Modal.Content>
				<Modal.CloseButton />
				<Modal.Header>{t('history:filters.title')}</Modal.Header>
				<Modal.Body style={{ backgroundColor: COLORS.GREY }}>
					<Form.Wrapper>
						<Form.Item name={t('history:filters.active')}>
							<Switch
								isChecked={filters.active}
								onToggle={toggleActiveFilter}
							/>
						</Form.Item>
						<Form.Separator />
						<Form.Item name={t('history:filters.future')}>
							<Switch
								isChecked={filters.future}
								onToggle={toggleFutureFilter}
							/>
						</Form.Item>
						<Form.Separator />
						<Form.Item name={t('history:filters.past')}>
							<Switch isChecked={filters.past} onToggle={togglePastFilter} />
						</Form.Item>
					</Form.Wrapper>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	)
})
