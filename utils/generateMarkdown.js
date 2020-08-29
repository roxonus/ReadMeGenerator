function generateMarkdown(data) {
  return `
# ${data.title}
[![profile-pic](${data.githubpic})]
${data.email}
![Repo size](https://img.shields.io/github/repo-size/${data.username}/${data.title})
## Description
${data.description}
[Installation](#installation)
[Usage](#usage)
[License](#licensing)
[Contributing](#contributing)
[Tests](#tests)
# Installation
 ${data.installation}
# Usage
${data.usage}
# Licensing
${data.licensing}
# Contributing
${data.contributions}
# Tests
${data.testing}
<hr>
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
`;
}

module.exports = generateMarkdown;