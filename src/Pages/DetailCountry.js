import React from 'react'
import DarkMode from '../components/DarkMode'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { useSelector } from 'react-redux'

const DetailCountryStyled = styled.div`
`

function DetailCountry({match}) {
	const country = useSelector(
		state => {
			return state.countryList.find(item => item.name === match.params.name.replace('-',' '))
		}
	)
	console.log(country)
	return (
		<DetailCountryStyled>
			<DarkMode/>
			<Wrapper>
				<p>{match.params.name}</p>
			</Wrapper>
		</DetailCountryStyled>
	)
}

export default DetailCountry