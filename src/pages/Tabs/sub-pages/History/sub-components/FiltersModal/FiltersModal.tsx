import {
	forwardRef,
	useCallback,
	useState,
	useRef,
	useImperativeHandle,
	useContext,
	Fragment,
} from 'react'
import { entries } from 'lodash'
import { Modal } from 'native-base'
import { useTranslation } from 'react-i18next'

import { uid } from '@app/utils'
import { Form, Switch } from '@app/components'
import { COLORS, HISTORY_FILTER } from '@app/constants'

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

	const toggleFilter = useCallback(
		(filter: HISTORY_FILTER) => {
			setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }))
		},
		[setFilters],
	)

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
				<Modal.Header>{t('history:filtersTitle')}</Modal.Header>
				<Modal.Body style={{ backgroundColor: COLORS.GREY }}>
					<Form.Wrapper>
						{entries(filters).map(([filter, status]) => (
							<Fragment key={uid()}>
								<Form.Item name={t(`history:filters.${filter}`)}>
									<Switch
										isChecked={status}
										onToggle={() => toggleFilter(filter as HISTORY_FILTER)}
									/>
								</Form.Item>
								<Form.Separator />
							</Fragment>
						))}
					</Form.Wrapper>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	)
})
