import { FC, ReactElement, memo } from 'react'
import { Select as BaseSelect } from 'native-base'

import { SelectItem } from '@app/types'
import { uid } from '@app/utils'

import { styles } from './Select.styles'

interface Props {
	items: SelectItem[]
	selected: string
	label?: string
	dropdownIcon?: ReactElement
	onSelect: (item: string) => void
}

export const Select: FC<Props> = memo(
	({ items, selected, onSelect, dropdownIcon, label = 'Select...' }) => (
		<BaseSelect
			width="100%"
			variant="unstyled"
			selectedValue={selected}
			onValueChange={onSelect}
			accessibilityLabel={label}
			dropdownIcon={dropdownIcon}
			style={styles.select}>
			{items.map((item) => (
				<BaseSelect.Item key={uid()} label={item.label} value={item.value} />
			))}
		</BaseSelect>
	),
)
