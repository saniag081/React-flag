import React, {useEffect} from 'react'
import styled from 'styled-components'
import Country from './Country'
import { useSelector, useDispatch } from 'react-redux'
import { setCountryList }  from '../actions/index'

const CountryListStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(264px, 280px));
	grid-template-row: 2.3em;
	justify-content: center;
	grid-gap: 1.5rem;
	background: var(--background);
	padding: 2em 2em;
`

function CountryList() {
	const dispatch = useDispatch();
	// const countryList = useSelector((state) => state.countryList)
	const countryName = useSelector((state) => state.countryName)
	const countryList = useSelector((state) => {
		if (Array.isArray(state.countryListRegion) && state.countryListRegion.length > 0) {
			if (countryName.length > 0) {
				return countryName
			} else {
				return state.countryListRegion
			}
		}
		return state.countryList
	})



	useEffect(() => {
		(async function () {
			try {
				const API = `https://restcountries.eu/rest/v2/all`;
				const request = await fetch(API);
				const list = await request.json();
				dispatch(setCountryList(list));
				// console.log(list);
			} catch(err) {
				console.error(err);
			}
		})()
	},[])
	return (
		<CountryListStyled>
			{
				countryList.map(({ flag, name, population, region, capital, numericCode }) => (
					<Country
						flag={flag}
						name={name}
						population={population}
						region={region}
						capital={capital}
						key={numericCode}
					/>
				))
			}
		</CountryListStyled>
	)
}

export default CountryList;