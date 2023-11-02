import { FC, memo } from 'react'
import { Select as BaseSelect } from 'native-base'

import { SelectItem } from '@app/types'
import { uid } from '@app/utils'

import { styles } from './Select.styles'

interface Props {
	items: SelectItem[]
	selected: string
	label?: string
	onSelect: (item: string) => void
}

export const Select: FC<Props> = memo(
	({ items, selected, onSelect, label = 'Select...' }) => (
		<BaseSelect
			width="100%"
			variant="unstyled"
			selectedValue={selected}
			onValueChange={onSelect}
			accessibilityLabel={label}
			style={styles.select}>
			{items.map((item) => (
				<BaseSelect.Item key={uid()} label={item.label} value={item.value} />
			))}
		</BaseSelect>
	),
)
