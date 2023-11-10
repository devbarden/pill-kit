import { FC, memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { MaterialIcons } from '@expo/vector-icons'

import { Form, ScrollContent } from '@app/components'
import { getSelectedLanguage, languageSelectItems } from '@app/utils'

import { COLORS, FORM_ICON_ACTION_MODES } from '@app/constants'

export const SettingsForm: FC = memo(() => {
	const { t, i18n } = useTranslation()

	const selectedLanguage = useMemo(
		() => getSelectedLanguage(i18n.language),
		[i18n],
	)

	const changeLanguageHandler = useCallback(
		(language: string) => {
			i18n.changeLanguage(language)
		},
		[i18n],
	)

	return (
		<ScrollContent>
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
						handler={() => {}}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:clearData')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.REMOVE}
						handler={() => {}}
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
