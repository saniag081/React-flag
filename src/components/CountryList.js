import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Country from './Country';

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
	const [countryList, setCountryList] = useState([]);
	useEffect(() => {
		(async function () {
			try {
				const request = await fetch('https://restcountries.eu/rest/v2/all');
				const data = await request.json();
				setCountryList(data);
				console.log(data[0])
			} catch(err) {
				console.error(err);
			}
		})()
	},[])
	return (
		<CountryListStyled>
			{
				countryList.map(({flag, name, population, region, capital, numericCode}) => {
					return (
						<Country
								flag={flag}
								name={name}
								population={population}
								region={region}
								capital={capital}
								key={numericCode}
						/>
					)
				})
			}
		</CountryListStyled>
	)
}

export default CountryList;