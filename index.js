const baseURL = 'https://api.github.com'
let issuesURL = "" 

function getIssues() {
  const url = `${baseURL}/repos/ethannam/javascript-fetch-lab/issues`

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(issues) {
  issuesDiv = document.getElementById("issues")

  for (issue of issues) {
    const newLi = document.createElement("li")
    newLi.innerHTML = `
      Title: <a href="${issue.html_url}">${issue.title}</a><span> | Body: ${issue.body}</span>
    `
    issuesDiv.appendChild(newLi)
  }
}

function createIssue() {
  const url = `${baseURL}/repos/ethannam/javascript-fetch-lab/issues`

  fetch(url, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      body: document.getElementById("body").value
    })
  }).then(resp => resp.json())
    .then(json => getIssues());
}

function showResults(json) {
  result = json
  resultsDiv = document.getElementById("results")
  resultsDiv.innerHTML = `
    <h3>Forked Successfully!</h3>
    <a href="${json.html_url}">Go To Fork</a>
  `
}

function forkRepo() {
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`

  fetch(url, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
