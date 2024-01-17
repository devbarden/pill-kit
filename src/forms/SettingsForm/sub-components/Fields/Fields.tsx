import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Form } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { SettingsFormContext } from '../../context'

export const Fields: FC = memo(() => {
	const { t } = useTranslation()
	const {
		selectedLanguage,

		mailHandler,
		termsOfUseHandler,

		openLanguageModal,
		openRemoveDataModal,
	} = useContext(SettingsFormContext)

	return (
		<Fragment>
			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.language}
					iconColor={EnumColor.blue}
					text={t('settings:field.language')}
					handler={openLanguageModal}
					value={selectedLanguage}
				/>

				<Form.Separator />

				<Form.PressableItem
					iconName={EnumIconName.mail}
					iconColor={EnumColor.darkGrey}
					text={t('settings:field.contact')}
					handler={mailHandler}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.remove}
					iconColor={EnumColor.red}
					text={t('settings:field.clearAllData')}
					handler={openRemoveDataModal}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.docs}
					iconColor={EnumColor.black}
					text={t('settings:field.terms')}
					handler={termsOfUseHandler}
				/>
			</Form.Wrapper>
		</Fragment>
	)
})
