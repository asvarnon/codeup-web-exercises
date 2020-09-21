"use strict";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lecture examples~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const url = "https://api.github.com/users";
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error));

//logs each user with multiple functions within the same .then
// fetch(url)
//     .then(response => {
//         response.json().then(users => {
//             users.forEach( user => {
//                 console.log(user);
//             });
//         });
//     })
//     .catch(error => console.error(error));

//3rd way
// const getGithubUsers = () => fetch(url).get(response => response.json());

// getGithubUsers()
//     .then(users => {
//             users.forEach( user => {
//                 console.log(user);
//             });
//         }).catch(error => console.log(error));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const url = "https://api.github.com/users";
const wycatsURL = "https://api.github.com/users/wycats/repos"
// fetch(url, {headers: {'Authorization': githubToken}})
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const userCommits = (name) => {
    let userURL = `https://api.github.com/users/${name}/repos`
    fetch(userURL, {headers: {'Authorization': githubToken}})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
userCommits("wycats");






