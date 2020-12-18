import React, { useState, useEffect } from 'react'
import DarkMode from '../components/DarkMode'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { useSelector } from 'react-redux'
import CountrySelect from '../components/CountrySelect'
import { Link } from 'react-router-dom'

const DetailCountryStyled = styled.div`
	.btn{
		max-width: 100px;
		margin: 1rem 0;
	}
	.btn-back{
		background: var(--white);
		box-shadow: 0 0 5px rgba(0,0,0,.3);
		padding: .5em 2.2em;
		border-radius: 5px;
		display: flex;
    justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	@media(min-width: 767px){
		.btn{
			margin-top: 2em;
		}
	}
`

function DetailCountry({ match }) {
	const storageCountry = useSelector(
		state => {
			return state.countryList.find((item) => {
				console.log(match.params.id.replace('-',' '))
				if (item.alpha2Code === match.params.id.replace(/-/g, ' ')) {
					return true
				}
				return false
			})
		}
	)
	const [getCountry, setCountry] = useState(storageCountry)
	useEffect(() => {
		if (!getCountry) {
			fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
				.then(response => response.json())
				.then(data => setCountry(data))
				.catch(error => console.error(error))
		}
	}, [getCountry, match.params.id])
	return (
		<DetailCountryStyled>
			<DarkMode/>
			<Wrapper>
				<div className='btn'>
					<Link to='/' className="btn-back">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>
					</Link>
				</div>
				<CountrySelect {...getCountry} />
			</Wrapper>
		</DetailCountryStyled>
	)
}

export default DetailCountry