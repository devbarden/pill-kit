import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MaterialIcons } from '@expo/vector-icons'

import { Form, ScrollContent } from '@app/components'
import { languageSelectItems } from '@app/utils'

import { COLORS, FORM_ICON_ACTION_MODES } from '@app/constants'

import { useSettingsForm } from './hooks'
import { RemoveAlert, TermsOfUse, ProLabel } from './sub-components'

export const SettingsForm: FC = memo(() => {
	const { t } = useTranslation()
	const {
		removeAlertRef,
		termsOfUseRef,
		selectedLanguage,
		changeLanguageHandler,
		mailHandler,
		removeDataHandler,
		donateHandler,
		rateHandler,
		termsOfUseHandler,
		upgradeHandler,
	} = useSettingsForm()

	return (
		<ScrollContent>
			<RemoveAlert ref={removeAlertRef} />
			<TermsOfUse ref={termsOfUseRef} />

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
				<Form.Item name={t('settingsForm:donate')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.MONEY}
						handler={donateHandler}
					/>
				</Form.Item>
				<Form.Separator />
				<Form.Item name={t('settingsForm:rate')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.STAR}
						handler={rateHandler}
					/>
				</Form.Item>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.Item name={t('settingsForm:termsOfUse')}>
					<Form.IconAction
						mode={FORM_ICON_ACTION_MODES.ARROW}
						handler={termsOfUseHandler}
					/>
				</Form.Item>
			</Form.Wrapper>
		</ScrollContent>
	)
})
