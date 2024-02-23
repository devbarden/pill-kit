import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {
	Fragment,
	FC,
	memo,
	useRef,
	useMemo,
	useState,
	useCallback,
} from 'react'
import { Box, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Linking, Pressable, PressableStateCallbackType } from 'react-native'

import { Modal } from '@app/components'
import { Logo, PillKit } from '@app/svg'
import { EnumStackRoute } from '@app/enums'
import { TypeModalHandlers } from '@app/types'
import { TERMS_OF_USE_LINK } from '@app/constants'

import { styles } from './Content.styles'
import { useGlobalContext } from '@app/hooks'

export const Content: FC = memo(() => {
	const modalValidationRef = useRef<TypeModalHandlers>(null)
	const modalNotificationRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const {
		isLocaleRTL,
		globalStyleProps,
		isUserAcceptAppDocs,
		setIsUserAcceptAppDocs,
	} = useGlobalContext()

	const [isChecked, setIsChecked] = useState(isUserAcceptAppDocs)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const getBtnStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			style.btn,
			{
				backgroundColor: pressed
					? globalStyleProps.style.color.transparent
					: globalStyleProps.style.color.main,
			},
		],
		[style, globalStyleProps],
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
						<Text
							textAlign="center"
							color={globalStyleProps.style.color.invert}>
							{t('welcome:title')}
						</Text>
					</Box>
				</Box>

				<Box style={style.agreement}>
					<BouncyCheckbox
						fillColor={globalStyleProps.style.color.main}
						unfillColor={globalStyleProps.style.color.primary}
						isChecked={isChecked}
						onPress={checkboxHandler}
						style={style.checkbox}
						textComponent={
							<Text
								textAlign={isLocaleRTL ? 'right' : 'left'}
								style={style.fullFlex}>
								<Text color={globalStyleProps.style.color.invert}>
									{t('welcome:agreement')}
								</Text>{' '}
								<Text style={style.link} onPress={openTermsHandler}>
									{t('terms:title')}
								</Text>
							</Text>
						}
					/>
				</Box>

				<Pressable style={getBtnStyles} onPress={continueHandler}>
					<Text numberOfLines={1} color={globalStyleProps.style.color.primary}>
						{t('welcome:continue')}
					</Text>
				</Pressable>
			</Box>

			<Modal
				title={t('welcome:modal.validation.title')}
				content={
					<Text color={globalStyleProps.style.color.invert}>
						{t('welcome:modal.validation.description')}
					</Text>
				}
				ref={modalValidationRef}
				closeText={t('component:button.ok')}
			/>

			<Modal
				title={t('welcome:modal.notification.title')}
				content={
					<Text color={globalStyleProps.style.color.invert}>
						{t('welcome:modal.notification.description')}
					</Text>
				}
				ref={modalNotificationRef}
				onClose={navigateToTabsHandler}
				closeWaitMs={250}
				closeText={t('component:button.ok')}
			/>
		</Fragment>
	)
})
