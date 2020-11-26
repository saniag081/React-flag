import React from 'react'
import FilterByRegion from './FilterByRegion'
import styled from 'styled-components'
import Input from './Input'
import Wrapper from './Wrapper'
import DarkMode from './DarkMode'
import { useDispatch } from 'react-redux'
import { getContryByName } from '../actions/index'

const HeaderStyled = styled.header`
	.header-container{
		margin-top: 1.5rem;
		@media(min-width: 768px){
			display: grid;
			grid-template-columns: 480px 200px;
			justify-content: space-between;
			margin: 2.5rem auto;
		}
	}
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
				<div className="header-container">
					<Input onChange={handleGetConttryName}/>
					<FilterByRegion/>
				</div>
			</Wrapper>
		</HeaderStyled>
	)
}

export default Header;