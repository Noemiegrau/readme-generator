// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

//REUSE THE DATA.TITLE, DATA.ETC

const generateMarkdown = (projectTitle, description, languages, installation, usage, contribution, test, license, questions, github, emailAddress) => { return `
  # **_${projectTitle}_**

  ## **_Table of contents_**
  * [Description of the project](#description-of-the-project)
  * [Programming Languages](#programming-languages)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
    
  ## **_Description of the project_**
  ${description}

  ## **_Programming Languages_**
  Project is created using:
  ${languages}
    
  ## **_Installation_**
  ${installation}

  ## **_Usage_**
  ${usage}

  ## **_Contribution_**
  ${contribution}

  ## **_Tests_**
  ${test}

  ## **_License_**
  ${license}

  ## **_Questions_**
  Don't hesitate to visit [my GitHub](https://github.com/${github})
  or reach me on my [email address](mailto:${emailAddress}) for additional questions.
  `;
};

module.exports = generateMarkdown;
