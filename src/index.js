import React from 'react'
import ReactDOM from 'react-dom/client'
import Boilerplate from './components/Boilerplate'
import 'normalize.css/normalize.css'
import './assets/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Boilerplate />
)

console.log(
    '+--------------+---------------------------------------------------------------------------------+' + '\n' +
    '| Project name | React Boilerplate                                                               |' + '\n' +
    '+--------------+---------------------------------------------------------------------------------+' + '\n' +
    '| Description  | Boilerplate for creating projects in the JavaScript programming language based  |' + '\n' + 
    '|              | on React and Redux libraries. It includes the basic configuration of tools such |' + '\n' + 
    '|              | as Webpack, Babel, Jest, Express, ESLint and Prettier.                          |' + '\n' +
    '+--------------+---------------------------------------------------------------------------------+' + '\n' +
    '| Keywords     | Boilerplate, JavaScript, React, Redux, HTML, CSS, SASS, React Router, Webpack,  |' + '\n' + 
    '|              | Babel, Jest, Testing Library, Node.js, Npm, Express, ESLint, Prettier           |' + '\n' +
    '+--------------+---------------------------------------------------------------------------------+' + '\n' +
    '| Version      | v1.0.0                                                                          |' + '\n' +
    '+--------------+---------------------------------------------------------------------------------+'
)
