import React, { useState, useEffect } from 'react'
import DarkMode from '../components/DarkMode'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { useSelector } from 'react-redux'
import CountrySelect from '../components/CountrySelect'

const DetailCountryStyled = styled.div`
`

function DetailCountry({ match }) {
	const storageCountry = useSelector(
		state => {
			return state.countryList.find(item => item.name === match.params.name.replace('-',' '))
		}
	)
	const [getCountry, setCountry] = useState(storageCountry)
	useEffect(() => {
		if (!getCountry) {
			fetch(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
				.then(response => response.json())
				.then(data => setCountry(data[0]))
				.catch(error => console.error(error))
		}
		console.log(getCountry)
	}, [getCountry, match.params.name])
	return (
		<DetailCountryStyled>
			<DarkMode/>
			<Wrapper>
				<CountrySelect {...getCountry} />
			</Wrapper>
		</DetailCountryStyled>
	)
}

export default DetailCountry