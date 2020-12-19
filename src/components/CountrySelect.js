import React from 'react'
import styled from 'styled-components'

const CountrySelectSrtled = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	padding-bottom: 3em;
	margin-top: 5em;
	.c-country{
		&-img{
			margin: auto;
			/* max-width: 500px; */
			margin-bottom: 1.5rem;
			img{
				width: 100%;
			}
		}
	}
	.borders{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		p{
			width: 100%;
		}
		&-item{
			background-color: var(--color-card);
			padding: .5em 2em;
			border-radius: 5px;
			box-shadow: 0 0 5px rgba(0,0,0,.3);
			display: inline-flex;
			margin-right: 10px;
			margin-bottom: 15px;
		}
	}
	@media(min-width: 767px){
		.c-country-content{
			display: grid;
			justify-content: space-around;
			grid-template-columns: repeat(2, minmax(200px, 300px));
		}
	}
	@media(min-width: 1240px){
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		grid-column-gap: 90px;
	}
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
			<figure className='c-country-img'>
				<img src={flag} alt='' />
			</figure>
			<div>
				<h2>{name}</h2>
				<div className='c-country-content'>
					<div>
						<p> <strong>Native name:</strong> {nativeName}</p>
						<p> <strong>Population:</strong> {population}</p>
						<p> <strong>Region:</strong> {region}</p>
						<p> <strong>Sub region:</strong> {subregion}</p>
						<p> <strong>Capital:</strong> {capital}</p>
					</div>
					<div>
						<p> <strong>Top level doaim:</strong> {topLevelDomain}</p>
						<p> <strong>Currencies:</strong> {currencies?.map((item) => item.name)}</p>
						<p> <strong>Languages:</strong> {languages?.map((item) => item.name)} </p>
					</div>
				</div>
				<div className='borders'>
					<p> <strong>Borders:</strong> Countries: </p>
					{borders?.map((item, index) => <span key={`borderds-${index}`} className='borders-item'>{item}</span>)}
				</div>
			</div>
		</CountrySelectSrtled>
	)
}

export default CountrySelect