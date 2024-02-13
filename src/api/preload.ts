import * as Font from 'expo-font'
import {
	Entypo,
	Fontisto,
	Octicons,
	Ionicons,
	Foundation,
	MaterialIcons,
	MaterialCommunityIcons,
} from '@expo/vector-icons'

const VectorIcons = [
	Entypo,
	Fontisto,
	Octicons,
	Ionicons,
	Foundation,
	MaterialIcons,
	MaterialCommunityIcons,
]

export const initFonts = async () => {
	try {
		const response = Promise.allSettled(
			VectorIcons.map((VectorIcon) => Font.loadAsync(VectorIcon.font)),
		)

		return response
	} catch {
		return null
	}
}
