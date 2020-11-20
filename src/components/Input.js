import React from 'react';
import Styled from 'styled-components';

const InputStyled = Styled.label`
	display: flex;
	align-items: center;
	padding: 0 1rem;
	box-shadow: 0 2px 9px 0 rgba(0,0,0,.08);
	margin-bottom: 40px;
	padding-right: 0;
	border-radius: 5px;
	background: #ffF;
	@media(min-width: 768px){
		margin: 0;
	}
	.header-input{
		width: 100%;
		margin-left: .8rem;
		height: 48px;
		line-height: 48px;
		padding: 0 2em;
		border: none;
		outline: 0;
		&::-webkit-input-placeholder {
			color: #c4c4c4;
	}
}
`;

function Input({...props}) {
	return (
		<InputStyled>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c4c4c4" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
			<input type="text" placeholder="Search for a country..." className="header-input" {...props} />
		</InputStyled>
	)
}

export default Input;