"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const threeOrMore = [];
let usersLanguages = users.filter((user) => {
    if ( user.languages[2] !== undefined ) threeOrMore.push(user);
});
console.log(threeOrMore);


const emailAddresses = [];
let userEmails = users.map((user) => { emailAddresses.push(user.email); })
console.log(emailAddresses);


const totalYears = users.reduce((yearCount, user) => {
    return yearCount + user.yearsOfExperience
}, 0);
console.log(totalYears);

let avgYearsOfExperience = totalYears/users.length;
console.log(avgYearsOfExperience);

//FIRST PROP ACTS AS A BLANK COUNTER. Starts with empty string
//first If statement pushes first in array to act as a comparable as "longestEmail". THEN compares that
// to the rest of the emails
const longestEmail = users.reduce((longestEmail, user) => {
    if (user.email.length > longestEmail.length) {
        return user.email;
    } else {
        return longestEmail;
    }
}, "");
console.log(longestEmail);


const instructors  = users.reduce((instructor, user) => {
    if (instructor === "") { return instructor + user.name}
    return instructor + ", " +  user.name;
}, "")
console.log(`Your instructors are: ${instructors}`);

// const instructorLanguages = users.reduce((languages, user) => {
//     for (let language of user.languages) {
//         if (!languages.includes(language)) {
//             languages.push(language);
//         }
//     }
// }, []);

const instructorLanguages = users.reduce((languages, user) => {
    for (let i = 0; i <user.languages.length; i++) {
        if (!languages.includes(user.languages[i])) {
            languages.push(user.languages[i]);
        }
    }
}, []);
console.log(instructorLanguages);



