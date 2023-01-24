// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none' && license !== 'GNU LGPL') {
    return `![Project License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  } else if (license === 'GNU LGPL') {
    return `![Project License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

} else if (license === 'Unlicense') {
  return`[![Unlicense]] (https://unlicense.org)`

}else if (license === 'ISC') {
  return`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`

}else if (license === 'GNU LGPL') {
  return`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`

}else {
  return'';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
  ## License
  
  ${renderLicenseLink(license)}
`
  } else {
    return `
  ## License
  There has not been any license set for this project. 
    `
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ***
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 
  >Email: ${data.email} 
  >GitHub : [${data.user}](https://github.com/${data.user})
`;
}

module.exports = generateMarkdown;
