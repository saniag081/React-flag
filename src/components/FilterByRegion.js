import React from 'react'
import styled from 'styled-components'
import { useSelector ,useDispatch } from 'react-redux'
import { getCountryListRegion } from '../actions/index';

const FilterStyled = styled.select`
	padding: 1.3em;
	outline: 0;
	border: none;
	border-radius: 5px;
	box-shadow: 0 2px 9px 0 rgba(0,0,0,.08);
	width: 100%;
`

function Region() {
	const dispatch = useDispatch()
	const countryListRegion = useSelector((state) => state.countryListRegion)
	console.log(countryListRegion)

	function handleGetRegion(env){
		dispatch(getCountryListRegion(env.target.value))
	}

	return (
		<FilterStyled onChange={handleGetRegion}>
			<option  value="Americas" >America</option>
			<option value="Europe" >Europa</option>
			<option value="Asia" >Asia</option>
			<option value="Oceania" >Oceania</option>
		</FilterStyled>
	)
}

export default Region;