export const isDeserted = <T>(value: T): boolean => {
	if (typeof value === 'number' && !isNaN(value)) {
		return false
	}

	if (typeof value === 'function') {
		return false
	}

	if (typeof value === 'boolean') {
		return false
	}

	if (typeof value === 'string') {
		const trimmedString = value.trim()

		return trimmedString.length === 0
	}

	if (typeof value === 'object') {
		if (value === null) {
			return true
		}

		if (Array.isArray(value)) {
			return value.length === 0
		}

		return JSON.stringify(value) === '{}'
	}

	return true
}
