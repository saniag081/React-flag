import React from 'react'
import DarkMode from '../components/DarkMode'

function DetailCountry({match}) {
	return (
		<>
			<DarkMode/>
			<p>{match.params.name}</p>
		</>
	)
}

export default DetailCountry