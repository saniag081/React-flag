import React, {useEffect} from 'react';
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
	useEffect(() => {

	},[])
	return (
		<CountryListStyled>
			<Country
					flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
					name="Colombia"
					population={12354}
					region="America"
					capital="Bogotá"
			/>
			<Country
					flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
					name="Colombia"
					population={12354}
					region="America"
					capital="Bogotá"
			/>
		</CountryListStyled>
	)
}

export default CountryList;