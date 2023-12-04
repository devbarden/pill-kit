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
		donateHandler,
		rateHandler,

		openLanguageModal,
		openRemoveDataModal,
		openTermsOfUseModal,
	} = useContext(SettingsFormContext)

	return (
		<Fragment>
			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.language}
					iconColor={EnumColor.darkBlue}
					text={t('settingsForm:language')}
					handler={openLanguageModal}
					value={selectedLanguage}
				/>

				<Form.Separator />

				<Form.PressableItem
					iconName={EnumIconName.mail}
					iconColor={EnumColor.black}
					text={t('settingsForm:contact')}
					handler={mailHandler}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.remove}
					iconColor={EnumColor.red}
					text={t('settingsForm:clearData')}
					handler={openRemoveDataModal}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.gift}
					iconColor={EnumColor.red}
					text={t('settingsForm:donate')}
					handler={donateHandler}
				/>

				<Form.Separator />

				<Form.PressableItem
					iconName={EnumIconName.star}
					iconColor={EnumColor.blue}
					text={t('settingsForm:rate')}
					handler={rateHandler}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.docs}
					iconColor={EnumColor.black}
					text={t('settingsForm:termsOfUse')}
					handler={openTermsOfUseModal}
				/>
			</Form.Wrapper>
		</Fragment>
	)
})
