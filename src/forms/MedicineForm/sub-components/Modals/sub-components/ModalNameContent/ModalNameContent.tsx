import {
	Fragment,
	FC,
	memo,
	useRef,
	useMemo,
	useEffect,
	useContext,
	useCallback,
} from 'react'
import { TextInput, Pressable, PressableStateCallbackType } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Box, Input } from 'native-base'

import { isRTL } from '@app/utils'
import { Icon, Form } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'
import { IS_ANDROID, IS_IOS, MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

import { styles, TypeStyleProps } from './ModalNameContent.styles'

export const ModalNameContent: FC = memo(() => {
	const inputRef = useRef<TextInput>(null)

	const { t, i18n } = useTranslation()
	const { form, changeNameHandler, changeNameToEmptyHandler, closeNameModal } =
		useContext(MedicineFormContext)

	const isLanguageRTL = useMemo(() => isRTL(i18n.language), [i18n.language])

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isLanguageRTL,
		}),
		[isLanguageRTL],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

	const getPressableStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			style.action,
			pressed ? style.pressed : {},
		],
		[style],
	)

	useEffect(() => {
		if (IS_ANDROID) {
			setTimeout(() => {
				inputRef?.current?.focus()
			}, 100)
		}
	}, [])

	return (
		<Form.Wrapper>
			<Box style={style.inputWrapper}>
				<Input
					isFullWidth
					variant="unstyled"
					returnKeyType="done"
					textAlign={isLanguageRTL ? 'right' : 'left'}
					flexDirection={isLanguageRTL ? 'row-reverse' : 'row'}
					style={style.input}
					autoFocus={IS_IOS}
					ref={inputRef}
					value={form.name}
					onChangeText={changeNameHandler}
					maxLength={MEDICINE_MAX_LENGTH_OF_NAME}
					onSubmitEditing={closeNameModal}
					placeholder={t('component:input.placeholder.required')}
					leftElement={
						<Icon
							name={EnumIconName.text}
							color={EnumColor.darkGrey}
							size={20}
						/>
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
			</Box>
		</Form.Wrapper>
	)
})
