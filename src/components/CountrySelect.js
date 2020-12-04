import React from 'react'
import styled from 'styled-components'

const CountrySelectSrtled = styled.div`
`

function CountrySelect({
	flag,
	name,
	nativeName,
	population,
	region,
	subregion,
	capital,
	topLevelDomain,
	currencies,
	languages,
	borders
}) {
	return (
		<CountrySelectSrtled>
			<img src={flag} alt='' />
			<div>
				<h2>{name}</h2>
				<p> <strong>Native name:</strong> {nativeName}</p>
				<p> <strong>Population:</strong> {population}</p>
				<p> <strong>Region:</strong> {region}</p>
				<p> <strong>Sub region:</strong> {subregion}</p>
				<p> <strong>Capital:</strong> {capital}</p>
				<p> <strong>Top level doaim:</strong> {topLevelDomain}</p>
				<p> <strong>Currencies:</strong> {currencies?.map((item) => item.name)}</p>
				<p> <strong>Languages:</strong> {languages?.map((item) => item.name)} </p>
				<p> <strong>Borders:</strong> {borders?.map((item) => item)} </p>
			</div>
		</CountrySelectSrtled>
	)
}

export default CountrySelect