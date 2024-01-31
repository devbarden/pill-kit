import { FC, memo, useMemo } from 'react'

import { useLocalNotification } from '@app/hooks'
import { Header, CardsList, ContentWrapper } from '@app/components'

import { useHomeState } from './hooks'
import { HomeContext } from './context'
import { Empty, Loading, AddMedicineAction } from './sub-components'

export const Home: FC = memo(() => {
	const state = useHomeState()

	const { medicines, isLoading, isNoMedicines } = useMemo(() => state, [state])

	const rerenderKey = useMemo(() => JSON.stringify(medicines), [medicines])

	// TODO: fix Android notifications permissions
	useLocalNotification()

	// TODO: testing notifications
	// const getData = async () => {
	// 	const notifications =
	// 		await Notifications.getAllScheduledNotificationsAsync()

	// 	console.log(notifications)
	// }

	// useEffect(() => {
	// 	setInterval(() => {
	// 		getData()
	// 	}, 5000)
	// }, [])

	return (
		<HomeContext.Provider value={state}>
			<Header withLogo action={<AddMedicineAction />} />
			{isLoading ? (
				<ContentWrapper withHorizontalPaddings withVerticalPaddings>
					<Loading />
				</ContentWrapper>
			) : isNoMedicines ? (
				<Empty />
			) : (
				<ContentWrapper>
					<CardsList key={rerenderKey} isDraggable items={medicines} />
				</ContentWrapper>
			)}
		</HomeContext.Provider>
	)
})
