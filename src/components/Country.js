import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const CountryStyle = styled.div`
	width: 264px;
	text-align: left;
	box-shadow: 0 0 7px 2px rgba(0,0,0,.07);
	border-radius: 5px;
	overflow: hidden;
	.image{
		max-width: 100%;
		height: 160px;
		margin: 0;
	}
	.image img{
		width: 100%;
		height: 100%;
	}
	.details{
		padding: 1.5em;
	}
	.details-titles{
		margin: 0;
		margin-bottom: 1em;
		font-size: 18px;
		font-weight: 700;
	}
	.details p{
		font-size: .9em;
		margin-bottom:.5rem;
	}
`

function Country({
	flag,
	name,
	population,
	region,
	capital,
}) {
	const history = useHistory()
	function handleDetail() {
		history.push(`/country/${name}`)
	}

	return (
		<CountryStyle onClick={handleDetail}>
			<figure className="image">
				<img loading="lazy" src={flag} alt={name} />
			</figure>
			<div className="details">
				<h2 className="details-titles">{name}</h2>
				<p><strong>Population:</strong> {population} </p>
				<p><strong>Región:</strong> {region} </p>
				<p><strong>Capital:</strong> {capital} </p>
			</div>
		</CountryStyle>
	)
}

export default Country;