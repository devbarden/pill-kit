import { FC, Fragment, memo, useContext, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Icon, Form } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'
import { MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

import { styles } from './ModalNameContent.styles'

export const ModalNameContent: FC = memo(() => {
	const { t } = useTranslation()
	const { form, changeNameHandler, changeNameToEmptyHandler, closeNameModal } =
		useContext(MedicineFormContext)

	const getPressableStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.action,
			pressed ? styles.pressed : {},
		],
		[],
	)

	return (
		<Form.Wrapper>
			<Form.Input
				autoFocus
				value={form.name}
				onChangeText={changeNameHandler}
				maxLength={MEDICINE_MAX_LENGTH_OF_NAME}
				onSubmitEditing={closeNameModal}
				returnKeyType="done"
				placeholder={t('component:input.placeholder.required')}
				leftElement={
					<Icon name={EnumIconName.text} color={EnumColor.darkGrey} size={20} />
				}
				rightElement={
					form.name ? (
						<Pressable
							onPress={changeNameToEmptyHandler}
							style={getPressableStyles}>
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
