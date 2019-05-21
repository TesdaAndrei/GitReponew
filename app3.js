//ES6 TO BES
// document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJson);
// document.getElementById('button3').addEventListener('click', getExternal);

// const  getText = () => {
//     fetch('test.txt')
//     .then((res) => {
//         //console.log(res.text();
//         return res.text();
//     })
//     .then((data) => {
//         // console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

const getText = () =>{
    fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err))
}


// const getJson = () => {
//     fetch('posts.json')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         let output = '';
//         data.forEach((post) => {
//             output += `<li>${post.Body}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })   

//         .catch((err) => {
//             console.log(err);
//         });
// }

const getJson = () => {
    fetch('post.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(post => {
            output += `<li>${post.body}</li>`;
        })

        document.getElementById('output').innerHTML = output;
    }).catch(err => console.log(err))
    



// Get from external API 
const getExternal =() => {
    fetch('https://api.github.com/users')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let output = ' ';
        data.forEach((user) => {
            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(() => {
        console.log();
    });
}


document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

}