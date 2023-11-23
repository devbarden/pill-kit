import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'native-base'

import { Icon, Form } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'
import { MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

import { styles } from './ModalNameContent.styles'

export const ModalNameContent: FC = memo(() => {
	const { t } = useTranslation()
	const { form, changeNameHandler, changeNameToEmptyHandler } =
		useContext(MedicineFormContext)

	return (
		<Form.Wrapper>
			<Form.Input
				autoFocus
				value={form.name}
				onChangeText={changeNameHandler}
				maxLength={MEDICINE_MAX_LENGTH_OF_NAME}
				placeholder={t('components:input.placeholder.required')}
				leftElement={
					<Icon name={EnumIconName.text} color={EnumColor.darkGrey} size={20} />
				}
				rightElement={
					form.name ? (
						<Pressable onPress={changeNameToEmptyHandler} style={styles.action}>
							<Icon
								name={EnumIconName.clear}
								color={EnumColor.darkGrey}
								size={20}
							/>
						</Pressable>
					) : (
						<Fragment />
					)
				}
			/>
		</Form.Wrapper>
	)
})
