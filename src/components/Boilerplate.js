import React from 'react'
import logo from '../assets/importFiles'

const Boilerplate = () => {
	return (
		<div className="container"> 
		    <img className="container__logo" src={logo} alt="React Boilerplate" />
		    <h1 className="container__title">React Boilerplate</h1>
	    </div>
	)
}

export { Boilerplate as default }
