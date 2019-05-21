//  async - non blocking code siya bes 


// function myfunction(){
//     return 'Hello';

// }

// myfunction().then(res => console.log(res));

// async function myfunction(){
//     const promise = new Promise((resolve, reject => {
//         setTimeout(() => resolve('Hello'), 2000);
//     })); 

//     const error = false;
//     if (!error) {
//         const res = await promise; // wait until promise is resolve 
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went Wrong'));
//     }
// }



// myfunction()
// .then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){
    // await response of the fetch call 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    // only proceed once seconds is resolve 

    return data; 
}

getUsers()
.then(users => console.log(users))
.catch(err => console.log(err));