const { withGradleProperties } = require('@expo/config-plugins')

module.exports = (config) => {
	const properties = [
		{
			type: 'property',
			key: 'AsyncStorage_db_size_in_MB',
			value: '20',
		},
	]

	return withGradleProperties(config, (config) => {
		properties.map((property) => config.modResults.push(property))

		return config
	})
}
