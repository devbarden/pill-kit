import { FC, Fragment, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { useGlobalContext } from '@app/hooks'
import { TypeMedicineFormProps } from '@app/types'
import { ScrollContent, ContentWrapper } from '@app/components'

import { useMedicineForm } from './hooks'
import { MedicineFormContext } from './context'
import { Modals, Header, Fields, Actions, Spinner } from './sub-components'

export const MedicineForm: FC<TypeMedicineFormProps> = memo((props) => {
	const state = useMedicineForm(props)

	const { isMedicineActionEnabled } = useGlobalContext()
	const { additionalActions } = useMemo(() => props, [props])

	const styleOpacity = useMemo(
		() => ({ flex: 1, opacity: !isMedicineActionEnabled ? 0.5 : 1 }),
		[isMedicineActionEnabled],
	)

	const pointerEvents = useMemo(
		() => (!isMedicineActionEnabled ? 'none' : 'auto'),
		[isMedicineActionEnabled],
	)

	return (
		<Fragment>
			{!isMedicineActionEnabled && <Spinner />}
			<Box pointerEvents={pointerEvents} style={styleOpacity}>
				<MedicineFormContext.Provider value={state}>
					<Modals />
					<Header />
					<ContentWrapper withHorizontalPaddings>
						<ScrollContent>
							<Fields />
							<Fragment>{additionalActions}</Fragment>
							<Actions />
						</ScrollContent>
					</ContentWrapper>
				</MedicineFormContext.Provider>
			</Box>
		</Fragment>
	)
})
