// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "N/A") {
    return "![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "N/A") {
    return "\n* [License](#license)\n";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  Licensed under the ${data.license} license.
  ## Contributors
  ${data.contributors}
  ## Test 
  ${data.test}
  ## Questions
  Please send any questions to ${data.email} or visit https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
