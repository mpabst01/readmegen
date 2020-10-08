function renderLicenseBadge(license) {
  if (lic !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseSection(lic) {
  if (lic !== "None") {
    return (
      `## License

This project is licensed under the ${lic} license.`
    );
  }
  return "";
}

function renderLicenseLink(lic) {
  if (lic !== "None") {
    return (
      "\n* [License](#license)\n"
    );
  }
  return "";
}

function generateMkd(data) {
  return `# ${data.title}
${renderLicenseBadge(data.lic)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.lic)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Usage

${data.usage}

${renderLicenseSection(data.lic)}


## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`


## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Contributing

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMkd;
