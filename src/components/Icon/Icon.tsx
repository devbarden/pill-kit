import { FC, ReactElement, memo, useMemo } from 'react'
import { Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

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
		[EnumIconName.mail]: <Octicons name="mail" {...props} />,
		[EnumIconName.home]: <Octicons name="home" {...props} />,
		[EnumIconName.info]: <Octicons name="info" {...props} />,
		[EnumIconName.gift]: <Octicons name="gift" {...props} />,
		[EnumIconName.bell]: <Octicons name="bell" {...props} />,
		[EnumIconName.remove]: <Octicons name="trash" {...props} />,
		[EnumIconName.cream]: <Octicons name="beaker" {...props} />,
		[EnumIconName.search]: <Octicons name="search" {...props} />,
		[EnumIconName.settings]: <Octicons name="gear" {...props} />,
		[EnumIconName.star]: <Octicons name="star-fill" {...props} />,
		[EnumIconName.analytic]: <Octicons name="graph" {...props} />,
		[EnumIconName.language]: <Octicons name="globe" {...props} />,
		[EnumIconName.sort]: <Octicons name="sort-desc" {...props} />,
		[EnumIconName.clear]: <Octicons name="x-circle" {...props} />,
		[EnumIconName.history]: <Octicons name="archive" {...props} />,
		[EnumIconName.back]: <Octicons name="chevron-left" {...props} />,
		[EnumIconName.bellOff]: <Octicons name="bell-slash" {...props} />,
		[EnumIconName.right]: <Octicons name="chevron-right" {...props} />,
		[EnumIconName.options]: <Ionicons name="options" {...props} />,
		[EnumIconName.pill]: <MaterialCommunityIcons name="pill" {...props} />,
		[EnumIconName.medicine]: (
			<MaterialCommunityIcons name="flask-empty-plus-outline" {...props} />
		),
	})[name]

export const Icon: FC<TypeProps> = memo(({ name, ...rest }) => {
	const icon = useMemo(() => getIconByName(name, rest), [name, rest])

	return icon
})
