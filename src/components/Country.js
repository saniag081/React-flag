import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import slugify from 'slugify'

const CountryStyle = styled.div`
	cursor: pointer;
	width: 264px;
	text-align: left;
	box-shadow: 0 0 7px 2px rgba(0,0,0,.07);
	border-radius: 5px;
	.image{
		max-width: 100%;
		height: 160px;
		margin: 0;
	}
	.image img{
		width: 100%;
		height: 100%;
		border-radius: 5px 5px 0 0;
	}
	.details{
		padding: 1.5em;
		border: 1px solid transparent;
		border-top: none;
		transition: .3s border;
		:hover{
			border: 1px solid var(--black);
			border-top: none;
			border-radius: 0 0 5px 5px;
		}
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
		history.push(`/country/${slugify(name)}`)
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