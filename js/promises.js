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
    let userURL = `https://api.github.com/users/${name}/events`
    return fetch(userURL, {headers: {'Authorization': githubToken}})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (let event of data){
                    if(event.type === "PushEvent"){
                        return event.created_at;
                    }
                }
            });
}

//the above function you want to return and retrieve a promise with the date

//once you have the returned promise with the date, THEN you can decide what to do with it.
userCommits("wycats").then(date => console.log('Last commit date:', date));






