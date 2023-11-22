import { FC, ReactElement, memo, useMemo } from 'react'
import {
	Feather,
	Ionicons,
	Octicons,
	AntDesign,
	Foundation,
	FontAwesome,
	FontAwesome5,
	MaterialIcons,
	MaterialCommunityIcons,
} from '@expo/vector-icons'

import { EnumIconName } from '@app/enums'

type TypeRequiredProps = {
	name: EnumIconName
}

type TypeAdditionalProps = {
	color?: string
	size?: number
}

type TypeProps = TypeRequiredProps & TypeAdditionalProps

const getIconByName = (
	name: EnumIconName,
	props: TypeAdditionalProps,
): ReactElement =>
	({
		[EnumIconName.mail]: <Feather name="mail" {...props} />,
		[EnumIconName.home]: <Octicons name="home" {...props} />,
		[EnumIconName.star]: <AntDesign name="star" {...props} />,
		[EnumIconName.info]: <Foundation name="info" {...props} />,
		[EnumIconName.search]: <Ionicons name="search" {...props} />,
		[EnumIconName.delete]: <AntDesign name="delete" {...props} />,
		[EnumIconName.options]: <Ionicons name="options" {...props} />,
		[EnumIconName.history]: <Octicons name="history" {...props} />,
		[EnumIconName.right]: <Feather name="chevron-right" {...props} />,
		[EnumIconName.plus]: <FontAwesome name="plus-circle" {...props} />,
		[EnumIconName.money]: <FontAwesome5 name="money-bill" {...props} />,
		[EnumIconName.language]: <MaterialIcons name="language" {...props} />,
		[EnumIconName.cream]: <MaterialIcons name="local-drink" {...props} />,
		[EnumIconName.pill]: <MaterialCommunityIcons name="pill" {...props} />,
		[EnumIconName.back]: <Ionicons name="chevron-back-sharp" {...props} />,
		[EnumIconName.sort]: <MaterialCommunityIcons name="sort" {...props} />,
		[EnumIconName.settings]: <Ionicons name="settings-outline" {...props} />,
		[EnumIconName.notification]: <Ionicons name="notifications" {...props} />,
		[EnumIconName.clear]: <Ionicons name="close-circle-outline" {...props} />,
		[EnumIconName.notificationOff]: (
			<Ionicons name="notifications-off" {...props} />
		),
		[EnumIconName.analytic]: (
			<MaterialCommunityIcons name="google-analytics" {...props} />
		),
		[EnumIconName.addMedicine]: (
			<MaterialCommunityIcons name="flask-empty-plus-outline" {...props} />
		),
	})[name]

export const Icon: FC<TypeProps> = memo(({ name, ...rest }) => {
	const icon = useMemo(() => getIconByName(name, rest), [name, rest])

	return icon
})
