function reducer(stado, action) {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return {...stado, countryList: action.payload}
    }
    default: {
      return stado;
    }
  }
}

export default reducer;