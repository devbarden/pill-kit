import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Form, Icon } from '@app/components'
import { useGlobalContext } from '@app/hooks'
import { EnumColor, EnumIconName } from '@app/enums'

import { SettingsFormContext } from '../../context'

export const Fields: FC = memo(() => {
	const { t } = useTranslation()
	const { theme, globalStyleProps } = useGlobalContext()
	const {
		selectedLanguage,

		isShareBtnAvailable,

		mailHandler,
		shareDataHandler,
		termsOfUseHandler,
		changeThemeHandler,

		openRemoveModal,
		openLanguageModal,
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
					text={t('settings:field.contact')}
					handler={mailHandler}
				/>

				<Form.Separator />

				<Form.PressableItem
					withoutChevronRight
					text={t('settings:field.theme')}
					iconName={EnumIconName.theme}
					handler={changeThemeHandler}
					value={
						<Icon
							size={20}
							name={EnumIconName[theme]}
							color={globalStyleProps.style.color.theme}
						/>
					}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Fragment>
					{isShareBtnAvailable && (
						<Fragment>
							<Form.PressableItem
								iconName={EnumIconName.share}
								text={t('settings:field.share')}
								handler={shareDataHandler}
							/>

							<Form.Separator />
						</Fragment>
					)}
				</Fragment>

				<Form.PressableItem
					iconName={EnumIconName.remove}
					iconColor={globalStyleProps.style.color.remove}
					text={t('settings:field.clearAllData')}
					handler={openRemoveModal}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					iconName={EnumIconName.docs}
					text={t('settings:field.terms')}
					handler={termsOfUseHandler}
				/>
			</Form.Wrapper>
		</Fragment>
	)
})
