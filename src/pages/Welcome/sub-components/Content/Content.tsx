import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {
	Fragment,
	FC,
	memo,
	useRef,
	useMemo,
	useState,
	useContext,
	useCallback,
} from 'react'
import { Box, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Linking, Pressable, PressableStateCallbackType } from 'react-native'

import { isRTL } from '@app/utils'
import { Modal } from '@app/components'
import { Logo, PillKit } from '@app/svg'
import { TypeModalHandlers } from '@app/types'
import { GlobalStateContext } from '@app/context'
import { TERMS_OF_USE_LINK } from '@app/constants'
import { EnumColor, EnumStackRoute } from '@app/enums'

import { styles, TypeStyleProps } from './Content.styles'

export const Content: FC = memo(() => {
	const modalValidationRef = useRef<TypeModalHandlers>(null)
	const modalNotificationRef = useRef<TypeModalHandlers>(null)

	const { t, i18n } = useTranslation()
	const { navigate } = useNavigation()
	const { isUserAcceptAppDocs, setIsUserAcceptAppDocs } =
		useContext(GlobalStateContext)

	const [isChecked, setIsChecked] = useState(isUserAcceptAppDocs)

	const isLanguageRTL = useMemo(() => isRTL(i18n.language), [i18n.language])

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isLanguageRTL,
		}),
		[isLanguageRTL],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

	const getBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			style.btn,
			{ backgroundColor: pressed ? EnumColor.darkRed : EnumColor.red },
		],
		[style],
	)

	const openValidationModal = useCallback(() => {
		modalValidationRef.current?.open()
	}, [])

	const openNotificationModal = useCallback(() => {
		modalNotificationRef.current?.open()
	}, [])

	const checkboxHandler = useCallback((value: boolean) => {
		setIsChecked(value)
	}, [])

	const openTermsHandler = useCallback(async () => {
		await Linking.openURL(TERMS_OF_USE_LINK)
	}, [])

	const continueHandler = useCallback(async () => {
		if (!isChecked) {
			openValidationModal()

			return
		}

		openNotificationModal()

		await setIsUserAcceptAppDocs(isChecked)
	}, [
		isChecked,
		openValidationModal,
		openNotificationModal,
		setIsUserAcceptAppDocs,
	])

	const navigateToTabsHandler = useCallback(() => {
		navigate(EnumStackRoute.tabs)
	}, [navigate])

	return (
		<Fragment>
			<Box style={style.wrapper}>
				<Box style={style.logo}>
					<Logo />
					<PillKit />

					<Box style={{ marginTop: 64 }}>
						<Text textAlign="center">{t('welcome:title')}</Text>
					</Box>
				</Box>

				<Box style={style.agreement}>
					<BouncyCheckbox
						fillColor={EnumColor.red}
						unfillColor={EnumColor.white}
						isChecked={isChecked}
						onPress={checkboxHandler}
						style={style.checkbox}
						textComponent={
							<Text
								textAlign={isLanguageRTL ? 'right' : 'left'}
								style={style.fullFlex}>
								<Text>{t('welcome:agreement')}</Text>{' '}
								<Text style={style.link} onPress={openTermsHandler}>
									{t('terms:title')}
								</Text>
							</Text>
						}
					/>
				</Box>

				<Pressable style={getBtnStyles} onPress={continueHandler}>
					<Text numberOfLines={1} color={EnumColor.white}>
						{t('welcome:continue')}
					</Text>
				</Pressable>
			</Box>

			<Modal
				title={t('welcome:modal.validation.title')}
				content={<Text>{t('welcome:modal.validation.description')}</Text>}
				ref={modalValidationRef}
				closeText={t('component:button.ok')}
			/>

			<Modal
				title={t('welcome:modal.notification.title')}
				content={<Text>{t('welcome:modal.notification.description')}</Text>}
				ref={modalNotificationRef}
				onClose={navigateToTabsHandler}
				closeWaitMs={250}
				closeText={t('component:button.ok')}
			/>
		</Fragment>
	)
})
