import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
	padding: 1rem;
	max-width:1280px;
	margin: auto;
`

function Wrapper({children}) {
	return (
		<WrapperStyled>
			{children}
		</WrapperStyled>
	)
}

export default Wrapper;