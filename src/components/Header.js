import React from 'react'
import FilterByRegion from './FilterByRegion'
import styled from 'styled-components'
import Input from './Input'
import Wrapper from './Wrapper'
import DarkMode from './DarkMode'
import { useDispatch } from 'react-redux'
import { getContryByName } from '../actions/index'

const HeaderStyled = styled.header`
`

function Header() {
	const dispatch = useDispatch();

	function handleGetConttryName(env) {
		dispatch(getContryByName(env.target.value));
	}
	return (
		<HeaderStyled>
			<DarkMode/>
			<Wrapper>
				<Input onChange={handleGetConttryName}/>
				<FilterByRegion/>
			</Wrapper>
		</HeaderStyled>
	)
}

export default Header;