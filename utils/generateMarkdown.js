// Returns a license badge; if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Creative Commons") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else return "";
}
// Returns the license link; if there is no license, returns an empty string
function renderLicenseLink(link) {
  if (license === "MIT") {
    return "https://opensource.org/license/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/license/apache-2-0";
  } else if (license === "Creative Commons") {
    return "https://creativecommons.org/publicdomain/zero/1.0/";
  } else return "";
}

// Returns the license section; if there is no license, returns an empty string
function renderLicenseSection(section) {
  if (license === "MIT") {
    return "Copyright 2024 [COPYRIGHT HOLDER] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
  } else if (license === "Apache 2.0") {
    return "Copyright 2024 [name of copyright owner] Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.";
  } else if (license === "Creative Commons") {
    return "The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See Other Information below.";
  } else return "No Copyright Information Given";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title} ${renderLicenseBadge(data.badges)}
  ## Description
  
  ${data.description}
  
  ## Installation Instructions
  
  ${data.installation}
  
  ## License Information
  
  ${data.badges} 

  ## Contribution Guidelines
  
  ${data.guidelines}
  
  ## Testing Instructions
  
  ${data.testing}
`;
}

module.exports = generateMarkdown;
