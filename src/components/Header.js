import React from 'react';
import Region from './Region';
import { useDispatch } from 'react-redux';
import { getContryByName } from '../actions/index';

function Header() {
	const dispatch = useDispatch();

	function handleGetConttryName(env) {
		dispatch(getContryByName(env.target.value));
	}
	return (
		<>
			<input type="text" onChange={handleGetConttryName}/>
			<Region/>
		</>
	)
}

export default Header;