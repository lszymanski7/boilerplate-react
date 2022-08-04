<!-- APPLICATION PREVIEW -->
<div align="center">
  
  ![React Boilerplate Header](./docs/application.png)
  
</div>

<!-- SHIELDS -->
<div align="center">
  
  ![Version](https://img.shields.io/badge/version-1.0.0-blue?label=Version&labelColor=424242)
  ![GitHub Repository Size](https://img.shields.io/github/repo-size/lszymanski7/boilerplate-react?label=Size&labelColor=424242)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?label=License&labelColor=424242)](https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md)
  ![GitHub Last Commit](https://img.shields.io/github/last-commit/lszymanski7/boilerplate-react?label=Last%20Commit&labelColor=424242)
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lszymanski7/boilerplate-react?label=Pull%20Requests&labelColor=424242)
  ![GitHub Issues](https://img.shields.io/github/issues/lszymanski7/boilerplate-react?label=Issues&labelColor=424242)
  
</div>

<br/>

<!-- REACT BOILERPLATE -->
# React Boilerplate
Boilerplate for creating projects in the JavaScript programming language based on React and Redux libraries. It includes the basic configuration of tools such as Webpack, Babel, Jest, Express, ESLint and Prettier. Designed to speed up the process of building new projects. Don't waste your time configuring the tools commonly used in web development.

<!-- TABLE OF CONTENTS -->
## Table of Contents
<ol>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#scripts">Scripts</a></li>
  <li><a href="#bugs-and-features">Bugs and Features</a></li>
  <li><a href="#license">License</a></li>
</ol>
  
<!-- FEATURES -->
## Features
- Webpack configuration split into three files to separate the production and development environments. Provides support for Webpack Dev Server and plugins such as: 
  - html-webpack-plugin,
  - copy-webpack-plugin,
  - mini-css-extract-plugin,
  - css-minimizer-webpack-plugin,
  - terser-webpack-plugin.
- Converting ECMAScript 2015+ code into a backwards compatible version of JavaScript. 
- Possibility to conduct unit tests.
- A simple Express server that allows you to deploy your application in Heroku.
- Checking JavaScript code to find existing problems.
- Formatting all supported files.

<!-- TECHNOLOGIES -->
## Technologies
The following technologies and tools were used in the project:

![JavaScript](https://img.shields.io/badge/JavaScript-424242?style=flat&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML-424242?style=flat&logo=html5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-424242?style=flat&logo=css3&logoColor=1572B6)
[![SASS](https://img.shields.io/badge/SASS%20|%20v1.53.0-424242?style=flat&logo=SASS&logoColor=CC6699)](https://sass-lang.com)
[![React](https://img.shields.io/badge/React%20|%20v18.1.0-424242?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Redux](https://img.shields.io/badge/Redux%20|%20v4.2.0-424242?style=flat&logo=redux&logoColor=764ABC)](https://redux.js.org)
[![React Router](https://img.shields.io/badge/React%20Router%20|%20v6.3.0-424242?logo=react-router&logoColor=CA4245)](https://reactrouter.com)
[![Webpack](https://img.shields.io/badge/Webpack%20|%20v5.72.1-424242?style=flat&logo=webpack&logoColor=8DD6F9)](https://webpack.js.org)
[![Babel](https://img.shields.io/badge/Babel%20|%20v7.18.0-424242?style=flat&logo=babel&logoColor=F9DC3E)](https://babeljs.io)
[![Jest](https://img.shields.io/badge/Jest%20|%20v28.1.3-424242?style=flat&logo=jest&logoColor=C21325)](https://jestjs.io)
[![Testing Library](https://img.shields.io/badge/Testing%20Library%20|%20v8.16.0-424242?style=flat&logo=testinglibrary&logoColor=E33332)](https://testing-library.com)
[![Node.js](https://img.shields.io/badge/Node.js%20|%20v18.6.0-424242?style=flat&logo=node.js&logoColor=339933)](https://nodejs.org/en)
[![Npm](https://img.shields.io/badge/Npm%20|%20v8.15.0-424242?style=flat&logo=npm&logoColor=CB3837)](https://npmjs.com)
[![Express](https://img.shields.io/badge/Express%20%7C%20v4.18.1-424242?style=flat&logo=express&logoColor=FFFFFF)](https://expressjs.com)
[![ESLint](https://img.shields.io/badge/ESLint%20%7C%20v8.19.0-424242?style=flat&logo=eslint&logoColor=4B32C3)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier%20%7C%20v2.7.1-424242?style=flat&logo=prettier&logoColor=F7B93E)](https://prettier.io)

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites
> You can download Node.js installer [here](https://nodejs.org/en/download).

This project was created using the Node.js (v18.6.0) runtime environment and the NPM (v8.15.0) for package management. Use the Node.js installer to install both of them on your system.
  
<!-- Installation -->
### Installation
Follow all of the steps below to get a local copy of the project and be able to run it.

1. Clone the repository.
```
git clone https://github.com/lszymanski7/boilerplate-react.git
```
2. Navigate to the project directory.
```
cd boilerplate-react
```
3. Install all dependencies.
```
npm install
```
4. Start the Express server.
```
npm run start
```

The application will be launched at the following url: <a href="http://localhost:3000">http://localhost:3000<a/>

<!-- SCRIPTS -->
## Scripts
The available scripts with descriptions are listed below.

```properties
# Run Webpack with development configuration.
npm run build:dev

# Run Webpack with production configuration.
npm run build:prod

# Start the Webpack Dev Server and run the application at the following url: http://localhost:8080
npm run dev-server

# Run ESLint to check JavaScript code and find problems.
npm run eslint:check

# Run ESLint to find issues and try to fix them. Not all problems are fixable using this option.
npm run eslint:fix

# Execute build:prod script on Heroku.
npm run heroku-postbuild

# Run Prettier to check if all supported files are formatted. 
npm run prettier:check

# Run Prettier to format all supported files in the current directory and its subdirectories.
npm run prettier:fix

# Start the Express server and run the application at the following url: http://localhost:3000
npm run start

# Run all tests with the settings specified in the configuration file.
npm run test

# Generate code coverage report.
npm run test:coverage

# Run all tests in watch mode.
npm run test:watch
```
  
<!-- BUGS AND FEATURES -->
## Bugs and Features  
> You can report bugs and request new features [here](https://github.com/lszymanski7/boilerplate-react/issues). 
  
Please search the existing bugs and feature requests before you file one yourself.

<!-- LICENSE -->
## License
> You can check out the full license [here](https://github.com/lszymanski7/boilerplate-react/blob/main/LICENSE.md).
  
This project is licensed under the terms of the **MIT** license.
  
<br/>
 
<!-- LINKS -->
##
<div align="center">
  <p>Connect with me:</p>
  
  [![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-F58025?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/18706083)
  [![GitLab](https://img.shields.io/badge/GitLab-424242?style=flat&logo=gitlab)](https://gitlab.com/lszymanski7)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/lszymanski7)
  [![Twitter](https://img.shields.io/twitter/follow/lszymanski7_?label=Twitter&style=social)](https://twitter.com/lszymanski7_)
  
</div>







<!-- DESCRIPTION -->
## Description
Boilerplate for creating JavaScript projects based on the React library. Includes basic Webpack and Babel configuration. It also allows to use Redux and React Router.
	
<!-- TECHNOLOGIES -->
## Technologies
This project was created with:
- [React 18](https://reactjs.org/)
- [Redux 4](https://redux.js.org/)
- [React Router 6](https://reactrouter.com/)
- [Babel 7](https://babeljs.io/)
- [Webpack 5](https://webpack.js.org/)
