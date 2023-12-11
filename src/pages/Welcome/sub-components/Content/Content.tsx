import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {
	Fragment,
	FC,
	memo,
	useRef,
	useState,
	useContext,
	useCallback,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { Icon, Modal } from '@app/components'
import { TypeModalHandlers } from '@app/types'
import { GlobalStateContext } from '@app/context'
import { EnumColor, EnumIconName, EnumStackRoute } from '@app/enums'

import { CheckboxText } from './sub-components'

import { styles } from './Content.styles'

export const Content: FC = memo(() => {
	const modalValidationRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { isUserAcceptAppDocs, setIsUserAcceptAppDocs } =
		useContext(GlobalStateContext)

	const [isChecked, setIsChecked] = useState(isUserAcceptAppDocs)

	const getBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.btn,
			{ backgroundColor: pressed ? EnumColor.darkRed : EnumColor.red },
		],
		[],
	)

	const openValidationModal = useCallback(() => {
		modalValidationRef.current?.open()
	}, [])

	const checkboxHandler = useCallback((value: boolean) => {
		setIsChecked(value)
	}, [])

	const goHomeHandler = useCallback(async () => {
		if (!isChecked) {
			openValidationModal()

			return
		}

		await setIsUserAcceptAppDocs(isChecked)

		navigate(EnumStackRoute.tabs)
	}, [openValidationModal, isChecked, setIsUserAcceptAppDocs, navigate])

	return (
		<Fragment>
			<Box style={styles.wrapper}>
				<Box style={styles.logo}>
					<Icon name={EnumIconName.medicine} color={EnumColor.red} size={160} />
					<Text textAlign="center">{t('welcome:title')}</Text>
				</Box>

				<BouncyCheckbox
					fillColor={EnumColor.red}
					unfillColor={EnumColor.white}
					isChecked={isChecked}
					onPress={checkboxHandler}
					textComponent={<CheckboxText />}
				/>

				<Pressable style={getBtnStyles} onPress={goHomeHandler}>
					<Text numberOfLines={1} color={EnumColor.white}>
						{t('welcome:continue')}
					</Text>
				</Pressable>
			</Box>

			<Modal
				title={t('welcome:validation.title')}
				content={<Text>{t('welcome:validation.text')}</Text>}
				ref={modalValidationRef}
				closeText={t('components:btn.ok')}
			/>
		</Fragment>
	)
})
