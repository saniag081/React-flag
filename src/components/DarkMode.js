import React from 'react'
import Wrapper from './Wrapper'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DarkModeStyled = styled.div`
	background-color: var(--color-header);
	box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .06);
	.content{
		min-height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title{
		text-decoration: none;
		h1{
			font-size: 16px;
			color: var(--color-text);
		}
	}
	p{
		margin: 0;
	}
	.dark-mode{
		&-icon{
			display: flex;
			align-items: center;
			cursor: pointer;
			user-select: none;
		}
		p{
			color: var(--color-text);
			font-size: 12px;
			font-weight: 600;
		}
		svg{
			fill: var(--color-text);
			margin-right: 10px;
		}
	}
`

function DarkMode() {
	function handleDarkMode() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.toggle('default-dark-mode')
		} else {
			document.body.classList.toggle('is-dark-mode')
		}
	}
	return (
		<DarkModeStyled>
			<Wrapper>
				<div className="content">
					<Link to="/" className="title">
						<h1>Were in the world ?</h1>
					</Link>
					<div className="dark-mode" onClick={handleDarkMode}>
						<p className="dark-mode-icon">
							<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="black" width="18px" height="18px"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M11.1,12.08C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12c0,0.14,0.02,0.28,0.02,0.42 C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18c0,1.52-0.87,2.83-2.12,3.51 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C18,17.72,13.38,16.52,11.1,12.08z"/></g><path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"/></g></g></svg>
							Dark Mode
						</p>
					</div>
				</div>
			</Wrapper>
		</DarkModeStyled>
	)
}

export default DarkMode;