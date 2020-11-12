function reducer(stado, action) {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return {...stado, countryList: action.payload}
		}
		case 'GET_COUNTRY_LIST_REGION': {
			const newCounreyList = stado.countryList;
			const countryListRegion = newCounreyList.filter(
				(item) => item.region === action.payload
			)
			return {...stado, countryListRegion: countryListRegion}
		}
		case 'GET_COUNTRY_BY_NAME': {
			let list
			if ( Array.isArray(stado.countryListRegion) && stado.countryListRegion.length > 0) {
				list = stado.countryListRegion
			} else {
				list = stado.countryList
			}
			const getCountry = list.filter(
				(country) => country.name.includes(action.payload)
			)
			console.log(getCountry)
			return {...stado, countryName: getCountry}
		}
    default: {
      return stado;
    }
  }
}

export default reducer;