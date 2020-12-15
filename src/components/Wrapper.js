import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
	padding: 0 1rem;
	max-width:1280px;
	margin: auto;
	@media(min-width: 767px){
		padding: 1em;
	}
`

function Wrapper({children, style}) {
	return (
		<WrapperStyled style={style}>
			{children}
		</WrapperStyled>
	)
}

export default Wrapper;