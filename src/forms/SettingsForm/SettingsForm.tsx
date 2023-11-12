import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MaterialIcons } from '@expo/vector-icons'

import { Form, ScrollContent } from '@app/components'
import { languageSelectItems } from '@app/utils'

import { COLORS, FORM_ICON_ACTION_MODES } from '@app/constants'

import { useSettingsForm } from './hooks'
import { RemoveAlert } from './sub-components'

export const SettingsForm: FC = memo(() => {
	const { t } = useTranslation()
	const {
		removeAlertRef,
		selectedLanguage,
		changeLanguageHandler,
		mailHandler,
		removeDataHandler,
	} = useSettingsForm()

	return (
		<ScrollContent>
			<RemoveAlert ref={removeAlertRef} />

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:upgrade')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.ARROW}
						handler={() => {}}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:donate')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.ARROW}
						handler={() => {}}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:rate')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.ARROW}
						handler={() => {}}
					/>
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
								color={COLORS.DARK_GREY}
							/>
						}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:contact')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.MAIL}
						handler={mailHandler}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:clearData')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.REMOVE}
						handler={removeDataHandler}
					/>
				</Form.Item>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:termsOfUsage')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.ARROW}
						handler={() => {}}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:privacyPolicy')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.ARROW}
						handler={() => {}}
					/>
				</Form.Item>
			</Form.Wrapper>
		</ScrollContent>
	)
})
