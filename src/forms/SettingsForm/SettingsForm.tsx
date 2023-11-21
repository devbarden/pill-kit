import { FC, memo } from 'react'
import { Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { MaterialIcons } from '@expo/vector-icons'

import { EnumColor, EnumFormIconActionMode } from '@app/enums'
import { useEndpoints } from '@app/hooks'
import { languageSelectItems } from '@app/utils'
import { Form, ScrollContent, Modal } from '@app/components'

import { useSettingsForm } from './hooks'
import { ProLabel } from './sub-components'

export const SettingsForm: FC = memo(() => {
	const { t } = useTranslation()
	const {
		removeAlertRef,
		termsOfUseRef,
		selectedLanguage,
		changeLanguageHandler,
		mailHandler,
		openRemoveDataModal,
		donateHandler,
		rateHandler,
		openTermsOfUseModal,
		upgradeHandler,
	} = useSettingsForm()
	const { useRemoveAllMedicines } = useEndpoints()
	const { mutateAsync: removeAllMedicines, isLoading: isRemoving } =
		useRemoveAllMedicines()

	return (
		<ScrollContent>
			<Modal
				title={t('removeDataAlert:title')}
				content={
					<Text color={EnumColor.darkGrey}>
						{t('removeDataAlert:description')}
					</Text>
				}
				closeText={t('components:btn.cancel')}
				submit={{
					text: t('components:btn.delete'),
					handler: removeAllMedicines,
					isLoading: isRemoving,
					isLoadingText: t('actions:removing'),
				}}
				ref={removeAlertRef}
			/>
			<Modal
				onFullScreen
				withContentScroll
				title={t('termsOfUse:title')}
				content={
					<Text color={EnumColor.darkGrey}>{t('termsOfUse:description')}</Text>
				}
				ref={termsOfUseRef}
			/>

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:upgrade')}>
					<ProLabel handler={upgradeHandler} />
				</Form.Item>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:language')}>
					<Form.Select
						items={languageSelectItems}
						selected={selectedLanguage}
						onSelect={changeLanguageHandler}
						dropdownIcon={
							<MaterialIcons
								name="language"
								size={24}
								color={EnumColor.darkGrey}
							/>
						}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:contact')}>
					<Form.IconAction
						mode={EnumFormIconActionMode.mail}
						handler={mailHandler}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:clearData')}>
					<Form.IconAction
						mode={EnumFormIconActionMode.remove}
						handler={openRemoveDataModal}
					/>
				</Form.Item>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:donate')}>
					<Form.IconAction
						mode={EnumFormIconActionMode.money}
						handler={donateHandler}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:rate')}>
					<Form.IconAction
						mode={EnumFormIconActionMode.star}
						handler={rateHandler}
					/>
				</Form.Item>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:termsOfUse')}>
					<Form.IconAction
						mode={EnumFormIconActionMode.arrow}
						handler={openTermsOfUseModal}
					/>
				</Form.Item>
			</Form.Wrapper>
		</ScrollContent>
	)
})
