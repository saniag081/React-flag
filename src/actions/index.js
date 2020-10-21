export function setCountryList(payload) {
	return {
		type: 'SET_COUNTRY_LIST',
		payload: payload
	}
}

export function getCountryListRegion(payload) {
	return {
		type: 'GET_COUNTRY_LIST_REGION',
		payload: payload
	}
}

export function getContryByName(payload) {
	return {
		type: 'GET_COUNTRY_BY_NAME',
		payload: payload
	}
}